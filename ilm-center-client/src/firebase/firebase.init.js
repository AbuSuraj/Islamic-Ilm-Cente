// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey ,
  authDomain: process.env.REACT_APP_authDomain ,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyChxy33yzBX43eA1Cs025LnKZrO-LBKT_k",
//   authDomain: "ilm-center-7bfb1.firebaseapp.com",
//   projectId: "ilm-center-7bfb1",
//   storageBucket: "ilm-center-7bfb1.appspot.com",
//   messagingSenderId: "456564983796",
//   appId: "1:456564983796:web:62df754ce4c9d681649ba1"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;