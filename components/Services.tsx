import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './Card';

interface Service {
  id: string;
  title: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy & Roadmaps',
    icon: '🗺️',
    features: [
      '30–60 day and 90-day plans',
      'Vendor selection & stack rationalisation',
      'Security, privacy & data guidance',
    ],
  },
  {
    id: 'automation',
    title: 'AI & Workflow Automation',
    icon: '🤖',
    features: [
      'Zapier / n8n / Power Automate',
      'Custom scripts & APIs',
      'Inbox → invoice, timesheets → payroll, CRM → reporting',
    ],
  },
  {
    id: 'reporting',
    title: 'Dashboards & Reporting',
    icon: '📊',
    features: [
      'Power BI / Metabase',
      'KPIs for operations & finance',
      'Exec insights delivered weekly',
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          title="What You Get"
          subtitle="Comprehensive technology leadership and hands-on execution"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} hover>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
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
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
