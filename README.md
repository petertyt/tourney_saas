# Tourney - Modern Tournament Management SaaS

A modern, full-stack tournament management platform built with Next.js 14, TypeScript, and Tailwind CSS. Designed for gaming communities and esports organizations.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Tournament Management**: Create, manage, and track tournaments
- **Team Management**: Handle teams, players, and roles
- **Analytics Dashboard**: Real-time insights and performance metrics
- **Responsive Design**: Works perfectly on all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Built-in SEO with Next.js

## 🛠 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions

### Design System

- **Colors**: Primary blue (#4a90e2), secondary grays, semantic colors
- **Typography**: Inter, Poppins, Roboto font stack
- **Components**: Reusable UI components with variants
- **Spacing**: Consistent spacing scale
- **Shadows**: Soft, medium, and large shadow variants

## 📁 Project Structure

```
tourney-saas/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── signup/            # Signup page
│   └── dashboard/         # Dashboard page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # Button component with variants
│   │   ├── input.tsx     # Input component
│   │   └── checkbox.tsx  # Checkbox component
│   └── layout/           # Layout components
│       ├── navbar.tsx    # Navigation component
│       └── footer.tsx    # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions and cn utility
├── public/               # Static assets
│   └── assets/           # Images and icons
└── styles/               # Additional styles (legacy)
```

## 🎨 Design System

### Colors

- **Primary**: `#4a90e2` (Blue)
- **Secondary**: `#222` (Dark Gray)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#111827` (Dark)
- **Muted**: `#6b7280` (Gray)

### Typography

- **Primary Font**: Inter
- **Secondary Font**: Poppins
- **Fallback**: Roboto, sans-serif

### Components

- **Navigation**: Clean, modern navbar with rounded corners
- **Buttons**: Pill-shaped with hover effects
- **Cards**: Subtle shadows and rounded corners
- **Forms**: Accessible with proper focus states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/tourney-saas.git
   cd tourney-saas
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and bento grids
- **Signup** (`/signup`) - User registration with social login
- **Dashboard** (`/dashboard`) - Tournament management dashboard
- **Features** (`/features`) - Product features (coming soon)
- **Pricing** (`/pricing`) - Pricing plans (coming soon)

## 🎯 Key Features

### Homepage

- Modern hero section with gradient text
- Creative bento grid layouts for news and features
- Popular tournaments showcase
- Responsive design with mobile-first approach

### Signup Page

- Clean, minimal design
- Social login options (Google, GitHub)
- Password visibility toggle
- Form validation and loading states
- Terms and newsletter opt-ins

### Dashboard

- Overview with key metrics
- Tournament activity tracking
- Recent activity feed
- Active tournaments with progress bars
- Responsive sidebar navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📱 Responsive Design

The application is fully responsive and works on:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus indicators** for all interactive elements
- **Semantic HTML** structure
- **ARIA labels** and roles

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment with database
- **DigitalOcean**: App Platform support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the code comments and this README
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Contact**: Reach out via the contact form (coming soon)

## 🎮 Roadmap

### Phase 1 (Current)

- ✅ Homepage with modern design
- ✅ Signup page with form validation
- ✅ Dashboard with basic metrics
- ✅ Responsive navigation
- ✅ Design system implementation

### Phase 2 (Next)

- 🔄 Tournament creation wizard
- 🔄 Team management interface
- 🔄 Real-time notifications
- 🔄 Payment integration (Stripe)
- 🔄 User authentication (NextAuth.js)

### Phase 3 (Future)

- 📋 Advanced analytics
- 📋 API for third-party integrations
- 📋 Mobile app (React Native)
- 📋 Multi-language support
- 📋 Advanced tournament formats

---

**Built with ❤️ for the gaming community by [officialPeter.DEV](https://officialpeter.dev)**
