import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBK49mEvm0V_pGhZ19kdZOqfV_NenLZaeM',
  authDomain: 'seus-d5904.firebaseapp.com',
  projectId: 'seus-d5904',
  storageBucket: 'seus-d5904.appspot.com',
  messagingSenderId: '684497849915',
  appId: '1:684497849915:web:a8c16b5cc0d9f192a8161e',
  measurementId: 'G-SFSKMCMLF1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
