import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsuXCsbTzdcUo-gdjCs_W-FhYUWuneEDg",
    authDomain: "osmium-c876a.firebaseapp.com",
    projectId: "osmium-c876a",
    storageBucket: "osmium-c876a.firebasestorage.app",
    messagingSenderId: "897320255214",
    appId: "1:897320255214:web:8b770acd0ed4c0b641fdff",
    measurementId: "G-S67P4PJJ9T"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
