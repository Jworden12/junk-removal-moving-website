import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>[YOUR COMPANY NAME]</h1>
          <p className="hero-subtitle">Professional Junk Removal & Moving Services</p>
          <p className="hero-description">[INSERT TAGLINE/DESCRIPTION HERE]</p>
          <div className="hero-buttons">
            <Link to="/get-quote" className="btn btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">♻️</div>
            <h3>Junk Removal</h3>
            <p>[SERVICE DESCRIPTION]</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Local Moving</h3>
            <p>[SERVICE DESCRIPTION]</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Long Distance Moving</h3>
            <p>[SERVICE DESCRIPTION]</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Estate Cleanout</h3>
            <p>[SERVICE DESCRIPTION]</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>✓ Professional Team</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
          <div className="benefit">
            <h3>✓ Affordable Pricing</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
          <div className="benefit">
            <h3>✓ Free Estimates</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
          <div className="benefit">
            <h3>✓ Fast Service</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
          <div className="benefit">
            <h3>✓ Eco-Friendly</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
          <div className="benefit">
            <h3>✓ Fully Insured</h3>
            <p>[INSERT BENEFIT DESCRIPTION]</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a free estimate</p>
        <Link to="/get-quote" className="btn btn-large">Request a Quote Now</Link>
      </section>
    </main>
  );
}

export default Home;
