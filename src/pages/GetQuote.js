import React, { useState } from 'react';
import './Pages.css';

function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    description: '',
    preferredDate: '',
    budget: ''
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
    // TODO: Add form submission logic (e.g., send to backend or email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        location: '',
        description: '',
        preferredDate: '',
        budget: ''
      });
    }, 3000);
  };

  return (
    <main className="page">
      <section className="page-header">
        <h1>Get a Free Quote</h1>
        <p>Fill out the form below and we'll contact you with an estimate</p>
      </section>

      <section className="quote-section">
        <div className="quote-container">
          {submitted && (
            <div className="success-message">
              ✓ Thank you! We've received your request and will contact you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-row">
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
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Service Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="serviceType">Service Type *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="junk-removal">Junk Removal</option>
                <option value="local-moving">Local Moving</option>
                <option value="long-distance-moving">Long Distance Moving</option>
                <option value="estate-cleanout">Estate Cleanout</option>
                <option value="commercial">Commercial Removal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Please describe what needs to be removed or moved, size estimates, any special considerations, etc."
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Service Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="0-100">$0 - $100</option>
                  <option value="100-500">$100 - $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Request Free Quote
            </button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How long does an estimate take?</h3>
            <p>[INSERT ANSWER HERE]</p>
          </div>
          <div className="faq-item">
            <h3>Are your estimates always free?</h3>
            <p>[INSERT ANSWER HERE]</p>
          </div>
          <div className="faq-item">
            <h3>How quickly can you complete the job?</h3>
            <p>[INSERT ANSWER HERE]</p>
          </div>
          <div className="faq-item">
            <h3>What areas do you service?</h3>
            <p>[INSERT ANSWER HERE]</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetQuote;
