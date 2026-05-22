import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>[INSERT COMPANY DESCRIPTION HERE]</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: [YOUR EMAIL HERE]</p>
          <p>Phone: [YOUR PHONE HERE]</p>
          <p>Address: [YOUR ADDRESS HERE]</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="[FACEBOOK URL]" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="[INSTAGRAM URL]" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="[TWITTER URL]" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 [YOUR COMPANY NAME]. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
