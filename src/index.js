import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const text = 'GOOOOOOOOL';
const elem = (
  <div>
    <h2>HELLO WORLD!!!</h2>
    <p>{text}</p>
    <span>NOW IS {['324234']}</span>
    <input type="text" />
    <button>Click</button>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>,
  elem
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
