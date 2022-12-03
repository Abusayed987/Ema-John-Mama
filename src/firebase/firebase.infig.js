// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/**
 ----------------------------<>
 Danger Zone 
 -----------------------------<>
 */
const firebaseConfig = {
    apiKey: "AIzaSyCU-KAgFp8T19X8TXvxZWdrriCCdrHSydo",
    authDomain: "ema-jhon-shopping-auth.firebaseapp.com",
    projectId: "ema-jhon-shopping-auth",
    storageBucket: "ema-jhon-shopping-auth.appspot.com",
    messagingSenderId: "1063833242460",
    appId: "1:1063833242460:web:7a9441b66ccf65d7fa8f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;