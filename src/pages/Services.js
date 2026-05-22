import React from 'react';
import './Pages.css';

function Services() {
  const services = [
    {
      id: 1,
      name: 'Junk Removal',
      icon: '♻️',
      description: 'Residential and commercial junk removal services',
      details: 'We remove furniture, appliances, yard waste, construction debris, and general household junk. Our team handles the heavy lifting so you don\'t have to.',
      pricing: '$150 - $500+ depending on volume'
    },
    {
      id: 2,
      name: 'Local Moving',
      icon: '📦',
      description: 'Professional local moving services',
      details: 'Moving to a new home in the area? We provide full packing, loading, transportation, and unloading services to get you settled quickly and safely.',
      pricing: '$800 - $2,500+ based on distance and volume'
    },
    {
      id: 3,
      name: 'Long Distance Moving',
      icon: '🚚',
      description: 'Interstate relocation and long-distance services',
      details: 'Planning a move out of state? We handle the entire process with care, from packing your belongings to delivering them safely to your new home.',
      pricing: 'Custom quote based on destination'
    },
    {
      id: 4,
      name: 'Estate Cleanout',
      icon: '🏠',
      description: 'Complete estate and property cleanout',
      details: 'Whether downsizing, dealing with an estate, or preparing a property for sale, we provide comprehensive cleanout services with donation and recycling options.',
      pricing: '$500 - $3,000+ based on property size'
    },
    {
      id: 5,
      name: 'Commercial Removal',
      icon: '🏢',
      description: 'Business junk removal and office cleanout',
      details: 'We help businesses, offices, and retail spaces dispose of unwanted furniture, equipment, and materials efficiently and professionally.',
      pricing: 'Custom quote for commercial projects'
    },
    {
      id: 6,
      name: 'Recycling & Donation',
      icon: '🌱',
      description: 'Eco-friendly disposal and donation services',
      details: 'We\'re committed to sustainability. Items are recycled or donated whenever possible to minimize environmental impact and help those in need.',
      pricing: 'Included with all services'
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
            <p>Call or fill out our online form to describe your project and scheduling needs.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Free Estimate</h3>
            <p>We provide a no-obligation quote based on the scope of your job or move.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Schedule Service</h3>
            <p>Choose a time that works for you. We offer flexible scheduling and same-day options.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Completion</h3>
            <p>Our team arrives, completes the work professionally, and leaves your space clean.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
