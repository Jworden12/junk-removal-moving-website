import React from 'react';
import './Pages.css';

function About() {
  return (
    <main className="page">
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our company and team</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>[INSERT COMPANY HISTORY/STORY HERE]</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>[INSERT MISSION STATEMENT HERE]</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Integrity in all business dealings</li>
            <li>Excellence in customer service</li>
            <li>Environmental responsibility</li>
            <li>Safety and professionalism</li>
            <li>Competitive and fair pricing</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo">[PHOTO PLACEHOLDER]</div>
            <h3>[TEAM MEMBER NAME]</h3>
            <p className="team-role">[POSITION]</p>
            <p className="team-bio">[INSERT BIO HERE]</p>
          </div>
          <div className="team-member">
            <div className="team-photo">[PHOTO PLACEHOLDER]</div>
            <h3>[TEAM MEMBER NAME]</h3>
            <p className="team-role">[POSITION]</p>
            <p className="team-bio">[INSERT BIO HERE]</p>
          </div>
          <div className="team-member">
            <div className="team-photo">[PHOTO PLACEHOLDER]</div>
            <h3>[TEAM MEMBER NAME]</h3>
            <p className="team-role">[POSITION]</p>
            <p className="team-bio">[INSERT BIO HERE]</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h3 className="stat-number">[NUMBER]</h3>
          <p>[YEARS IN BUSINESS]</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">[NUMBER]</h3>
          <p>[JOBS COMPLETED]</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">[NUMBER]</h3>
          <p>[SATISFIED CUSTOMERS]</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">[NUMBER]</h3>
          <p>[TEAM MEMBERS]</p>
        </div>
      </section>
    </main>
  );
}

export default About;
