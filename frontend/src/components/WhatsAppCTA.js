import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppCTA.css';

const WhatsAppCTA = ({ t }) => {
  const whatsappLink = "https://wa.me/919545625862?text=Hi%20Asma%2C%20I'd%20like%20to%20design%20a%20custom%20outfit!";

  return (
    <section id="whatsapp-cta" className="section whatsapp-cta-section">
      <div className="whatsapp-cta-container">
        <div className="whatsapp-cta-content">
          <h2 className="whatsapp-cta-title">{t('cta.title')}</h2>
          <p className="whatsapp-cta-subtitle">{t('cta.sub')}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-large">
            <MessageCircle size={24} />
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
