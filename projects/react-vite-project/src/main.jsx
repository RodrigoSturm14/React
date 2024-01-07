import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


// es posible renderizar estos tags porq se esta usando JSX, q se compila gracias a SWC
root.render(
  <App />
);