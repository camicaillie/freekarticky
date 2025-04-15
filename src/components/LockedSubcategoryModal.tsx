import React from 'react';

interface LockedSubcategoryModalProps {
  darkMode?: boolean;
  onClose: () => void;
}

export const LockedSubcategoryModal: React.FC<LockedSubcategoryModalProps> = ({ 
  darkMode = false, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div 
        className={`relative z-50 rounded-xl shadow-xl p-6 max-w-md w-full ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <div className="flex items-center justify-center mb-4">
          <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-100'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-yellow-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
              />
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-2">Prémiový obsah</h3>
        
        <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
          Tato sada kartiček je dostupná pouze v plné verzi aplikace.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            className={`py-2 px-4 rounded-lg font-medium ${
              darkMode 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            } transition-colors`}
            onClick={onClose}
          >
            Rozumím
          </button>
          
          <button
            className={`py-2 px-4 rounded-lg font-medium ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            } transition-colors`}
            onClick={onClose}
          >
            Zpět na dostupné sady
          </button>
        </div>
      </div>
    </div>
  );
}; 