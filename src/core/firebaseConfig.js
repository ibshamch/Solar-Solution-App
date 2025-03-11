// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyC6MMRbrNq8RtxEOlFa3DrO_0EY84IdJag',
  authDomain: 'solar-solution-app.firebaseapp.com',
  projectId: 'solar-solution-app',
  storageBucket: 'solar-solution-app.firebasestorage.app',
  messagingSenderId: '296233105213',
  appId: '1:296233105213:web:1964d20cddbb9b764eb754',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
