# Bariş Haustechnik Website

Modern, responsive website for Bariş Haustechnik - your reliable partner for plumbing, heating, and solar technology in the Wetzlar region.

## 🚀 Features

- **Modern Design**: Glass-morphism UI with smooth animations
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Performance Optimized**:
  - Code splitting for faster load times
  - Lazy loading of route components
  - Optimized bundle sizes (React vendor: 53KB gzip)
- **SEO Friendly**: Semantic HTML and meta tags
- **Accessibility**: Touch-friendly buttons (min 44px), keyboard navigation
- **Blog System**: Integrated blog with categories and search
- **24/7 Emergency Contact**: Floating emergency button and dedicated sections

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Markdown** - Blog content rendering

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── api/
│   └── base44Client.js       # API client with mock data
├── components/
│   ├── home/                  # Home page components
│   │   ├── HeroSection.jsx
│   │   ├── TrustSection.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── CTASection.jsx
│   │   └── FloatingEmergencyButton.jsx
│   ├── layout/
│   │   └── HelpSidebar.jsx   # Help & support sidebar
│   └── ui/                    # Reusable UI components
│       ├── button.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       ├── select.jsx
│       └── badge.jsx
├── pages/                     # Route pages
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   ├── Impressum.jsx
│   └── Datenschutz.jsx
├── App.jsx                    # Main app component
├── Layout.jsx                 # Layout wrapper
├── main.jsx                   # Entry point
├── utils.js                   # Utility functions
└── index.css                  # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: `#1a3a52` - Dark blue
- **Secondary**: `#00b050` - Green
- **Accent**: `#2c3e50` - Dark gray

### Components

- Glass-morphism effects with `backdrop-blur-xl`
- Touch-friendly buttons (`min-h-[44px]`)
- Smooth transitions and hover effects
- Responsive grid layouts

## 📱 Mobile Optimization

- Touch targets minimum 44x44px
- Full-width mobile menu
- Responsive typography
- Optimized images and assets
- Safe area insets for notched devices

## 🔧 Build Configuration

The project uses Vite with:

- Code splitting for optimal loading
- Vendor chunk separation (React, UI libraries)
- CSS extraction and minification
- Tree shaking for smaller bundles

## 📄 Pages

1. **Home** - Hero, services overview, testimonials, CTA
2. **Services** - Detailed service descriptions
3. **About** - Company history, team, values
4. **Projects** - Portfolio with filters
5. **Blog** - Articles, guides, FAQ
6. **Contact** - Contact form, info, map placeholder
7. **Legal** - Impressum, Datenschutz

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The `dist/` folder contains the production build ready for deployment to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📞 Contact Information

**Bariş Haustechnik**

- Address: Oberer Käuzerain 14, 35792 Löhnberg
- Phone: 06471 3790879
- Mobile: 0163 7709101
- Email: <info@baris-haustechnik.de>

## 📝 License

© 2024 Bariş Haustechnik. All rights reserved.
