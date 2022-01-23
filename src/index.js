import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDqJrnvGxtf1j_8Vp0OiIAUYN1miWsKaRA",
    authDomain: "readkeeper-db159.firebaseapp.com",
    projectId: "readkeeper-db159",
    storageBucket: "readkeeper-db159.appspot.com",
    messagingSenderId: "50349287327",
    appId: "1:50349287327:web:5126797cc86b8a59033faa",
    measurementId: "G-5L46R4XS71"
};

const app = initializeApp(firebaseConfig);
console.log("HIIIIII");


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
