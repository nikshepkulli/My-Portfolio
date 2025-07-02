import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // ✅ This file exists in your src folder
import './App.css'    // ✅ This file exists in your src folder
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)