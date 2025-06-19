import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Assuming your App.css is for general app styles
import './styles/Font.css'; // <--- IMPORT YOUR FONT CSS HERE (adjust path if Font.css is elsewhere)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);