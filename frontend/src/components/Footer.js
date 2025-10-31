import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = ({ t }) => {
  const whatsappLink = "https://wa.me/919545625862";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Asma's Tailoring & Embroidery</h3>
            <p className="footer-tagline">Stitching elegance, one thread at a time</p>
          </div>

          <div className="footer-info">
            <div className="footer-info-item">
              <MapPin size={20} color="var(--gold)" />
              <span>{t('footer.location')}</span>
            </div>
            <div className="footer-info-item">
              <Phone size={20} color="var(--gold)" />
              <span>+91 95456 25862</span>
            </div>
          </div>

          <div className="footer-social">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
              <MessageCircle size={22} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
