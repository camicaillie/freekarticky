import { useState, useEffect } from 'react';
import { Flashcard } from './Flashcard';
import { Flashcard as FlashcardType } from '../data/flashcards';
import { StudyStats } from './StudyStats';
import { CompletionModal } from './CompletionModal';
import { IntroductionCourse } from './IntroductionCourse';
import { introductionCourses } from '../data/introductionCourses';
import { 
  SRSCard, 
  calculateNextReview, 
  loadSRSData, 
  saveSRSData,
  getDueCards
} from '../utils/spacedRepetition';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

interface FlashcardDeckProps {
  cards: FlashcardType[];
  darkMode?: boolean;
  categoryId?: string;
  subcategoryId?: string;
}

export const FlashcardDeck = ({ cards: initialCards, darkMode = false, categoryId = 'default', subcategoryId = '' }: FlashcardDeckProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [cards, setCards] = useState<SRSCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [useSRS, setUseSRS] = useState(true);
  const [isReviewingHard, setIsReviewingHard] = useState(false);
  const [reviewedCardIds, setReviewedCardIds] = useState<Set<number>>(new Set());
  const [reviewResults, setReviewResults] = useState({ easy: 0, medium: 0, hard: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'favorites' | 'due' | 'easy' | 'medium' | 'hard'>('all');
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [authStatus, setAuthStatus] = useState<{isLoggedIn: boolean, provider: string, email: string | null}>({
    isLoggedIn: false,
    provider: '',
    email: null
  });

  // Load SRS data on component mount and when category/subcategory changes
  useEffect(() => {
    const fetchCards = async () => {
      // Always show loading state when changing categories/subcategories
      setIsLoading(true);
      console.log(`Loading data for category: ${categoryId}, subcategory: ${subcategoryId}`);
      
      try {
        const defaultCards = initialCards.map((card, index) => ({
          ...card,
          id: index,
          difficulty: undefined,
          dueDate: undefined,
          interval: undefined,
          easeFactor: 2.5,
          repetitions: 0
        }));
        
        // Get saved data including current index
        const loadedData = await loadSRSData(categoryId, subcategoryId, defaultCards);
        setCards(loadedData.cards);
        
        // Set the current index from the saved data
        console.log(`Loaded current index: ${loadedData.currentIndex} for ${categoryId}/${subcategoryId}`);
        if (loadedData.currentIndex < loadedData.cards.length) {
          setCurrentIndex(loadedData.currentIndex);
        } else {
          // If the saved index is out of bounds, reset to 0
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error('Error loading SRS data:', error);
        // Fallback to default cards if loading fails
        setCards(initialCards.map((card, index) => ({
          ...card,
          id: index,
          difficulty: undefined,
          dueDate: undefined,
          interval: undefined,
          easeFactor: 2.5,
          repetitions: 0
        })));
        setCurrentIndex(0); // Reset to beginning
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, [categoryId, subcategoryId, initialCards]);

  // Get category name from URL
  useEffect(() => {
    const path = window.location.pathname;
    const category = path.split('/').pop() || '';
    setCategoryName(category);
  }, []);

  // Save when card difficulty changes (meaning the user is actively working through cards)
  useEffect(() => {
    const saveCards = async () => {
      if (useSRS && cards.length > 0) {
        try {
          console.log(`Saving cards and index ${currentIndex} for ${categoryId}/${subcategoryId}`);
          await saveSRSData(categoryId, subcategoryId, cards, currentIndex);
        } catch (error) {
          console.error('Error saving SRS data:', error);
        }
      }
    };

    // We want to save immediately whenever cards change
    saveCards();
    
    // Save data when unmounting component (switching between decks)
    return () => {
      if (useSRS && cards.length > 0) {
        console.log(`Unmounting - saving final state for ${categoryId}/${subcategoryId}, currentIndex: ${currentIndex}`);
        
        // Use localStorage as a reliable backup when component unmounts
        try {
          const docId = `${categoryId}_${subcategoryId}`;
          localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
        } catch (e) {
          console.error('Failed to save to localStorage:', e);
        }
        
        // Also try to save to Firestore
        saveSRSData(categoryId, subcategoryId, cards, currentIndex)
          .catch(error => console.error('Error saving SRS data on unmount:', error));
      }
    };
  }, [cards, categoryId, subcategoryId, useSRS, currentIndex]);

  // Save currentIndex immediately every time it changes
  useEffect(() => {
    const saveCurrentIndexWithDebounce = () => {
      const debounceTimer = setTimeout(async () => {
        if (useSRS && cards.length > 0 && auth.currentUser) {
          try {
            const userId = auth.currentUser.uid;
            const docId = `${categoryId}_${subcategoryId}`;
            console.log(`Syncing currentIndex (${currentIndex}) for ${docId} to user ${userId}`);
            
            // Always store in localStorage for offline backup
            localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
            localStorage.setItem(`flashcard_last_updated_${docId}`, new Date().toISOString());
            
            // Store the combination of user ID and deck for easier retrieval
            const progressKey = `${userId}_${docId}`;
            localStorage.setItem(`user_progress_${progressKey}`, currentIndex.toString());
            
            // Direct call to Firestore to save the current index
            const docRef = doc(db, 'users', userId, 'srsData', docId);
            await setDoc(docRef, { 
              currentIndex,
              lastUpdated: new Date().toISOString(),
              userId: userId,
              userEmail: auth.currentUser.email || 'unknown',
              categoryId,
              subcategoryId
            }, { merge: true });
            
            console.log(`Successfully saved progress to Firestore for ${userId}`);
          } catch (error) {
            console.error('Error in index sync:', error);
            // On error, make sure we at least have the localStorage backup
            const docId = `${categoryId}_${subcategoryId}`;
            localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
          }
        } else if (cards.length > 0) {
          // If not signed in, still save to localStorage
          const docId = `${categoryId}_${subcategoryId}`;
          localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
          console.log(`Saved progress to localStorage only: ${currentIndex} for ${docId}`);
        }
      }, 300);
      
      return debounceTimer;
    };
    
    const timerId = saveCurrentIndexWithDebounce();
    return () => clearTimeout(timerId);
  }, [currentIndex, categoryId, subcategoryId, auth.currentUser, useSRS, cards.length]);
  
  // Event listener for when the page/tab is about to close
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (useSRS && cards.length > 0 && auth.currentUser) {
        try {
          console.log(`Page unloading - trying to save index: ${currentIndex}`);
          const userId = auth.currentUser.uid;
          const docId = `${categoryId}_${subcategoryId}`;
          const docRef = doc(db, 'users', userId, 'srsData', docId);
          
          // Use synchronous localStorage as a backup in case the async Firestore call doesn't complete
          localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
          
          // Try to save to Firestore, but this might not complete if the page is closing
          setDoc(docRef, { 
            currentIndex,
            lastUpdated: new Date().toISOString()
          }, { merge: true });
        } catch (error) {
          console.error('Error saving before unload:', error);
        }
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentIndex, categoryId, subcategoryId, useSRS, cards.length, auth.currentUser]);

  // Filter cards based on search query and filter type
  const filteredCards = cards.filter(card => {
    const matchesSearch = searchQuery === '' || 
      card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.back.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filterType === 'all' ||
      (filterType === 'favorites' && card.favorite) ||
      (filterType === 'due' && card.dueDate && new Date(card.dueDate) <= new Date()) ||
      (filterType === card.difficulty);

    return matchesSearch && matchesFilter;
  });

  // Get hard cards for review
  const hardCards = cards.filter(card => card.difficulty === 'hard');
  
  // Get due cards for SRS
  const dueCards = getDueCards(cards);
  
  // Calculate progress
  const progress = {
    total: cards.length,
    reviewed: cards.filter(card => card.difficulty).length,
    easy: cards.filter(card => card.difficulty === 'easy').length,
    medium: cards.filter(card => card.difficulty === 'medium').length,
    hard: cards.filter(card => card.difficulty === 'hard').length,
    favorites: cards.filter(card => card.favorite).length,
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle keyboard events if not showing review prompt or scoreboard
      if (!showReviewPrompt && !showScoreboard) {
        switch (e.code) {
          case 'Space':
            e.preventDefault(); // Prevent page scroll
            setIsFlipped(prev => !prev);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            handlePrevious();
            setIsFlipped(false); // Reset flip state
            break;
          case 'ArrowRight':
            e.preventDefault();
            handleNext();
            setIsFlipped(false); // Reset flip state
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showReviewPrompt, showScoreboard]);

  const handleNext = () => {
    if (isReviewingHard) {
      if (filteredCards.length <= 1) {
        // If we're on the last card, stay on this card
        // It will be removed when rated
        return;
      }
    }
    
    // In normal mode
    const nextIndex = currentIndex + 1;
    
    // Only show review prompt if:
    // 1. We're at the end of the deck
    // 2. We're not already reviewing hard cards
    // 3. We have hard cards to review
    // 4. No filters are active
    // 5. No search query is active
    if (nextIndex >= filteredCards.length && 
        !isReviewingHard && 
        hardCards.length > 0 && 
        filterType === 'all' && 
        !searchQuery.trim()) {
      setShowReviewPrompt(true);
    } else {
      // If we're at the end and don't meet conditions for review prompt,
      // stay on the last card
      if (nextIndex >= filteredCards.length) {
        return;
      }
      setCurrentIndex(nextIndex);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (filteredCards.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    setIsFlipped(false);
  };

  const checkForCompletion = () => {
    const allCards = cards.filter(card => card.difficulty);
    const totalReviewed = allCards.length;
    const totalCards = cards.length;
    
    if (totalReviewed === totalCards && totalCards > 0) {
      const hasHardCards = allCards.some(card => card.difficulty === 'hard');
      if (!hasHardCards) {
        setShowCompletionModal(true);
      }
    }
  };

  const handleDifficultySelect = (difficulty: 'easy' | 'medium' | 'hard') => {
    if (isReviewingHard) {
      // Review mode
      const currentCard = filteredCards[currentIndex];
      
      // Update review results
      setReviewResults(prev => ({
        ...prev,
        [difficulty]: prev[difficulty] + 1
      }));
      
      // Mark this card as reviewed
      setReviewedCardIds(prev => {
        const newSet = new Set(prev);
        newSet.add(currentCard.id);
        return newSet;
      });
      
      // Update card using SRS if enabled
      if (useSRS) {
        setCards(prevCards => prevCards.map(card => 
          card.id === currentCard.id 
            ? calculateNextReview(card, difficulty) 
            : card
        ));
      } else {
        // Traditional update without SRS
        setCards(prevCards => prevCards.map(card => 
          card.id === currentCard.id 
            ? { ...card, difficulty } 
            : card
        ));
      }
      
      // Get the updated list of cards to review (after removing this one)
      const remainingCards = hardCards.filter(card => 
        !reviewedCardIds.has(card.id) && card.id !== currentCard.id
      );
      
      if (remainingCards.length === 0) {
        // No more cards to review, show scoreboard
        setShowScoreboard(true);
      } else {
        // Move to next card or reset index if needed
        if (currentIndex >= remainingCards.length) {
          setCurrentIndex(0);
        }
        setIsFlipped(false);
      }
    } else {
      // Normal mode
      if (useSRS) {
        // Use spaced repetition algorithm
        setCards(prevCards => prevCards.map(card => 
          card.id === filteredCards[currentIndex].id 
            ? calculateNextReview(card, difficulty) 
            : card
        ));
      } else {
        // Traditional update without SRS
        setCards(prevCards => prevCards.map(card => 
          card.id === filteredCards[currentIndex].id 
            ? { ...card, difficulty } 
            : card
        ));
      }
      
      // Check for completion after updating card difficulty
      setTimeout(() => {
        checkForCompletion();
      }, 0);
      
      // Move to next card
      const nextIndex = (currentIndex + 1) % filteredCards.length;
      if (nextIndex === 0 && hardCards.length > 0 && filterType === 'all' && !searchQuery.trim()) {
        setShowReviewPrompt(true);
      } else {
        setCurrentIndex(nextIndex);
        setIsFlipped(false);
      }
    }
  };

  const handleToggleFavorite = () => {
    if (filteredCards.length === 0) return;
    
    setCards(prevCards => {
      return prevCards.map(card => 
        card.id === filteredCards[currentIndex].id 
          ? { ...card, favorite: !card.favorite } 
          : card
      );
    });
  };

  // Save study session to Firestore
  const saveStudySession = async () => {
    if (!auth.currentUser) {
      console.log('User not logged in, cannot save study session');
      return;
    }

    const easy = cards.filter(card => card.difficulty === 'easy').length;
    const medium = cards.filter(card => card.difficulty === 'medium').length;
    const hard = cards.filter(card => card.difficulty === 'hard').length;
    const cardsReviewed = easy + medium + hard;
    
    if (cardsReviewed === 0) return; // Don't save empty sessions
    
    const session = {
      date: new Date().toISOString(),
      cardsReviewed,
      performance: { easy, medium, hard },
      category: categoryName || 'General',
      userId: auth.currentUser.uid
    };
    
    try {
      const sessionsRef = collection(db, 'studySessions');
      await addDoc(sessionsRef, session);
    } catch (error) {
      console.error('Error saving study session:', error);
    }
  };

  // Modified handleRestart to save session
  const handleRestart = () => {
    // Save current session if cards were reviewed
    if (progress.reviewed > 0) {
      saveStudySession();
    }
    
    setIsReviewingHard(false);
    setCurrentIndex(0);
    setShowReviewPrompt(false);
    setShowScoreboard(false);
    setIsFlipped(false);
    setReviewedCardIds(new Set());
    setReviewResults({ easy: 0, medium: 0, hard: 0 });
    setCards(cards.map(card => ({ ...card, difficulty: undefined })));
    setSearchQuery('');
    setFilterType('all');
  };

  // Modified handleSkipHardReview to save session
  const handleSkipHardReview = () => {
    saveStudySession();
    setShowReviewPrompt(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSearchQuery('');
    setFilterType('all');
  };

  // Handle starting hard cards review
  const handleStartHardReview = () => {
    setIsReviewingHard(true);
    setShowReviewPrompt(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedCardIds(new Set());
    setReviewResults({ easy: 0, medium: 0, hard: 0 });
    setSearchQuery('');
    setFilterType('all');
  };

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const user = auth.currentUser;
      if (user) {
        const provider = user.providerData.length > 0 
          ? user.providerData[0].providerId 
          : 'anonymous';
        setAuthStatus({
          isLoggedIn: true,
          provider,
          email: user.email
        });
        console.log(`User is authenticated: ${user.uid}, Provider: ${provider}, Email: ${user.email || 'none'}`);
      } else {
        setAuthStatus({
          isLoggedIn: false,
          provider: '',
          email: null
        });
        console.log('User is not authenticated');
      }
    };
    
    checkAuth();
    
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(() => {
      checkAuth();
    });
    
    return () => unsubscribe();
  }, []);

  // Navigation handler to go back to categories
  const goBackToCategories = () => {
    // Save current state before navigating
    if (useSRS && cards.length > 0) {
      try {
        const docId = `${categoryId}_${subcategoryId}`;
        localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
        
        if (auth.currentUser) {
          const userId = auth.currentUser.uid;
          const docRef = doc(db, 'users', userId, 'srsData', docId);
          setDoc(docRef, { 
            currentIndex,
            lastUpdated: new Date().toISOString()
          }, { merge: true });
        }
      } catch (error) {
        console.error('Error saving before navigating back:', error);
      }
    }
    
    // Use window.history to go back or redirect to home
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  // Toggle stats display
  const toggleShowStats = () => {
    setShowStats(!showStats);
  };

  // Show scoreboard
  if (showScoreboard) {
    // Get cards that were improved (changed from hard to easy/medium)
    const improvedCards = cards.filter(card => 
      reviewedCardIds.has(card.id) && 
      card.difficulty !== 'hard'
    );

    // Get newly marked hard cards
    const newHardCards = cards.filter(card => 
      card.difficulty === 'hard' && 
      !reviewedCardIds.has(card.id)
    );

    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <div className={`text-2xl font-bold ${darkMode ? 'text-white bg-gray-800' : 'text-gray-700 bg-white'} px-8 py-6 rounded-xl shadow-sm text-center`}>
          <p>Review Complete! 🎉</p>
          <div className="mt-6 space-y-4">
            <p className="text-lg">Your Review Results:</p>
            <div className="grid grid-cols-3 gap-4">
              <div className={`${darkMode ? 'bg-green-900' : 'bg-green-100'} p-4 rounded-lg`}>
                <p className={`${darkMode ? 'text-green-300' : 'text-green-800'} font-semibold`}>Easy</p>
                <p className="text-2xl">{reviewResults.easy}</p>
              </div>
              <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} p-4 rounded-lg`}>
                <p className={`${darkMode ? 'text-yellow-300' : 'text-yellow-800'} font-semibold`}>Medium</p>
                <p className="text-2xl">{reviewResults.medium}</p>
              </div>
              <div className={`${darkMode ? 'bg-red-900' : 'bg-red-100'} p-4 rounded-lg`}>
                <p className={`${darkMode ? 'text-red-300' : 'text-red-800'} font-semibold`}>Hard</p>
                <p className="text-2xl">{reviewResults.hard}</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              You improved {reviewResults.easy + reviewResults.medium} out of {hardCards.length} cards!
            </p>
            
            {/* Show improved cards */}
            {improvedCards.length > 0 && (
              <div className="mt-6">
                <p className="text-lg font-semibold mb-2">Cards You Improved:</p>
                <div className="max-h-48 overflow-y-auto">
                  {improvedCards.map(card => (
                    <div 
                      key={card.id}
                      className={`p-3 mb-2 rounded-lg ${
                        darkMode 
                          ? card.difficulty === 'easy' 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-yellow-900 text-yellow-300'
                          : card.difficulty === 'easy'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      <p className="font-medium">{card.front}</p>
                      <p className="text-sm opacity-75">{card.back}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show prompt for new hard cards */}
            {newHardCards.length > 0 && (
              <div className="mt-6">
                <p className="text-lg font-semibold mb-2">
                  You marked {newHardCards.length} new cards as hard during this review.
                </p>
                <p className="text-lg mb-4">Would you like to review these new hard cards now?</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setIsReviewingHard(true);
                      setShowScoreboard(false);
                      setCurrentIndex(0);
                      setIsFlipped(false);
                      setReviewedCardIds(new Set());
                      setReviewResults({ easy: 0, medium: 0, hard: 0 });
                    }}
                    className={`px-6 py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
                  >
                    Review New Hard Cards
                  </button>
                  <button
                    onClick={handleRestart}
                    className={`px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
                  >
                    Start New Session
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {newHardCards.length === 0 && (
          <button
            onClick={handleRestart}
            className={`px-6 py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
          >
            Start New Session
          </button>
        )}
      </div>
    );
  }

  // Show review prompt
  if (showReviewPrompt) {
    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <div className={`text-2xl font-bold ${darkMode ? 'text-white bg-gray-800' : 'text-gray-700 bg-white'} px-8 py-6 rounded-xl shadow-sm text-center`}>
          <p>You've completed the deck! 🎉</p>
          <p className="text-lg mt-2">You marked {hardCards.length} cards as hard.</p>
          <p className="text-lg mt-2">Would you like to review them?</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleStartHardReview}
            className={`px-6 py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
          >
            Review Hard Cards
          </button>
          <button
            onClick={handleSkipHardReview}
            className={`px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
          >
            Skip Review
          </button>
        </div>
        <button
          onClick={handleRestart}
          className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}
        >
          Start New Session
        </button>
      </div>
    );
  }

  // Nothing to display if there are no cards
  if (filteredCards.length === 0) {
    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <div className={`text-2xl font-bold ${darkMode ? 'text-white bg-gray-800' : 'text-gray-700 bg-white'} px-8 py-6 rounded-xl shadow-sm text-center`}>
          <p>
            {isReviewingHard 
              ? "No hard cards to review!" 
              : filterType !== 'all' || searchQuery
                ? "No cards match your filters or search"
                : "No cards in this deck!"}
          </p>
        </div>
        <div className="flex gap-4">
          {(filterType !== 'all' || searchQuery) && (
            <button
              onClick={() => { setFilterType('all'); setSearchQuery(''); }}
              className={`px-6 py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
            >
              Clear Filters
            </button>
          )}
          <button
            onClick={handleRestart}
            className={`px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
          >
            Start New Session
          </button>
        </div>
      </div>
    );
  }

  // Add loading indicator at the top of the return statement
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-900 dark:text-white">Loading flashcards...</p>
          {authStatus.isLoggedIn && (
            <p className="text-md text-gray-600 dark:text-gray-300 mt-2">
              Syncing data for {authStatus.email || 'your account'} 
              {authStatus.provider === 'google.com' && ' (Google)'}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Deck Header */}
      <div className="px-2 sm:px-4 py-2 flex justify-between items-center border-b">
        <div className="flex items-center">
          <button 
            onClick={goBackToCategories}
            className={`mr-2 py-1 px-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            ← Back
          </button>
          <h2 className="text-lg sm:text-xl font-bold truncate max-w-[150px] sm:max-w-[300px]">{subcategoryId || categoryId}</h2>
        </div>
        <div className="flex items-center">
          {authStatus.isLoggedIn ? (
            <div className="flex items-center text-xs sm:text-sm mr-2 sm:mr-3">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
              <span title={`Logged in as ${authStatus.email || 'authenticated user'}`} className="hidden sm:inline">
                {authStatus.provider === 'google.com' ? 'Google Sync' : 'Sync Active'}
              </span>
            </div>
          ) : (
            <div className="flex items-center text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 mr-2 sm:mr-3">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-1"></span>
              <span className="hidden sm:inline">Local Only</span>
            </div>
          )}
          <button 
            onClick={toggleShowStats}
            className={`py-1 px-2 sm:px-3 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            Stats
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-grow overflow-x-hidden">
        {showIntroduction && introductionCourses[categoryId] && introductionCourses[categoryId][subcategoryId] ? (
          <IntroductionCourse
            slides={introductionCourses[categoryId][subcategoryId]}
            onComplete={() => setShowIntroduction(false)}
            darkMode={darkMode}
          />
        ) : (
          <div className="space-y-4 p-2 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mx-auto container">
              {/* Mode indicator and Stats button row */}
              <div className="w-full max-w-[95vw] sm:max-w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {isReviewingHard ? (
                    <div className={`text-base sm:text-lg font-medium ${darkMode ? 'text-red-300 bg-red-900' : 'text-red-600 bg-red-50'} px-3 sm:px-4 py-1 sm:py-2 rounded-full`}>
                      Reviewing Hard Cards ({filteredCards.length} remaining)
                    </div>
                  ) : useSRS && filterType === 'due' ? (
                    <div className={`text-base sm:text-lg font-medium ${darkMode ? 'text-blue-300 bg-blue-900' : 'text-blue-600 bg-blue-50'} px-3 sm:px-4 py-1 sm:py-2 rounded-full`}>
                      Due Cards: {dueCards.length}
                    </div>
                  ) : null}
                  
                  {/* SRS Toggle */}
                  <div className="flex items-center gap-2">
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>SRS</span>
                    <button
                      onClick={() => setUseSRS(prev => !prev)}
                      className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                        useSRS 
                          ? darkMode ? 'bg-blue-600' : 'bg-blue-500'
                          : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          useSRS ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowStats(true)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                  } text-white transition-colors duration-200`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span className="hidden sm:inline">Study Stats</span>
                </button>
              </div>

              {/* Search and filter */}
              {!isReviewingHard && (
                <div className="w-full max-w-[95vw] sm:max-w-full">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex-grow">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Vyhledat..."
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentIndex(0);
                          }}
                          className={`w-full px-2 sm:px-4 py-2 border text-sm sm:text-base ${darkMode ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-600' : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-500'} rounded-lg focus:outline-none focus:ring-2`}
                        />
                        {searchQuery.trim() && (
                          <button
                            onClick={() => {
                              setSearchQuery('');
                              setCurrentIndex(0);
                            }}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-opacity-20 ${
                              darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-200'
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                      <p className={`mt-1 text-[10px] sm:text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Vyhledejte podle: obsahu, obtížnosti (hard/medium/easy), termínu, intervalu
                      </p>
                    </div>
                    <div className="flex w-full">
                      <select
                        value={filterType}
                        onChange={(e) => {
                          setFilterType(e.target.value as any);
                          setCurrentIndex(0);
                        }}
                        className={`w-full px-2 sm:px-4 py-2 text-sm sm:text-base border rounded-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-600' : 'bg-white text-gray-700 border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
                      >
                        <option value="all">All Cards</option>
                        <option value="favorites">Favorites</option>
                        {useSRS && <option value="due">Due for Review</option>}
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Filter info */}
                  {(filterType !== 'all' || searchQuery) && (
                    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Showing: {filteredCards.length} of {cards.length} cards
                        {filterType !== 'all' && ` (${filterType})`}
                        {searchQuery && ` matching "${searchQuery}"`}
                      </p>
                      <button
                        onClick={() => { setFilterType('all'); setSearchQuery(''); }}
                        className={`text-xs sm:text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                      >
                        Clear filters
                      </button>
                    </div>
                  )}

                  {/* SRS info (show due dates) */}
                  {useSRS && filteredCards.length > 0 && filteredCards[currentIndex].dueDate && (
                    <div className={`mt-2 mb-4 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <p>
                        Due: {filteredCards[currentIndex].dueDate.toLocaleDateString()} 
                        {filteredCards[currentIndex].interval && ` (Interval: ${filteredCards[currentIndex].interval} days)`}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Progress bar */}
              <div className="w-full max-w-[95vw] sm:max-w-full">
                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">
                  <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Progress: {isReviewingHard ? `${reviewedCardIds.size} / ${hardCards.length}` : `${progress.reviewed} / ${progress.total}`} cards reviewed
                  </span>
                  <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {Math.round((isReviewingHard ? reviewedCardIds.size / hardCards.length : progress.reviewed / progress.total) * 100)}%
                  </span>
                </div>
                <div className={`h-1.5 sm:h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <div className="flex h-full">
                    <div 
                      className="bg-green-500 h-full transition-all duration-300"
                      style={{ width: `${(isReviewingHard ? reviewResults.easy / hardCards.length : progress.easy / progress.total) * 100}%` }}
                    />
                    <div 
                      className="bg-yellow-500 h-full transition-all duration-300"
                      style={{ width: `${(isReviewingHard ? reviewResults.medium / hardCards.length : progress.medium / progress.total) * 100}%` }}
                    />
                    <div 
                      className="bg-red-500 h-full transition-all duration-300"
                      style={{ width: `${(isReviewingHard ? reviewResults.hard / hardCards.length : progress.hard / progress.total) * 100}%` }}
                    />
                  </div>
                </div>
                <div className={`flex flex-wrap justify-between gap-2 mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span>Easy: {isReviewingHard ? reviewResults.easy : progress.easy}</span>
                  <span>Medium: {isReviewingHard ? reviewResults.medium : progress.medium}</span>
                  <span>Hard: {isReviewingHard ? reviewResults.hard : progress.hard}</span>
                  <span>Favorites: {progress.favorites}</span>
                </div>
              </div>

              <div className={`text-lg sm:text-2xl font-bold ${darkMode ? 'text-white bg-gray-800' : 'text-gray-700 bg-white'} px-4 sm:px-6 py-2 rounded-full shadow-sm`}>
                Card {currentIndex + 1} of {filteredCards.length}
              </div>
              
              <div className="perspective-1000 w-full max-w-[95vw] sm:max-w-full md:max-w-xl lg:max-w-2xl">
                <Flashcard
                  front={filteredCards[currentIndex].front}
                  back={filteredCards[currentIndex].back}
                  onDifficultySelect={handleDifficultySelect}
                  isFlipped={isFlipped}
                  onFlip={() => setIsFlipped(prev => !prev)}
                  isFavorite={filteredCards[currentIndex].favorite}
                  onToggleFavorite={handleToggleFavorite}
                  darkMode={darkMode}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className={`px-4 sm:px-6 py-2 sm:py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className={`px-4 sm:px-6 py-2 sm:py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
                >
                  Next
                </button>
              </div>

              {/* Keyboard shortcuts help */}
              <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-4 text-center`}>
                Keyboard shortcuts: 
                <span className={`mx-1 sm:mx-2 px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded`}>Space</span> to flip card,
                <span className={`mx-1 sm:mx-2 px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded`}>←</span> previous card,
                <span className={`mx-1 sm:mx-2 px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded`}>→</span> next card
              </div>

              {/* Restart button */}
              <button
                onClick={handleRestart}
                className={`px-4 sm:px-6 py-2 sm:py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200 font-medium shadow-sm`}
              >
                Restart Session
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Modals */}
      {showCompletionModal && (
        <CompletionModal
          totalCards={cards.length}
          onClose={() => setShowCompletionModal(false)}
          darkMode={darkMode}
        />
      )}
      
      {showStats && (
        <StudyStats
          onClose={toggleShowStats}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}; 