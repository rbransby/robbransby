import React from 'react';
import { Container } from './Container';
import { Card } from './Card';

interface Outcome {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const outcomes: Outcome[] = [
  {
    id: 'save-time',
    title: 'Save 10–40 hrs/mo',
    description: 'Automate repetitive tasks and free up your team for high-value work',
    icon: '⏰',
  },
  {
    id: 'cut-costs',
    title: 'Cut software costs',
    description: 'Identify and eliminate redundant tools, negotiate better deals',
    icon: '💸',
  },
  {
    id: 'derisk',
    title: 'De-risk decisions',
    description: 'Make informed technology choices backed by senior expertise',
    icon: '🛡️',
  },
];

export const Outcomes: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome) => (
            <Card key={outcome.id} hover>
              <div className="text-center space-y-4">
                <div className="text-5xl">{outcome.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">
                  {outcome.title}
                </h3>
                <p className="text-slate-600">
                  {outcome.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
