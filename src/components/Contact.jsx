// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_o5kx3yv',
        'template_3lc5z37',
        {
          // Updated to match default EmailJS template variables
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nikshepkulli9@gmail.com',
          to_name: 'Nikshep A Kulli' // Your name for the template
        },
        'I8zCAD3ZNK3E4KWZc'
      );

      console.log('SUCCESS:', result);
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('FAILED:', error);
      setError(`Failed to send message: ${error.text || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isSubmitted && (
        <div className="top-notification" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '5px',
          zIndex: 1000,
          fontWeight: 'bold'
        }}>
          ✅ Your message has been sent successfully!
        </div>
      )}
      
      {error && (
        <div className="error-notification" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#ff4444',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '5px',
          zIndex: 1000,
          fontWeight: 'bold',
          maxWidth: '80%',
          textAlign: 'center'
        }}>
          ❌ {error}
        </div>
      )}
      
      <div className="contact-wrapper">
        <section className="contact-section" id="contact">
          <span className="contact-title-large">Contact</span>
          <span className="contact-title-small">Me</span>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="Your full name" 
              value={formData.fullName}
              onChange={handleInputChange}
              required 
            />
            
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your email address" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your message..." 
              rows="5" 
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </section>
      </div>
      
      {/* Copyright stays OUTSIDE the contact section */}
      <div className="copyright-footer">
        © 2025 Nikshep A Kulli. All rights reserved.
      </div>
    </>
  );
};

export default Contact;