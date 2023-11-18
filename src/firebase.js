//Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC32Bp1lHLB_OVBtO4fS0-FMEGvp59Kbz0",
  authDomain: "react-auth-3df2c.firebaseapp.com",
  projectId: "react-auth-3df2c",
  storageBucket: "react-auth-3df2c.appspot.com",
  messagingSenderId: "898130225445",
  appId: "1:898130225445:web:2e68e7aa8f03b3a29152cc",
  measurementId: "G-544TC7KSE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

