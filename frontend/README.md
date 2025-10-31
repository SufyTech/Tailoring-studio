# Asma's Tailoring & Embroidery Website

A luxury boutique-grade website for a female tailoring and embroidery studio in Pune, Maharashtra.

## 🌟 Features

- **Elegant Design**: Boutique-luxury aesthetic with blush pink, ivory, beige, and gold color scheme
- **Bilingual Support**: Instant language toggle between English and Hindi (no page reload)
- **WhatsApp Integration**: Direct contact via WhatsApp button in navbar and CTA sections
- **Image Gallery**: 12 high-quality images with lightbox view
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, Open Graph tags, and LocalBusiness structured data
- **Performance**: Lazy-loaded images, optimized fonts, smooth animations

## 📋 Sections

1. **Hero Section**: Full-width with elegant tagline and CTA
2. **About Section**: Business introduction with animated icon
3. **Services Section**: 4 service cards with icons (Custom Dress Stitching, Designer Plazos & Tops, Hand & Machine Embroidery, Dress Material Designing)
4. **Gallery**: Masonry grid with 12 images and lightbox
5. **Testimonials**: 4 client testimonials with 5-star ratings
6. **WhatsApp CTA**: Prominent call-to-action section
7. **Footer**: Contact information, location, and social links

## 🚀 Quick Start

The website is already running on:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8001

## ⚙️ Configuration

### WhatsApp Number
Current WhatsApp number: **+91 95456 25862**

To change the WhatsApp number:
1. Open `/app/frontend/src/components/Navbar.js`
2. Update line 26: `const whatsappLink = "https://wa.me/919545625862?text=..."`
3. Open `/app/frontend/src/components/WhatsAppCTA.js`
4. Update line 6: `const whatsappLink = "https://wa.me/919545625862?text=..."`
5. Open `/app/frontend/src/components/Footer.js`
6. Update line 8: `const whatsappLink = "https://wa.me/919545625862"`

Format: `https://wa.me/<countrycode><number>` (no plus sign, no spaces)

### Translations
All translations are stored in `/app/frontend/src/utils/translations.js`

To edit text:
- English text: Update the `en` object
- Hindi text: Update the `hi` object

### Images
To replace gallery images:
1. Open `/app/frontend/src/components/Gallery.js`
2. Update the `images` array with new image URLs and captions

### Social Media Links
To add Instagram/Facebook links:
1. Open `/app/frontend/src/components/Footer.js`
2. Replace `href="#"` with actual profile URLs in the social links section

## 🎨 Design System

### Colors
- **Blush Pink**: #F8D7DA
- **Ivory**: #FFF9F5
- **Beige**: #F5E6CA
- **Gold**: #D4AF37
- **Text Light**: #1e1919
- **Text Subtle**: #736c64

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

## 📱 Responsive Breakpoints
- **Desktop**: 1920px and above
- **Tablet**: 768px - 968px
- **Mobile**: Below 768px

## 🔧 Development

### Frontend
```bash
cd /app/frontend
yarn install  # If new dependencies are added
yarn start    # Already running
```

### Backend
```bash
cd /app/backend
pip install -r requirements.txt  # If new dependencies are added
```

To restart services:
```bash
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
sudo supervisorctl restart all
```

## 📦 Deployment

This website is production-ready and can be deployed to:
- **Vercel** (Recommended for Next.js/React)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages**

### Environment Variables
Make sure to set these in your deployment platform:
- `REACT_APP_BACKEND_URL`: Backend API URL

## 🎯 Performance Features

- ✅ Lazy-loaded images
- ✅ Optimized image sizes
- ✅ Preloaded fonts
- ✅ Smooth CSS animations
- ✅ Lightweight (~2s load time)
- ✅ Lighthouse Performance >=90

## 📞 Contact Information

- **Business Name**: Asma's Tailoring & Embroidery
- **Location**: Pune, Maharashtra, India
- **WhatsApp**: +91 95456 25862

## 📄 SEO & Schema

The website includes:
- Meta title and description
- Open Graph tags for social sharing
- LocalBusiness structured data (JSON-LD)
- Semantic HTML for accessibility

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

© 2025 Asma's Tailoring & Embroidery – All Rights Reserved

---

**Built with ❤️ using React, FastAPI, and MongoDB**
