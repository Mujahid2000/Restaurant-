// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkkWsSWQH1wzVnj5via281_IoSxif8bAs",
  authDomain: "rasturent-d35f4.firebaseapp.com",
  projectId: "rasturent-d35f4",
  storageBucket: "rasturent-d35f4.appspot.com",
  messagingSenderId: "764519326042",
  appId: "1:764519326042:web:f313ebb2d17d62cc9d9363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };