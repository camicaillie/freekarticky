import { Flashcard } from '../data/flashcards';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Adjust the path to your firebase.ts file

/**
 * Spaced Repetition System (SRS) implementation
 * 
 * This system is based on the SM-2 algorithm with some modifications.
 * It schedules cards for review based on previous performance.
 */

export interface SRSCard extends Flashcard {
  id: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  // SRS specific fields
  dueDate?: Date;
  interval?: number; // in days
  easeFactor?: number; // multiplier for interval
  repetitions?: number; // number of times reviewed
  lastReviewed?: Date;
}

// Default values
const DEFAULT_EASE_FACTOR = 2.5;
const DEFAULT_INTERVAL = 1;

/**
 * Calculate the next review date for a card based on difficulty rating
 */
export const calculateNextReview = (
  card: SRSCard,
  difficulty: 'easy' | 'medium' | 'hard'
): SRSCard => {
  // Clone the card to avoid mutating the original
  const updatedCard = { ...card };
  
  // Initialize SRS values if they don't exist
  if (!updatedCard.easeFactor) updatedCard.easeFactor = DEFAULT_EASE_FACTOR;
  if (!updatedCard.interval) updatedCard.interval = DEFAULT_INTERVAL;
  if (!updatedCard.repetitions) updatedCard.repetitions = 0;
  
  // Update card's difficulty rating
  updatedCard.difficulty = difficulty;
  
  // Get current date
  const now = new Date();
  updatedCard.lastReviewed = now;
  
  // Adjust ease factor based on difficulty
  switch (difficulty) {
    case 'easy':
      updatedCard.easeFactor += 0.15;
      break;
    case 'medium':
      updatedCard.easeFactor -= 0.05;
      break;
    case 'hard':
      updatedCard.easeFactor -= 0.3;
      break;
  }
  
  // Ensure ease factor doesn't go below 1.3
  updatedCard.easeFactor = Math.max(1.3, updatedCard.easeFactor);
  
  // Calculate next interval
  if (difficulty === 'hard') {
    // If hard, reset to a shorter interval
    updatedCard.interval = Math.max(1, Math.floor(updatedCard.interval * 0.5));
  } else {
    // For easy/medium, increase the interval
    if (updatedCard.repetitions === 0) {
      updatedCard.interval = 1;
    } else if (updatedCard.repetitions === 1) {
      updatedCard.interval = 3;
    } else {
      updatedCard.interval = Math.round(updatedCard.interval * updatedCard.easeFactor);
    }
  }
  
  // Increment repetition counter
  updatedCard.repetitions += 1;
  
  // Calculate due date
  const dueDate = new Date(now);
  dueDate.setDate(dueDate.getDate() + updatedCard.interval);
  updatedCard.dueDate = dueDate;
  
  return updatedCard;
};

/**
 * Get cards that are due for review
 */
export const getDueCards = (cards: SRSCard[]): SRSCard[] => {
  const now = new Date();
  return cards.filter(card => !card.dueDate || card.dueDate <= now);
};

/**
 * Sort cards by due date (oldest first)
 */
export const sortCardsByDueDate = (cards: SRSCard[]): SRSCard[] => {
  return [...cards].sort((a, b) => {
    // Cards without due dates come first
    if (!a.dueDate) return -1;
    if (!b.dueDate) return 1;
    
    // Sort by due date (oldest first)
    return a.dueDate.getTime() - b.dueDate.getTime();
  });
};

/**
 * Save SRS data to Firestore
 */
export const saveSRSData = async (
  categoryId: string, 
  subcategoryId: string, 
  cards: SRSCard[],
  currentIndex: number = 0
): Promise<void> => {
  const docId = `${categoryId}_${subcategoryId}`;
  console.log(`saveSRSData called with category: ${categoryId}, subcategory: ${subcategoryId}, index: ${currentIndex}`);
  
  if (!auth.currentUser) {
    console.log('User not logged in, cannot save to Firestore');
    return;
  }

  const userId = auth.currentUser.uid;
  console.log(`Preparing to save for user ${userId} (${auth.currentUser.email || 'no email'})`);
  
  const docRef = doc(db, 'users', userId, 'srsData', docId);

  // Clean and convert cards for Firestore
  const serializedCards = cards.map(card => {
    // Create a clean object with only the fields we want to store
    const cleanCard = {
      id: card.id,
      front: card.front,
      back: card.back,
      favorite: card.favorite || false,
      difficulty: card.difficulty || null,
      dueDate: card.dueDate ? card.dueDate.toISOString() : null,
      interval: card.interval || 0,
      easeFactor: card.easeFactor || 2.5,
      repetitions: card.repetitions || 0,
      lastReviewed: card.lastReviewed ? card.lastReviewed.toISOString() : null,
      timesReviewed: card.timesReviewed || 0,
      successRate: card.successRate || 0
    } as const;

    // Remove any null values to avoid Firestore errors
    return Object.fromEntries(
      Object.entries(cleanCard).filter(([_, value]) => value !== null && value !== undefined)
    );
  });

  try {
    // Create a clean document object
    const docData = {
      cards: serializedCards,
      currentIndex,
      lastUpdated: new Date().toISOString(),
      userId,
      userEmail: auth.currentUser.email || 'anonymous',
      categoryId,
      subcategoryId,
      provider: auth.currentUser.providerData.length > 0 ? 
        auth.currentUser.providerData[0].providerId : 'anonymous'
    };

    // Save to Firestore
    await setDoc(docRef, docData, { merge: true });
    console.log(`✅ Successfully saved ${serializedCards.length} cards to Firestore for ${docId}`);
    
    // After successful Firestore save, update localStorage as backup
    try {
      localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
      localStorage.setItem(`flashcard_last_updated_${docId}`, new Date().toISOString());
      localStorage.setItem(`user_progress_${userId}_${docId}`, currentIndex.toString());
    } catch (e) {
      console.warn('Could not save backup to localStorage:', e);
    }
  } catch (error) {
    console.error('Error saving to Firestore:', error);
    // Save to localStorage as fallback
    try {
      localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
      localStorage.setItem(`flashcard_last_updated_${docId}`, new Date().toISOString());
    } catch (e) {
      console.error('Complete save failure - could not save to Firestore or localStorage:', e);
    }
  }
};

/**
 * Load SRS data from Firestore
 */
export const loadSRSData = async (
  categoryId: string, 
  subcategoryId: string, 
  defaultCards: Flashcard[]
): Promise<{ cards: SRSCard[], currentIndex: number }> => {
  console.log(`loadSRSData called with category: ${categoryId}, subcategory: ${subcategoryId}`);
  const docId = `${categoryId}_${subcategoryId}`;

  // First, check local storage for any backup index regardless of authentication
  const localBackupIndex = localStorage.getItem(`flashcard_progress_${docId}`);
  let backupIndex = localBackupIndex ? parseInt(localBackupIndex, 10) : 0;
  
  if (localBackupIndex) {
    console.log(`Found local backup index: ${backupIndex} for ${docId}`);
  }

  // If user is authenticated, try to get data from Firestore
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    console.log(`User is authenticated with ID: ${userId}, email: ${auth.currentUser.email || 'no email'}`);
    console.log(`Looking for document ID: ${docId} for user ${userId}`);
    
    const docRef = doc(db, 'users', userId, 'srsData', docId);

    try {
      const docSnap = await getDoc(docRef);
      console.log('Firestore document snapshot:', docSnap.exists() ? 'exists' : 'does not exist');
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log('Retrieved Firestore data:', {
          currentIndex: data.currentIndex,
          lastUpdated: data.lastUpdated,
          cardCount: data.cards?.length || 0
        });
        
        if (data.cards && data.cards.length > 0) {
          const processedCards = data.cards.map((card: { 
            dueDate?: string; 
            lastReviewed?: string;
            [key: string]: any; 
          }) => ({
            ...card,
            dueDate: card.dueDate ? new Date(card.dueDate) : undefined,
            lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined,
          }));
          
          console.log(`Successfully loaded ${processedCards.length} cards from Firestore`);
          return { 
            cards: processedCards,
            currentIndex: data.currentIndex ?? 0
          };
        }
      }
      
      console.log('No valid card data found in Firestore, using default cards');
    } catch (error) {
      console.error('Error loading from Firestore:', error);
    }
  } else {
    console.log('User not authenticated, skipping Firestore load');
  }

  // If we reach here, either:
  // 1. User is not authenticated
  // 2. Firestore load failed
  // 3. No data exists in Firestore
  // Use default cards with backup index if available
  console.log(`Using default cards with${backupIndex ? ' backup' : ' initial'} index: ${backupIndex}`);
  return { 
    cards: defaultCards.map((card, index) => ({
      ...card,
      id: index + 1,
    })),
    currentIndex: backupIndex
  };
};