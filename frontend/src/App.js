import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';
import { translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="App">
      <Navbar t={t} language={language} toggleLanguage={toggleLanguage} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <Testimonials t={t} />
      <WhatsAppCTA t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
