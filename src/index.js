// Working on 2 things on this project : 1. Todo lists and 2. meetups
// React - Academind 2021: https://www.youtube.com/watch?v=Dorf8i6lCuk
// client side Js library
// easy to build components
// Single page Applications - server only sends one HTML page, thereafter React takes over and controls the UI
// Lean and focused component based UI library. Certain features like routing is through 3rd party. 
// alternative angular: more inbuilt packages...use typescript....can be overkill for smaller projects


// creating react app: npx create-react-app 'app_name' ...need node in the system
// npm start: start localhost
// npm install dep_name : to install a dependency
// index.js is the entry point
// jsx code : writing html code in js
// For the start: we have react components which are just the functions returning JSX which we can use to tell react what will appear on screen



// npm install react-router-dom package to handling the roiuting in React
import React from 'react';
// react dom library
import ReactDOM from 'react-dom/client';

// for react router
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// we import named exports within curly braces; no {} when export default
import { FavoritesContextProvider } from './store/favorites-context';
// ******helps to measure performance in your app--- never tried; 
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
