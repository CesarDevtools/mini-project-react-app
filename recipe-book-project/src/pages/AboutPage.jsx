import React from 'react';
import './AboutPage.css'; 

function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <div className="about-card">
        <div className="about-header">
          <h1>About MyMeals</h1>
          <div className="underline"></div>
        </div>
        
        <div className="about-body">
          <p className="main-description">
            <strong>MyMeals</strong> is a modern web application built with React, designed to help you organize 
            and discover your favorite dishes. Track calories, servings, and keep your personal cookbook always at hand.
          </p>

          <div className="dev-section">
            <h2>The Team</h2>
            <div className="dev-grid">
              <div className="dev-item">
                <span className="dev-name">César Galán</span>
                <span className="dev-location">Venezuela</span>
              </div>
              <div className="dev-item">
                <span className="dev-name">Gianfranco Devita</span>
                <span className="dev-location">Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;