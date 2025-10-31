import React from 'react';
import { Scissors } from 'lucide-react';
import './About.css';

const About = ({ t }) => {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1708613052993-9cebf577e1e9" 
            alt="Sewing threads and materials"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <div className="about-icon">
            <Scissors size={40} color="var(--gold)" strokeWidth={1.5} />
          </div>
          <h2 className="about-title">{t('about.title')}</h2>
          <p className="about-text">{t('about.desc')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
