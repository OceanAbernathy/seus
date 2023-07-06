import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'process.env.PUBLIC_FIREBASE_API_KEY',
  authDomain: 'process.env.PUBLIC_FIREBASE_AUTH_DOMAIN',
  projectId: 'process.env.PUBLIC_FIREBASE_PROJECT_ID',
  storageBucket: 'process.env.PUBLIC_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'process.env.PUBLIC_FIREBASE_APP_ID',
  measurementId: 'process.env.PUBLIC_FIREBASE_MEASUREMENT_ID',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app, auth, storage);
