# Fractional CTO + Automation

A fast, modern marketing site for fractional CTO and automation services, built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14+ with App Router
- 💅 Tailwind CSS for styling
- 📱 Fully responsive design
- 🎯 SEO optimized with metadata and OG images
- 📊 Vercel Analytics integrated
- ♿ Accessible components
- 🎨 Clean, modern design with smooth scrolling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fractional-cto-automation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```env
NEXT_PUBLIC_BRAND_NAME="Fractional CTO + Automation"
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-handle/30min"
NEXT_PUBLIC_CONTACT_EMAIL="hello@example.com"
NEXT_PUBLIC_CITY="Perth, WA"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
fractional-cto-automation/
├── app/
│   ├── api/og/          # OG image generation
│   ├── privacy/         # Privacy policy page
│   ├── terms/           # Terms of service page
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── Card.tsx         # Card component
│   ├── Container.tsx    # Layout container
│   ├── SectionHeading.tsx
│   ├── FAQ.tsx          # FAQ accordion
│   ├── Pricing.tsx      # Pricing tiers
│   ├── CaseStudies.tsx  # Case study cards
│   ├── Booking.tsx      # Booking section
│   ├── Services.tsx     # Services section
│   └── Outcomes.tsx     # Outcomes section
├── lib/
│   └── seo.ts           # SEO configuration
└── public/
    └── site.webmanifest # PWA manifest
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and then deploy to production:
```bash
vercel --prod
```

### Environment Variables on Vercel

After deployment, add the environment variables in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all the `NEXT_PUBLIC_*` variables

### Enable Analytics

1. Go to your Vercel project dashboard
2. Navigate to the "Analytics" tab
3. Enable "Web Analytics" and "Speed Insights"

## Performance

The site is optimized for performance with:
- Lighthouse scores of 95+ for Performance, Best Practices, and SEO
- Lazy loading of components
- Optimized images and fonts
- Minimal JavaScript bundle

## Customization

### Updating Content

Most content can be updated through environment variables or by editing the component files directly:
- Services: Edit `components/Services.tsx`
- Pricing: Edit `components/Pricing.tsx`
- FAQ: Edit `components/FAQ.tsx`
- Case Studies: Edit `components/CaseStudies.tsx`

### Styling

The site uses Tailwind CSS with a neutral color palette. To customize:
- Edit `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component styles are inline using Tailwind classes

## License

This project is private and proprietary.

## Support

For questions or issues, contact: hello@example.com