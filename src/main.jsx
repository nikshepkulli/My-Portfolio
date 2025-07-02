import React from 'react'
import ReactDOM from 'react-dom/client'

// Import CSS files in the correct order
import './styles/Font.css'              // Fonts first
import './styles/global.css'           // Global styles second
import './index.css'                   // Base styles
import './App.css'                     // App-specific styles

// Component-specific CSS imports
import './styles/Hero.css'
import './styles/About.css'
import './styles/Publications.css'
import './styles/Certifications.css'
import './styles/PublicationsCertificationsContainer.css'
import './styles/Education.css'
import './styles/Experience.css'
import './styles/Achievements.css'
import './styles/TechnicalSkills.css'
import './styles/Projects.css'
import './styles/Contact.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)