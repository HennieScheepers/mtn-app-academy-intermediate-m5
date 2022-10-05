// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXYiOAhlyyPFUvproJJPq9lURhGkiS0CI",
  authDomain: "shareyourcoffee-9d074.firebaseapp.com",
  projectId: "shareyourcoffee-9d074",
  storageBucket: "shareyourcoffee-9d074.appspot.com",
  messagingSenderId: "774977689491",
  appId: "1:774977689491:web:3e225e727813666921ba66",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
