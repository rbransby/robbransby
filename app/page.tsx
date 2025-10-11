'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Services } from '@/components/Services';
import { Outcomes } from '@/components/Outcomes';
import { Pricing } from '@/components/Pricing';
import { CaseStudies } from '@/components/CaseStudies';
import { Booking } from '@/components/Booking';
import { FAQ } from '@/components/FAQ';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Fractional CTO + Automation';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between py-4">
            <a href="#" className="text-xl font-bold text-slate-900">
              {BRAND_NAME}
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#cases"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#faq"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                FAQ
              </a>
              <Button href="#book" size="sm">
                Book a Call
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </header>
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              On-demand CTO leadership
              <br />
              <span className="text-slate-700">+ hands-on AI automations</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              We help Perth-based SMEs streamline operations, cut costs, and scale smarter — 
              combining senior technology strategy with rapid automation delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button href="#book" size="lg">
                Get a free 30-min audit call
              </Button>
              <Button href="#pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                <span>90-day roadmap included</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                <span>First automation in 1-2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                <span>Perth-based support</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* All other sections */}
      <Services />
      <Outcomes />
      <Pricing />
      <CaseStudies />
      <Booking />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} {BRAND_NAME} — {process.env.NEXT_PUBLIC_CITY || 'Perth, WA'}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <Button href="#book" size="sm" variant="secondary">
                Book a call
              </Button>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}