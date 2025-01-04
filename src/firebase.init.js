// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDywvOAxsw-_U_bhUZHH7I49MPE8wHKJ5w",
    authDomain: "hundred-books-firebase.firebaseapp.com",
    projectId: "hundred-books-firebase",
    storageBucket: "hundred-books-firebase.firebasestorage.app",
    messagingSenderId: "766721414807",
    appId: "1:766721414807:web:d936a69bb3ac06c3a4fbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;