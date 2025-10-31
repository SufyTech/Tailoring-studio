import React from 'react';
import './Hero.css';

const Hero = ({ t }) => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.sub')}</p>
        <button onClick={scrollToGallery} className="btn-primary hero-cta">
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
