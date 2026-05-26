import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  setPersistence, 
  inMemoryPersistence,
  browserLocalPersistence 
} from "firebase/auth";
import { 
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager,
  collection, 
  query, 
  where, 
  getDocs, 
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  limit,
  writeBatch,
  getDoc
} from "firebase/firestore";

// Your new web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtK1lW6dhyS9bBk9Al_V-g-Xto_INd1Q",
  authDomain: "tt-talkandtask.firebaseapp.com",
  projectId: "tt-talkandtask",
  storageBucket: "tt-talkandtask.firebasestorage.app",
  messagingSenderId: "732714427176",
  appId: "1:732714427176:web:dedc63e52818dc7324661d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize core services
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize Firestore with Offline Persistence to save reads
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

// Re-export Auth functions to satisfy App.jsx
export {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  inMemoryPersistence,
  browserLocalPersistence
};

// Re-export Firestore functions to satisfy App.jsx
export {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  limit,
  writeBatch,
  getDoc
};

// Re-export Storage functions
export {
  ref,
  uploadBytesResumable,
  getDownloadURL
};
