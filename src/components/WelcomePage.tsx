import { useState, useEffect } from 'react';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase'; // Adjust the path if needed
import { FlashcardSet, flashcardSets } from '../data/flashcards';
import { LockIcon } from './LockIcon';
import { LockedSubcategoryModal } from './LockedSubcategoryModal';
import { isSubcategoryAvailableInFreeTrial, isFreeTrialMode } from '../utils/freeTrialUtils';

interface WelcomePageProps {
  onCategorySelect: (category: string) => void;
  darkMode?: boolean;
  selectedCategory?: FlashcardSet | null;
}

export const WelcomePage = ({ onCategorySelect, darkMode = false, selectedCategory }: WelcomePageProps) => {
  const [user, setUser] = useState<any>(null); // Store the logged-in user
  const [showLockedModal, setShowLockedModal] = useState(false);
  const [freeTrialMode, setFreeTrialMode] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Check if we're in free trial mode
  useEffect(() => {
    setFreeTrialMode(isFreeTrialMode());
  }, []);

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Login successful:", result);
    } catch (error: any) {
      console.error("Google login failed:", error);
      // Log specific error details
      if (error.code) {
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
      }
      if (error.customData) {
        console.error("Custom data:", error.customData);
      }
    }
  };

  // Handle subcategory selection based on free trial availability
  const handleSubcategorySelect = (subcategoryId: string) => {
    const categoryId = selectedCategory?.id || '';
    
    // If we're in free trial mode, check if subcategory is available
    if (freeTrialMode && !isSubcategoryAvailableInFreeTrial(categoryId, subcategoryId)) {
      setShowLockedModal(true);
      return;
    }
    
    // Otherwise allow selection
    onCategorySelect(subcategoryId);
  };

  // Use the actual category data from flashcardSets to create UI categories
  const categories = flashcardSets.map(set => ({
    id: set.id,
    name: set.name,
    color: 
      set.id === 'general' 
        ? darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
        : set.id === 'pravo-politologie'
          ? darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
          : darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
  }));

  // If the user is not logged in, show the login button
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-2 mb-2">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Vítejte ve Flashcards!
          </h2>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-500 text-white">
            BETA
          </span>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            v1.17
          </span>
        </div>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
          Přihlaste se pro začátek učení
        </p>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-300 hover:bg-gray-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium">Sign in with Google</span>
        </button>
      </div>
    );
  }

  // If a category is selected, show subcategories
  if (selectedCategory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4">
        <h2 className={`text-2xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4 sm:mb-8 text-center`}>
          {selectedCategory.name}
        </h2>
        <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 sm:mb-12 text-center`}>
          Vyberte si podkategorii pro studium
        </p>

        {freeTrialMode && (
          <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-yellow-900/20 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}>
            <p className="text-center text-sm font-medium">
              Používáte bezplatnou verzi - k dispozici jsou pouze vybrané sady kartiček.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
          {selectedCategory.subcategories.map((subcategory) => {
            const isLocked = freeTrialMode && !isSubcategoryAvailableInFreeTrial(selectedCategory.id, subcategory.id);
            
            return (
              <button
                key={subcategory.id}
                onClick={() => handleSubcategorySelect(subcategory.id)}
                className={`
                  group relative overflow-hidden
                  rounded-xl p-4 sm:p-6 shadow-lg 
                  transition-all duration-300 ease-out
                  transform hover:scale-[1.02]
                  ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
                `}
              >
                {isLocked && (
                  <>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10 flex items-center justify-center">
                      <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-12 w-12" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke={darkMode ? "#F59E0B" : "#B45309"}
                          strokeWidth={2}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                          />
                        </svg>
                      </div>
                    </div>
                    <LockIcon darkMode={darkMode} />
                  </>
                )}
                
                <div className={`relative ${isLocked ? 'z-5 opacity-70' : 'z-10'} flex flex-col h-full`}>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {subcategory.name}
                  </h3>

                  <div className={`flex items-center gap-2 mt-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span className="text-base sm:text-lg font-medium">{subcategory.cards.length} kartiček</span>
                  </div>
                </div>

                {/* Subtle decorative element */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    transform origin-left transition-transform duration-300
                    ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}
                    scale-x-0 group-hover:scale-x-100
                  `}
                ></div>
              </button>
            );
          })}
        </div>

        {/* Locked content modal */}
        {showLockedModal && (
          <LockedSubcategoryModal 
            darkMode={darkMode}
            onClose={() => setShowLockedModal(false)}
          />
        )}
      </div>
    );
  }

  // If logged in but no category is selected, show the category selection
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}>
        Vítejte, {user.displayName || 'Uživateli'}!
      </h2>
      
      {freeTrialMode && (
        <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-yellow-900/20 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}>
          <p className="text-center font-medium">
            Používáte bezplatnou verzi - k dispozici jsou pouze vybrané sady kartiček.
          </p>
        </div>
      )}
      
      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
        Vyberte si kategorii pro začátek učení
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`${category.color} text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
          >
            <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
            <p className="text-white/90">Začít učení {category.name.toLowerCase()}</p>
          </button>
        ))}
      </div>
    </div>
  );
};