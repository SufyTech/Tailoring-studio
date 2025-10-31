import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

const Gallery = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1611737221277-d57b6353f511',
      caption: 'Traditional Indonesian Embroidery'
    },
    {
      url: 'https://images.unsplash.com/photo-1647554195187-17a1cca17256',
      caption: 'Mirror Work Embroidery Detail'
    },
    {
      url: 'https://images.unsplash.com/photo-1644766078473-f2f59960f8e4',
      caption: 'Colorful Beaded Sun Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1564587081321-62723533e3c0',
      caption: 'Delicate Floral Embroidery'
    },
    {
      url: 'https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg',
      caption: 'Luxury Golden Fabric'
    },
    {
      url: 'https://images.unsplash.com/photo-1614850070546-70fc689a0b15',
      caption: 'Warm-Toned Striped Textile'
    },
    {
      url: 'https://images.unsplash.com/photo-1613555793439-c50b6274176a',
      caption: 'Thread Spools Collection'
    },
    {
      url: 'https://images.pexels.com/photos/3772488/pexels-photo-3772488.jpeg',
      caption: 'Embroidery Hoop with Threads'
    },
    {
      url: 'https://images.unsplash.com/photo-1705120893666-d36e3156b07f',
      caption: 'Vintage Thread Display'
    },
    {
      url: 'https://images.pexels.com/photos/1460890/pexels-photo-1460890.jpeg',
      caption: 'Blue Denim Texture'
    },
    {
      url: 'https://images.unsplash.com/photo-1615799998603-7c6270a45196',
      caption: 'White Luxury Textile'
    },
    {
      url: 'https://images.unsplash.com/photo-1708613052993-9cebf577e1e9',
      caption: 'Organized Thread Spool Display'
    }
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">{t('gallery.title')}</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
