import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence, indexedDBLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Log Firebase environment variables (without sensitive values)
console.log('Firebase config loaded:', {
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase with error handling
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  // Continue with a partially functional app - authentication will use the localStorage fallback
  app = {} as any;
}

// Initialize Firebase services with error handling
export const auth = (() => {
  try {
    const auth = getAuth(app);
    
    // Try to set the strongest persistence possible
    const setupPersistence = async () => {
      try {
        // First try IndexedDB (most reliable)
        await setPersistence(auth, indexedDBLocalPersistence);
        console.log('Using IndexedDB persistence for auth (best)');
      } catch (e) {
        try {
          // Fall back to localStorage
          await setPersistence(auth, browserLocalPersistence);
          console.log('Using localStorage persistence for auth (good)');
        } catch (e2) {
          try {
            // Last resort: session persistence
            await setPersistence(auth, browserSessionPersistence);
            console.log('Using session persistence for auth (limited)');
          } catch (e3) {
            console.error('Could not set any persistence method:', e3);
          }
        }
      }
    };
    
    // Run the persistence setup (don't await it to avoid blocking)
    setupPersistence();
    
    return auth;
  } catch (error) {
    console.error('Error initializing Firebase Auth:', error);
    return {} as any;
  }
})();

export const googleProvider = new GoogleAuthProvider();

export const db = (() => {
  try {
    const firestore = getFirestore(app);
    
    // Enable offline persistence for Firestore
    const setupFirestorePersistence = async () => {
      try {
        await enableIndexedDbPersistence(firestore, {
          forceOwnership: false // Allow multiple tabs
        });
        console.log('✅ Firestore offline persistence enabled successfully');
      } catch (err: any) {
        if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled in one tab at a time
          // This is normal - the first tab will handle persistence
          console.log('ℹ️ Another tab is handling persistence - this is normal');
        } else if (err.code === 'unimplemented') {
          console.warn('⚠️ This browser does not support persistence');
        } else {
          console.error('❌ Unexpected error enabling persistence:', err);
        }
      }
    };
    
    // Run the persistence setup
    setupFirestorePersistence();
    
    return firestore;
  } catch (error) {
    console.error('❌ Critical error initializing Firestore:', error);
    return {} as any;
  }
})();