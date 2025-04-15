import React from 'react';

interface GuideTooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  darkMode: boolean;
}

export const GuideTooltip: React.FC<GuideTooltipProps> = ({ 
  children, 
  text, 
  position = 'bottom',
  darkMode 
}) => {
  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  };

  return (
    <div className="relative group">
      {children}
      <div className={`
        absolute ${positionClasses[position]} z-50
        w-48 p-2 rounded-lg text-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
        shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      `}>
        <div className="relative">
          {text}
          <div className={`
            absolute w-2 h-2 transform rotate-45
            ${darkMode ? 'bg-gray-800' : 'bg-white'}
            ${position === 'top' ? 'bottom-[-4px] left-1/2 ml-[-4px] border-r border-b' : ''}
            ${position === 'bottom' ? 'top-[-4px] left-1/2 ml-[-4px] border-l border-t' : ''}
            ${position === 'left' ? 'right-[-4px] top-1/2 mt-[-4px] border-r border-t' : ''}
            ${position === 'right' ? 'left-[-4px] top-1/2 mt-[-4px] border-l border-b' : ''}
            ${darkMode ? 'border-gray-700' : 'border-gray-200'}
          `} />
        </div>
      </div>
    </div>
  );
}; 