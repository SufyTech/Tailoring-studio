import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = ({ t }) => {
  const testimonials = t('testimonials.items');

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">{t('testimonials.title')}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
