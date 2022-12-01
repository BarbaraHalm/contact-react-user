
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ4JzHo1vFd5lxzS_iCzCzVU7ja0bRpN0",
  authDomain: "contact-react-ed64b.firebaseapp.com",
  projectId: "contact-react-ed64b",
  storageBucket: "contact-react-ed64b.appspot.com",
  messagingSenderId: "229369721399",
  appId: "1:229369721399:web:bc638262ce22b2bf2e85b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

