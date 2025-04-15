import React, { useState, useEffect, useCallback } from 'react';

interface WelcomeGuideProps {
  darkMode: boolean;
  onClose: () => void;
}

export const WelcomeGuide: React.FC<WelcomeGuideProps> = ({ darkMode, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    {
      title: "Vítejte ve Flashcards!",
      content: "Tato aplikace vám pomůže učit se a zapamatovat si informace pomocí kartiček. Pojďme se podívat, jak to funguje.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Vyberte si kategorii",
      content: "Začněte výběrem kategorie kartiček, kterou chcete studovat. Každá kategorie obsahuje sadu kartiček zaměřených na konkrétní téma.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      title: "Studujte a učte se",
      content: "Klikněte na kartičky pro jejich převrácení a zobrazení odpovědi. Použijte navigační tlačítka pro pohyb mezi kartičkami. Přepínání tmavého režimu vám pomůže pohodlně studovat za jakéhokoliv osvětlení.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
  ];

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  }, [currentStep, totalSteps, onClose]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNext, handlePrevious, onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
        max-w-md w-full rounded-xl shadow-2xl p-6 sm:p-8
        transform transition-all duration-300 ease-out
        translate-y-0 scale-100 opacity-100
      `}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {steps[currentStep - 1].icon}
              </span>
              {steps[currentStep - 1].title}
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:bg-opacity-10 ${
                darkMode ? 'hover:bg-white' : 'hover:bg-black'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {steps[currentStep - 1].content}
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index + 1)}
                  className={`
                    h-1.5 rounded-full transition-all duration-200
                    ${index + 1 === currentStep 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 ' + (darkMode ? 'bg-gray-600' : 'bg-gray-300')}
                  `}
                  aria-label={`Přejít na krok ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className={`
                  px-4 py-2 rounded-lg text-sm
                  transition-colors duration-200
                  ${currentStep === 1 ? 'invisible' : 'visible'}
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                ← Zpět
              </button>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Krok {currentStep} z {totalSteps}
              </span>
              <button
                onClick={handleNext}
                className={`
                  px-6 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  transform hover:scale-[1.02] active:scale-[0.98]
                  ${darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'}
                `}
              >
                {currentStep === totalSteps ? 'Začít →' : 'Další →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 