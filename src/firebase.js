import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
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

// Initialize Auth & Storage and export them
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize Firestore with Offline Persistence to save reads and export it
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});
