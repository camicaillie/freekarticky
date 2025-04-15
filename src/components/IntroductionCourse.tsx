import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface IntroductionSlide {
  title: string;
  content: string;
}

interface IntroductionCourseProps {
  darkMode?: boolean;
  onComplete: () => void;
  slides: IntroductionSlide[];
}

export const IntroductionCourse = ({ darkMode = false, onComplete, slides }: IntroductionCourseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'Escape') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className={`fixed inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'} z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`w-full max-w-[95vw] sm:max-w-xl md:max-w-3xl lg:max-w-4xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl shadow-xl overflow-hidden backdrop-blur-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
      >
        <div className="relative flex flex-col h-[90vh] sm:h-[80vh] md:h-[70vh] lg:h-[75vh]">
          {/* Skip button */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-16 z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className={`px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-medium 
                transition-colors duration-200 flex items-center gap-1 sm:gap-2
                ${darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 backdrop-blur-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 backdrop-blur-sm'
                }`}
            >
              Skip Course
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className={`h-1 sm:h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} relative`}>
            <motion.div
              className={`h-full ${darkMode ? 'bg-blue-500' : 'bg-blue-500'}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                boxShadow: `0 0 10px ${darkMode ? '#3B82F6' : '#3B82F6'}`
              }}
            />
          </div>

          {/* Progress text */}
          <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 text-xs sm:text-sm md:text-base font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Content area - Made scrollable */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-3 sm:p-6 md:p-8 lg:p-10 pt-12 sm:pt-16"
            >
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none whitespace-pre-wrap text-sm sm:text-base md:text-lg lg:prose-xl`}
              >
                {slides[currentSlide].content}
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation controls - Fixed at bottom */}
          <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}">
            <button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 flex items-center gap-2
                ${darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                }
                ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={handleNext}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 flex items-center gap-2
                ${darkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
                }
              `}
            >
              <span className="hidden sm:inline">
                {currentSlide === slides.length - 1 ? 'Finish' : 'Next'}
              </span>
              <span className="sm:hidden">
                {currentSlide === slides.length - 1 ? 'Done' : 'Next'}
              </span>
              {currentSlide < slides.length - 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      <style>{`
        .shadow-glow-blue {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)'};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${darkMode ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)'};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? 'rgba(75, 85, 99, 0.8)' : 'rgba(209, 213, 219, 0.8)'};
        }
      `}</style>
    </div>
  );
}; 