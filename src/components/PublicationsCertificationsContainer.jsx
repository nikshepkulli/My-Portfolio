import React, { useState, useEffect } from 'react';
import Publications from './Publications';
import Certifications from './Certifications';
import '../styles/PublicationsCertificationsContainer.css';

const PublicationsCertificationsContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection - consistent with other components
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    // Mobile: Stack vertically
    return (
      <div className="pub-cert-container-mobile">
        <Publications />
        <Certifications />
      </div>
    );
  }

  // Desktop: Side by side
  return (
    <div className="pub-cert-container-desktop">
      <div className="pub-cert-wrapper">
        <Publications />
        <Certifications />
      </div>
    </div>
  );
};

export default PublicationsCertificationsContainer;