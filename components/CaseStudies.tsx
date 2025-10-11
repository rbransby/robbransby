import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './Card';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'timesheets',
    title: 'Tradie timesheets → payroll',
    description: 'Reduced weekly admin by ~8 hrs via automation of timesheets to payroll and invoices.',
    metric: '8 hrs saved/week',
    icon: '⏱️',
  },
  {
    id: 'dashboard',
    title: 'Exec dashboard in 10 days',
    description: 'Built Metabase dashboards; leadership had live KPIs.',
    metric: '10 day delivery',
    icon: '📊',
  },
  {
    id: 'rationalisation',
    title: 'Tool rationalisation',
    description: 'Cut overlapping SaaS, saving ~$1.8k/month.',
    metric: '$1.8k/month saved',
    icon: '💰',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-20 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Real Results"
          subtitle="Recent wins for Perth businesses"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} hover>
              <div className="text-4xl mb-4">{study.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {study.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {study.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-sm font-semibold text-slate-900">
                  {study.metric}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
