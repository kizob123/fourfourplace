import React from 'react';
//clientID:110846181054-d9b4l339lck8mb0hsrc8lsrje3fev7lk.apps.googleusercontent.com
//client secret: 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
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import './index.css'
import './login/inputs.css'
import './components/footer.css'
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <HashRouter>
    <App/>
    </HashRouter>
  </React.StrictMode>
 
       </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
