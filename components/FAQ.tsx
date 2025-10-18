'use client';

import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'who-is-this-for',
    question: 'Who is this for?',
    answer: 'Owner-operators and SME teams (10–200 staff) that want senior technology leadership without a full-time CTO, plus hands-on automation to remove manual work fast.',
  },
  {
    id: 'what-tools',
    question: 'What tools do you work with?',
    answer: 'Microsoft 365/Power Automate, Xero, Google Workspace, Slack, Metabase/Power BI, Zapier/n8n/Make, Azure/GCP/AWS, and custom integrations.',
  },
  {
    id: 'time-to-value',
    question: 'How long to see value?',
    answer: 'Quick wins delivered within weeks and a clear 90-day roadmap in the first month.',
  },
  {
    id: 'location',
    question: 'Where are you based?',
    answer: 'Perth, WA — remote across Australia; in-person by arrangement.',
  },
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  return (
    <section id="faq" className="py-20 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common questions about our fractional CTO and automation services"
        />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${item.id}`}
                  className={`px-6 transition-all duration-200 ${
                    isOpen ? 'py-5' : 'py-0 invisible h-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
