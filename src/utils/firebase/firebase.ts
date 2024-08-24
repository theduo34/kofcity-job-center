import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// app's firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa9kTj5m-2BaI9G-rDzSb2D25HWBaPppg",
    authDomain: "kof-city-job-center-api-dev.firebaseapp.com",
    projectId: "kof-city-job-center-api-dev",
    storageBucket: "kof-city-job-center-api-dev.appspot.com",
    messagingSenderId: "1021108907579",
    appId: "1:1021108907579:web:811b07ff691873cec2761e"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}