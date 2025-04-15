import React from 'react';

interface LockIconProps {
  darkMode?: boolean;
}

export const LockIcon: React.FC<LockIconProps> = ({ darkMode = false }) => {
  return (
    <div className={`absolute top-2 right-2 z-20 p-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
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
  );
}; 