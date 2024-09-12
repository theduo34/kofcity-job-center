import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// app's firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}