import React, { useState } from 'react';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <main className="page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Zach & Hunter Moving today</p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>123 Main Street<br />Your City, State 12345</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>info@zachandhuntermoving.com</p>
            </div>
            <div className="info-item">
              <h3>🕐 Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
            <div className="info-item">
              <h3>🌐 Service Area</h3>
              <p>We serve the local area and surrounding regions. Call for availability in your area.</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <div className="map-placeholder">
          <p>📍 Service Area: Local and surrounding regions</p>
          <p>We come to you for estimates and service!</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
