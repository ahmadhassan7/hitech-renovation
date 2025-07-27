# HITECH Renovations Website

A modern, animated website for HITECH Renovations built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design inspired by contemporary construction websites
- **Animations**: Smooth animations using Framer Motion and GSAP
- **Responsive**: Fully responsive design that works on all devices
- **Customizable Colors**: Easy to change primary (#9EBD43) and secondary (#223038) colors
- **Pages Included**:
  - Homepage with hero, services, about, portfolio sections
  - About page with company story and timeline
  - Services page with interactive service categories
  - Our Work/Portfolio page with filterable projects
  - Contact page with form and contact information
  - Team page showcasing team members
  - News/Blog page for company updates

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Color Customization

To change the primary and secondary colors, update the theme configuration in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#9EBD43', // Change this to your desired primary color
    // ... other shades
  },
  secondary: {
    DEFAULT: '#223038', // Change this to your desired secondary color
    // ... other shades
  },
}
```

## Project Structure

```
renovations/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── news/              # News/Blog page
│   ├── our-work/          # Portfolio page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── home/             # Homepage components
│   └── layout/           # Layout components (Navigation, Footer)
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **React Intersection Observer** - Viewport detection

## Building for Production

```bash
npm run build
npm start
```

## License

© 2024 HITECH Renovations. All rights reserved.