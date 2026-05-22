import React from 'react';
import './Pages.css';

function About() {
  return (
    <main className="page">
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about Zach & Hunter Moving</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Zach & Hunter Moving was founded with a simple mission: to provide honest, reliable, and affordable moving and junk removal services to our community. What started as two friends helping people move has grown into a trusted local business serving thousands of satisfied customers. We've built our reputation on integrity, hard work, and genuine care for our customers' belongings and spaces.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To make moving and junk removal hassle-free, affordable, and stress-free for every customer. We believe everyone deserves professional service without breaking the bank. We're committed to treating your belongings with the same care we'd give our own, and leaving your space clean and organized.</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Integrity:</strong> We're honest about pricing, timelines, and what we can do for you</li>
            <li><strong>Excellence:</strong> We take pride in doing quality work every single time</li>
            <li><strong>Environmental Responsibility:</strong> We recycle and donate whenever possible</li>
            <li><strong>Safety & Professionalism:</strong> Your safety and property protection is our top priority</li>
            <li><strong>Fair Pricing:</strong> Competitive rates with no hidden fees or surprises</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo">👨‍💼</div>
            <h3>Zach</h3>
            <p className="team-role">Co-Founder & Owner</p>
            <p className="team-bio">With 15+ years of moving experience, Zach leads our team with a commitment to customer satisfaction and professional service excellence.</p>
          </div>
          <div className="team-member">
            <div className="team-photo">👨‍💼</div>
            <h3>Hunter</h3>
            <p className="team-role">Co-Founder & Owner</p>
            <p className="team-bio">Hunter brings operational expertise and a passion for helping people make their moves stress-free. His attention to detail ensures every job is done right.</p>
          </div>
          <div className="team-member">
            <div className="team-photo">👨‍💼</div>
            <h3>Our Team</h3>
            <p className="team-role">Moving Specialists</p>
            <p className="team-bio">Our trained, uniformed team members are friendly, professional, and dedicated to making your moving or junk removal experience excellent.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h3 className="stat-number">15+</h3>
          <p>Years in Business</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">5,000+</h3>
          <p>Jobs Completed</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">4.9/5</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">100%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </section>
    </main>
  );
}

export default About;
