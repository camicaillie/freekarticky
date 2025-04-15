import React from 'react';

interface CompletionModalProps {
  darkMode: boolean;
  onClose: () => void;
  totalCards: number;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({ darkMode, onClose, totalCards }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div 
        className={`w-full max-w-[95vw] sm:max-w-md p-4 sm:p-6 rounded-xl shadow-xl text-center
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Congratulations!</h2>
        <p className="text-sm sm:text-base mb-6">
          You've completed all {totalCards} cards in this deck! Your brain thanks you for the workout. 🧠💪
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors duration-200`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}; 