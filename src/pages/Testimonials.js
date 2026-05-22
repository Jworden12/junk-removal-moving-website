import React from 'react';
import './Pages.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    },
    {
      id: 2,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    },
    {
      id: 3,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    },
    {
      id: 4,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    },
    {
      id: 5,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    },
    {
      id: 6,
      name: '[CUSTOMER NAME]',
      rating: 5,
      text: '[INSERT TESTIMONIAL TEXT HERE]',
      service: '[SERVICE USED]'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <main className="page">
      <section className="page-header">
        <h1>Customer Testimonials</h1>
        <p>See what our satisfied customers have to say</p>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
              <p className="testimonial-service">{testimonial.service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rating-section">
        <h2>Overall Rating</h2>
        <div className="overall-rating">
          <div className="rating-display">
            <div className="big-stars">⭐⭐⭐⭐⭐</div>
            <p className="rating-text">[INSERT AVERAGE RATING] out of 5</p>
            <p className="rating-count">Based on [NUMBER] reviews</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
