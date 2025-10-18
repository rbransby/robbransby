import { Metadata } from 'next';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Fractional CTO + Automation';
const CITY = process.env.NEXT_PUBLIC_CITY || 'Perth, WA';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com';

export const siteConfig = {
  name: BRAND_NAME,
  title: `${BRAND_NAME} — ${CITY}`,
  description: 'On-demand CTO leadership + hands-on AI automations. We help Perth-based SMEs streamline operations, cut costs, and scale smarter with senior technology strategy and practical automation solutions.',
  tagline: 'On-demand CTO leadership + hands-on AI automations',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fractional-cto-automation.vercel.app',
  email: CONTACT_EMAIL,
  city: CITY,
  keywords: [
    'fractional CTO Perth',
    'automation consulting Perth',
    'AI automation for small business',
    'technology strategy Perth',
    'workflow automation',
    'business automation Perth',
    'CTO as a service',
  ],
};

export function getBaseMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: ['/api/og'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}
