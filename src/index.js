// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";

const imageUrl =
  // "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  "https://pixabay.com/get/g1de0d2007507d465288c7e9dfbcfbbf3d0e11e9db868d94a4c61fcb607d8ac0d10ff2d42546fb9e0a28ef99d2425463288337a4bc9f43da79f08ec5b5a11dd29_640.jpg"
const productPrice = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Aga gra na ukulele</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(product);