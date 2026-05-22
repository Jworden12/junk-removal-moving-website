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
        <p>Get in touch with us today</p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>[YOUR ADDRESS HERE]</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>[YOUR PHONE NUMBER HERE]</p>
            </div>
            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>[YOUR EMAIL HERE]</p>
            </div>
            <div className="info-item">
              <h3>🕐 Hours</h3>
              <p>Monday - Friday: [TIME RANGE]</p>
              <p>Saturday: [TIME RANGE]</p>
              <p>Sunday: [TIME RANGE]</p>
            </div>
            <div className="info-item">
              <h3>🌐 Service Area</h3>
              <p>[SERVICE AREA DESCRIPTION]</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Thank you for your message! We'll get back to you soon.
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
          [INSERT GOOGLE MAP OR MAP EMBED HERE]
        </div>
      </section>
    </main>
  );
}

export default Contact;
