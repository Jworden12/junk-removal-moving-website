import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🚚 Zach & Hunter Moving
        </Link>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/get-quote" className="nav-link cta-button" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
