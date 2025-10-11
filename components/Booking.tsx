import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './Card';
import { Button } from './Button';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-handle/30min';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com';

export const Booking: React.FC = () => {
  return (
    <section id="book" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          title="Book Your Free Audit Call"
          subtitle="Let's discuss how automation can transform your business"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hover>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Schedule a Call
              </h3>
              <p className="text-slate-600">
                Book a free 30-minute consultation to discuss your automation needs
              </p>
              <Button
                href={CALENDLY_URL}
                external
                variant="primary"
                size="lg"
                className="w-full"
              >
                Open Calendar
              </Button>
              <p className="text-xs text-slate-500">
                Perth time zone supported
              </p>
            </div>
          </Card>
          
          <Card hover>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Prefer Email?
              </h3>
              <p className="text-slate-600">
                Send us your requirements and we&apos;ll respond within 24 hours
              </p>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Send Email
              </Button>
              <p className="text-xs text-slate-500">
                {CONTACT_EMAIL}
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
