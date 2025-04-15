import { useState, useEffect } from 'react';
import { FlashcardDeck } from './components/FlashcardDeck';
import { WelcomePage } from './components/WelcomePage';
import { PasswordPrompt } from './components/PasswordPrompt';
import { WelcomeGuide } from './components/WelcomeGuide';
import { GuideTooltip } from './components/GuideTooltip';
import { flashcardSets, FlashcardSet } from './data/flashcards';
import { auth } from './utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { StudyStats } from './components/StudyStats';
import { isFreeTrialMode, isSubcategoryAvailableInFreeTrial } from './utils/freeTrialUtils';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [currentSet, setCurrentSet] = useState<FlashcardSet | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeGuide, setShowWelcomeGuide] = useState(false);
  const [hasSeenGuide, setHasSeenGuide] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showStats, setShowStats] = useState(false);
  const [freeTrialMode, setFreeTrialMode] = useState(true);

  // Check for free trial mode
  useEffect(() => {
    setFreeTrialMode(isFreeTrialMode());
  }, []);

  // Check for existing Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        console.log('User is already signed in:', user.uid);
        console.log('Authentication method:', user.providerId || 'unknown');
        
        // Store the user ID in localStorage for persistence/debugging
        localStorage.setItem('currentUserId', user.uid);
        setIsAuthenticated(true);
        
        // Retrieve last viewed category/subcategory from localStorage
        const lastCategory = localStorage.getItem('lastCategory');
        const lastSubcategory = localStorage.getItem('lastSubcategory');
        
        if (lastCategory) {
          const category = flashcardSets.find(set => set.id === lastCategory);
          if (category) {
            setSelectedCategory(lastCategory);
            setCurrentSet(category);
            
            if (lastSubcategory) {
              const subcategoryExists = category.subcategories.some(sub => sub.id === lastSubcategory);
              if (subcategoryExists) {
                setSelectedSubcategory(lastSubcategory);
              }
            }
          }
        }
      } else {
        console.log('No user is signed in');
        
        // Auto-authenticate without password in free trial version
        setIsAuthenticated(true);
        
        // Clear selections when starting fresh
        setSelectedCategory(null);
        setSelectedSubcategory(null);
        setCurrentSet(null);
      }
      setIsAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  // Save last viewed category/subcategory to localStorage when changed
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem('lastCategory', selectedCategory);
      
      if (selectedSubcategory) {
        localStorage.setItem('lastSubcategory', selectedSubcategory);
      } else {
        localStorage.removeItem('lastSubcategory');
      }
    } else {
      localStorage.removeItem('lastCategory');
      localStorage.removeItem('lastSubcategory');
    }
  }, [selectedCategory, selectedSubcategory]);

  // Initialize dark mode and guide state from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedHasSeenGuide = localStorage.getItem('hasSeenGuide');
    
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    if (savedHasSeenGuide) {
      setHasSeenGuide(true);
    }
  }, []);

  // Show welcome guide after authentication if not seen before
  useEffect(() => {
    if (isAuthenticated && !hasSeenGuide) {
      setShowWelcomeGuide(true);
    }
  }, [isAuthenticated, hasSeenGuide]);

  // Update localStorage and apply dark mode class
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleGuideClose = () => {
    setShowWelcomeGuide(false);
    setHasSeenGuide(true);
    localStorage.setItem('hasSeenGuide', 'true');
  };

  const handleShowGuide = () => {
    setShowWelcomeGuide(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    console.log(`handleCategorySelect called with categoryId: ${categoryId}`);
    
    // Log all available category IDs for debugging
    console.log('Available categories:', flashcardSets.map(set => set.id));
    
    setSelectedCategory(categoryId);
    const selectedSet = flashcardSets.find(set => set.id === categoryId);
    console.log('Selected set:', selectedSet);
    setCurrentSet(selectedSet || null);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    console.log(`handleSubcategorySelect called with subcategoryId: ${subcategoryId}`);
    
    // Log subcategories in the current category for debugging
    if (currentSet) {
      console.log('Available subcategories:', currentSet.subcategories.map(sub => sub.id));
      const subcategory = currentSet.subcategories.find(sub => sub.id === subcategoryId);
      console.log('Selected subcategory:', subcategory);
      
      // Check if this subcategory is available in free trial mode
      if (freeTrialMode && !isSubcategoryAvailableInFreeTrial(currentSet.id, subcategoryId)) {
        console.log('This subcategory is not available in free trial mode');
        return; // Don't set the selected subcategory
      }
    }
    
    setSelectedSubcategory(subcategoryId);
  };

  const handleBackToCategories = () => {
    // Save state before navigating back
    if (selectedCategory && selectedSubcategory) {
      console.log(`Saving state before navigating back. Category: ${selectedCategory}, Subcategory: ${selectedSubcategory}`);
      // The current state will automatically be saved by the useEffect in FlashcardDeck
      // before component unmounts
      
      // Log that we're going back - this helps with debugging
      console.log('Navigating back to categories - this should trigger FlashcardDeck unmount save');
    }
    
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setCurrentSet(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setShowUserMenu(false);
      // Clear any stored auth data
      localStorage.removeItem('manualAuth');
      localStorage.removeItem('currentUserId');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleShowStats = () => {
    setShowStats(true);
    setShowUserMenu(false);
  };

  const handleCloseStats = () => {
    setShowStats(false);
  };

  const renderHeader = () => (
    <header className={`${darkMode ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-sm'} transition-colors duration-200 sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center justify-between">
            <GuideTooltip 
              text="Vítejte v aplikaci flashcards! Začněte výběrem kategorii níže."
              darkMode={darkMode}
              position="bottom"
            >
              <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} truncate flex items-center gap-2`}>
                Flashcards App
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-500 text-white">
                  BETA
                </span>
                {freeTrialMode && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-600 text-white">
                    FREE TRIAL
                  </span>
                )}
                <span className={`text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>v1.17</span>
              </h1>
            </GuideTooltip>
            <div className="flex items-center gap-2 sm:hidden">
              <GuideTooltip 
                text="Need help? Click to see the guide again"
                darkMode={darkMode}
                position="left"
              >
                <button
                  onClick={handleShowGuide}
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-400 hover:text-blue-300' 
                      : 'bg-gray-200 text-blue-600 hover:text-blue-700'
                  }`}
                  aria-label="Show help guide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </GuideTooltip>
              <GuideTooltip 
                text="Toggle between light and dark mode for comfortable viewing"
                darkMode={darkMode}
                position="left"
              >
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </GuideTooltip>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <GuideTooltip 
              text="Need help? Click to see the guide again"
              darkMode={darkMode}
              position="bottom"
            >
              <button
                onClick={handleShowGuide}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 text-blue-400 hover:text-blue-300' 
                    : 'bg-gray-200 text-blue-600 hover:text-blue-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Help</span>
              </button>
            </GuideTooltip>
            {isAuthenticated && user && (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm truncate max-w-[100px]">{user.displayName || user.email}</span>
                </button>
                {showUserMenu && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } ring-1 ring-black ring-opacity-5`}>
                    <div className="py-1">
                      <button
                        onClick={handleShowStats}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          darkMode 
                            ? 'text-white hover:bg-gray-600 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Study Stats
                        </div>
                      </button>
                      <button
                        onClick={handleLogout}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          darkMode 
                            ? 'text-red-400 hover:bg-gray-600 hover:text-red-300' 
                            : 'text-red-600 hover:bg-gray-100 hover:text-red-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="hidden sm:block">
              <GuideTooltip 
                text="Toggle between light and dark mode for comfortable viewing"
                darkMode={darkMode}
                position="bottom"
              >
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </GuideTooltip>
            </div>
            {selectedCategory && (
              <GuideTooltip 
                text="Return to the category selection screen"
                darkMode={darkMode}
                position="bottom"
              >
                <button
                  onClick={handleBackToCategories}
                  className={`w-full sm:w-auto px-4 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  } rounded-lg transition-colors duration-200 text-sm sm:text-base`}
                >
                  Back to Categories
                </button>
              </GuideTooltip>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  if (!isAuthInitialized) {
    // Show loading spinner while checking authentication
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
      {renderHeader()}
      <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {selectedCategory && currentSet ? (
          selectedSubcategory ? (
            (() => {
              console.log(`Rendering FlashcardDeck with categoryId=${selectedCategory}, subcategoryId=${selectedSubcategory}`);
              return (
                <FlashcardDeck 
                  cards={currentSet.subcategories.find(sub => sub.id === selectedSubcategory)?.cards || []} 
                  darkMode={darkMode}
                  categoryId={selectedCategory}
                  subcategoryId={selectedSubcategory}
                />
              );
            })()
          ) : (
            (() => {
              console.log(`Rendering WelcomePage for subcategory selection within category=${selectedCategory}`);
              return (
                <WelcomePage 
                  onCategorySelect={handleSubcategorySelect} 
                  darkMode={darkMode}
                  selectedCategory={currentSet}
                />
              );
            })()
          )
        ) : (
          (() => {
            console.log('Rendering WelcomePage for main category selection');
            return (
              <WelcomePage onCategorySelect={handleCategorySelect} darkMode={darkMode} />
            );
          })()
        )}
      </main>
      {showWelcomeGuide && (
        <WelcomeGuide darkMode={darkMode} onClose={handleGuideClose} />
      )}
      {showStats && (
        <StudyStats darkMode={darkMode} onClose={handleCloseStats} />
      )}
    </div>
  );
}

export default App; 