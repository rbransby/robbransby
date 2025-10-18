import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './Card';
import { Button } from './Button';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'audit',
    name: 'Audit',
    price: '$1.5k–3k',
    period: 'one-off',
    features: [
      'Full technology assessment',
      '90-day automation roadmap',
      'Quick wins identified',
    ],
    cta: 'Book audit call',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$2k–3k',
    period: '/month',
    features: [
      '1–2 automations per month',
      'Regular strategy sessions',
      'Basic reporting setup',
    ],
    cta: 'Get started',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$4k–6k',
    period: '/month',
    features: [
      '2–4 automations per month',
      'Regular check-ins',
      'Advanced dashboards',
    ],
    cta: 'Scale up',
    highlighted: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$7k+',
    period: '/month',
    features: [
      'Priority automation pipeline',
      'Direct communication channel',
      'Comprehensive CTO services',
    ],
    cta: 'Contact us',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Choose the engagement that fits your needs. All prices in AUD."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative ${
                tier.highlighted
                  ? 'ring-2 ring-slate-900 shadow-lg scale-105'
                  : ''
              }`}
              hover
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-900 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {tier.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-slate-900">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-slate-600 ml-1">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  href="#book"
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
