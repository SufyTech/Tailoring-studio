import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ t, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/919545625862?text=Hi%20Asma%2C%20I'd%20like%20to%20design%20a%20custom%20outfit!";

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Asma's Tailoring & Embroidery</span>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">{t('nav.home')}</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">{t('nav.about')}</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">{t('nav.services')}</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">{t('nav.gallery')}</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">{t('nav.testimonials')}</button>
          <button onClick={() => scrollToSection('whatsapp-cta')} className="nav-link">{t('nav.contact')}</button>
        </div>

        <div className="navbar-actions">
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'en' ? 'EN | HI' : 'HI | EN'}
          </button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-nav">
            <MessageCircle size={18} />
            <span className="whatsapp-text">{t('nav.whatsapp')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
