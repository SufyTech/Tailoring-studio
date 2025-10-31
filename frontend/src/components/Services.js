import React from 'react';
import { Shirt, Sparkles, Brush, Palette } from 'lucide-react';
import './Services.css';

const Services = ({ t }) => {
  const services = [
    {
      icon: <Shirt size={36} strokeWidth={1.5} />,
      key: 'stitching'
    },
    {
      icon: <Sparkles size={36} strokeWidth={1.5} />,
      key: 'plazos'
    },
    {
      icon: <Brush size={36} strokeWidth={1.5} />,
      key: 'embroidery'
    },
    {
      icon: <Palette size={36} strokeWidth={1.5} />,
      key: 'design'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="services-container">
        <h2 className="services-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{t(`services.items.${service.key}.title`)}</h3>
              <p className="service-desc">{t(`services.items.${service.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
