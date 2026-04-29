# 🚨 MediAlert+ - Professional Medical Alert System

<div align="center">

![MediAlert+ Logo](https://img.shields.io/badge/MediAlert+-Medical%20Alert%20Systems-blue?style=for-the-badge&logo=medical-services)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A professional, modern medical alert system website built with cutting-edge technology**

[🌐 Live Demo](#) • [📖 Documentation](#documentation) • [🚀 Getting Started](#getting-started) • [🤝 Contributing](#contributing)

</div>

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🎨 Design & UI](#-design--ui)
- [📱 Pages](#-pages)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📦 Build & Deploy](#-build--deploy)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Features

### 🏥 Medical Alert Services
- **24/7 Emergency Monitoring** - Professional monitoring centers
- **GPS-Enabled Devices** - Real-time location tracking
- **Medical ID Jewelry** - Engraved identification products
- **Smart Watches** - Advanced health monitoring
- **In-Home Systems** - Base station with wireless range

### 🎨 Professional Design
- **Custom Hero Sections** with background images
- **Advanced Animations** - Fade-in, slide-in, bounce effects
- **Gradient Text Effects** using brand colors
- **Responsive Design** - Mobile-first approach
- **Professional Typography** and spacing

### 🔧 Technical Features
- **Modern React Stack** with TypeScript
- **TanStack Router** for navigation
- **Tailwind CSS** for styling
- **Component Architecture** with shadcn/ui
- **SEO Optimization** with meta tags
- **Accessibility** compliance

## 🎨 Design & UI

### Visual Elements
- **Background Images**: Professional medical imagery
- **Color Scheme**: Navy blue with brand accents
- **Typography**: Professional font hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Layout**: Clean, modern, and intuitive

### User Experience
- **Navigation**: Dropdown menus with hover effects
- **Forms**: Professional contact and sign-up forms
- **Cards**: Product and service showcases
- **Hero Sections**: Full-screen with animated text
- **Footer**: Comprehensive links and information

## 📱 Pages

### 🏠 Main Pages
- **Home** - Hero section with key features
- **Protection** - 24/7 protection services overview
- **Programs** - Product catalog with filtering
- **Contact Us** - Professional contact form and information
- **Why Choose Us** - Trust-building content with background image

### 📋 Service Pages
- **How It Works** - Step-by-step process explanation
- **Renew Plans** - Account creation and plan renewal
- **Compare Plans** - Detailed plan comparison table
- **Medical IDs** - Medical identification products

### 📄 Legal Pages
- **Privacy Policy** - HIPAA-compliant privacy information
- **Terms of Service** - Professional terms and conditions

### 📚 Guide Pages
- **In-Home Medical System** - Setup and usage guide
- **Personal 4G Care Watch** - Smart watch guide
- **Personal Alert Device** - Mobile device guide

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **TypeScript 5.0.0** - Type safety
- **TanStack Router** - Routing solution
- **Tailwind CSS 3.3.0** - Styling framework
- **shadcn/ui** - Component library

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static typing

### Deployment
- **Cloudflare Pages** - Hosting platform
- **Wrangler** - Cloudflare deployment tool

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sajjad7656/Med-alert-plus.git
   cd Med-alert-plus
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8082`

### Environment Setup
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=contact@medialert.com
```

## 📁 Project Structure

```
MediAlert+/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   └── site/        # Site-specific components
│   ├── data/            # Data and configuration
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── routes/          # Page components
│   ├── styles.css       # Global styles
│   └── router.tsx       # Router configuration
├── public/              # Public assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## 🔧 Configuration

### Vite Configuration
The `vite.config.ts` file includes:
- **TanStack Router** integration
- **Tailwind CSS** support
- **TypeScript** configuration
- **Build optimization**

### Tailwind Configuration
Custom design system with:
- **Brand colors** and palette
- **Typography** scale
- **Animation** utilities
- **Responsive** breakpoints

### TypeScript Configuration
Strict type checking with:
- **React** types
- **Node.js** types
- **ESLint** integration
- **Path aliases**

## 📦 Build & Deploy

### Local Build
```bash
npm run build
# or
yarn build
# or
bun build
```

### Preview Build
```bash
npm run preview
# or
yarn preview
# or
bun preview
```

### Deployment to Cloudflare Pages
```bash
npm run build
npx wrangler pages deploy dist
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style
- Use **TypeScript** for all new code
- Follow **ESLint** rules
- Use **Prettier** for formatting
- Write **semantic** commit messages
- Add **tests** for new features

### Bug Reports
Please use the [GitHub Issues](https://github.com/Sajjad7656/Med-alert-plus/issues) to report bugs or request features.

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization
- **Code splitting** for faster loading
- **Image optimization** with WebP support
- **CSS optimization** with PurgeCSS
- **Bundle analysis** and optimization

## 🔒 Security

- **TypeScript** for type safety
- **Content Security Policy** headers
- **XSS protection** measures
- **HTTPS** enforcement
- **Secure dependencies** with npm audit

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for the beautiful component library
- **TanStack** for the excellent router solution
- **Vite** for the fast build tool

## 📞 Contact

- **Website**: [MediAlert+](https://medialert.com)
- **Email**: contact@medialert.com
- **Phone**: 1-800-555-1234
- **GitHub**: [@Sajjad7656](https://github.com/Sajjad7656)

---

<div align="center">

**Made with ❤️ for the MediAlert+ team**

[⭐ Star this repo](https://github.com/Sajjad7656/Med-alert-plus) • [🐛 Report issues](https://github.com/Sajjad7656/Med-alert-plus/issues) • [📧 Contact us](mailto:contact@medialert.com)

</div>
