import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNoK4t4qVkEdtkX3tE0c_wNFsPryRywHs",
    authDomain: "ivent-3c76f.firebaseapp.com",
    projectId: "ivent-3c76f",
    storageBucket: "ivent-3c76f.appspot.com",
    messagingSenderId: "758469018349",
    appId: "1:758469018349:web:c5eb22b74e4c544f6e82e4"
  };
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;