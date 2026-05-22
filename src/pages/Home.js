import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fast & Reliable Junk Removal</h1>
          <p className="hero-subtitle">Professional Moving & Cleanout Services</p>
          <p className="hero-description">Get your space back in just one day. Same-day service available in most areas.</p>
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
            <p>We haul away furniture, appliances, and general junk. Fast and efficient service.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Local Moving</h3>
            <p>Professional local moving services with trained staff and proper equipment.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Long Distance Moving</h3>
            <p>Interstate moving with secure packing, loading, and transportation.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Estate Cleanout</h3>
            <p>Complete estate and property cleanout services with donation options.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>✓ Professional Team</h3>
            <p>Trained, uniformed professionals who treat your home with respect.</p>
          </div>
          <div className="benefit">
            <h3>✓ Affordable Pricing</h3>
            <p>Competitive rates with no hidden fees. You know the price upfront.</p>
          </div>
          <div className="benefit">
            <h3>✓ Free Estimates</h3>
            <p>No obligation. We provide accurate quotes for all projects.</p>
          </div>
          <div className="benefit">
            <h3>✓ Same-Day Service</h3>
            <p>Available same-day or next-day scheduling in most areas.</p>
          </div>
          <div className="benefit">
            <h3>✓ Eco-Friendly</h3>
            <p>We recycle and donate whenever possible to reduce landfill waste.</p>
          </div>
          <div className="benefit">
            <h3>✓ Fully Insured</h3>
            <p>Fully licensed and insured for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="quick-stats">
        <div className="stat">
          <div className="stat-value">5,000+</div>
          <div className="stat-label">Happy Customers</div>
        </div>
        <div className="stat">
          <div className="stat-value">15+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-value">500+</div>
          <div className="stat-label">5-Star Reviews</div>
        </div>
        <div className="stat">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Customer Support</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a free estimate. No hassle, no pressure.</p>
        <Link to="/get-quote" className="btn btn-large">Request a Quote Now</Link>
      </section>
    </main>
  );
}

export default Home;
