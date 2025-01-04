// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF2U8ctUxKlMuVe-7AOACQipXdQkhoNug",
  authDomain: "hms-software-da8f0.firebaseapp.com",
  projectId: "hms-software-da8f0",
  storageBucket: "hms-software-da8f0.firebasestorage.app",
  messagingSenderId: "583503348254",
  appId: "1:583503348254:web:570068ee8a9c49dc90a40f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth