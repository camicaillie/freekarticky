import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

interface PasswordPromptProps {
  onCorrectPassword: () => void;
  darkMode: boolean;
}

export const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onCorrectPassword, darkMode }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password submitted:', password);
    
    if (password === 'fenomen') {
      setPasswordVerified(true);
      // Set manual authentication flag in localStorage as a fallback
      localStorage.setItem('manualAuth', 'true');
      
      // Move directly to Google sign-in after password verification
      handleGoogleLogin();
    } else {
      console.log('Password incorrect');
      setError(true);
      setPassword('');
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    console.log('Starting Google login process...');
    
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google login successful:', result.user.uid);
      
      // Store the user ID for consistency
      localStorage.setItem('currentUserId', result.user.uid);
      
      // Call the callback function after successful login
      onCorrectPassword();
    } catch (error) {
      console.error('Google login failed:', error);
      setError('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <div className={`p-6 sm:p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-sm mx-auto`}>
        <h2 className={`text-xl sm:text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Vítejte ve Flashcards
        </h2>
        <p className={`text-sm sm:text-base text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Pro pokračování zadejte heslo
        </p>
        
        <form onSubmit={handlePasswordSubmit}>
          <div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3 rounded-lg border text-base sm:text-lg ${
                  error 
                    ? 'border-red-500' 
                    : darkMode 
                      ? 'border-gray-600 bg-gray-700 text-white' 
                      : 'border-gray-300 bg-white text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                placeholder="Zadejte heslo"
                autoComplete="current-password"
                disabled={isLoading || passwordVerified}
              />
              {error && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">Nesprávné heslo nebo chyba při přihlášení. Zkuste to prosím znovu.</p>
            )}
          </div>
          
          {passwordVerified ? (
            <div className="mt-6 text-center">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Heslo ověřeno. Přihlašování pomocí Google...
              </p>
              <div className="animate-spin mx-auto h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
            </div>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-6 py-3 px-4 rounded-lg text-base sm:text-lg font-medium ${
                isLoading
                  ? darkMode
                    ? 'bg-blue-800 cursor-not-allowed'
                    : 'bg-blue-400 cursor-not-allowed'
                  : darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800' 
                    : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
              } text-white transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              {isLoading ? 'Přihlašování...' : 'Vstoupit do aplikace'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}; 