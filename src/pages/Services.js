import React from 'react';
import './Pages.css';

function Services() {
  const services = [
    {
      id: 1,
      name: 'Junk Removal',
      icon: '♻️',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    },
    {
      id: 2,
      name: 'Local Moving',
      icon: '📦',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    },
    {
      id: 3,
      name: 'Long Distance Moving',
      icon: '🚚',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    },
    {
      id: 4,
      name: 'Estate Cleanout',
      icon: '🏠',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    },
    {
      id: 5,
      name: 'Commercial Removal',
      icon: '🏢',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    },
    {
      id: 6,
      name: 'Recycling & Donation',
      icon: '🌱',
      description: '[DETAILED SERVICE DESCRIPTION]',
      details: '[DETAILED INFO ABOUT THE SERVICE]',
      pricing: '[PRICING INFO]'
    }
  ];

  return (
    <main className="page">
      <section className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for all your junk removal and moving needs</p>
      </section>

      <section className="services-detail">
        <div className="services-container">
          {services.map(service => (
            <div key={service.id} className="service-detail-card">
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-summary">{service.description}</p>
              <p className="service-details">{service.details}</p>
              <p className="service-pricing"><strong>Pricing:</strong> {service.pricing}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Contact Us</h3>
            <p>[DESCRIBE FIRST STEP]</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Free Estimate</h3>
            <p>[DESCRIBE SECOND STEP]</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Schedule Service</h3>
            <p>[DESCRIBE THIRD STEP]</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Completion</h3>
            <p>[DESCRIBE FOURTH STEP]</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
