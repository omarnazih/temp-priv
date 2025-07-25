import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5KG2jT-Yq0ooR9bdbVNBxsXPg9iFmI7g',
  authDomain: 'energent-ai-e757c.firebaseapp.com',
  projectId: 'energent-ai-e757c',
  storageBucket: 'energent-ai-e757c.firebasestorage.app',
  messagingSenderId: '997096633724',
  appId: '1:997096633724:web:7bb6139d1a89758689e0f9',
  measurementId: 'G-42F0Z4ZV75'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
