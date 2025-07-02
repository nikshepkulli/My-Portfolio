import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'  // or whatever your main CSS file is called
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
