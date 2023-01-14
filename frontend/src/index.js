import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb8iDoL2wKaUor7Sy7oqx7eyjXXi5Fsk4",
  authDomain: "mern-blog-3d5f3.firebaseapp.com",
  projectId: "mern-blog-3d5f3",
  storageBucket: "mern-blog-3d5f3.appspot.com",
  messagingSenderId: "132674003271",
  appId: "1:132674003271:web:913ed96fd818292681ac62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
