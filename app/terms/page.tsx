import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Fractional CTO + Automation';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com';
const CITY = process.env.NEXT_PUBLIC_CITY || 'Perth, WA';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${BRAND_NAME} services`,
};

export default function TermsPage() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-bold text-slate-900">
              {BRAND_NAME}
            </Link>
            <Button href="/#book" size="sm">
              Book a Call
            </Button>
          </nav>
        </Container>
      </header>
      
      <main className="py-16 md:py-24">
        <Container size="sm">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              1. Services
            </h2>
            <p className="text-slate-600 mb-4">
              {BRAND_NAME} provides fractional CTO services, technology consulting, 
              and automation solutions to businesses. Our services are tailored to each 
              client&apos;s specific needs as outlined in individual service agreements.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              2. Service Agreement
            </h2>
            <p className="text-slate-600 mb-4">
              Specific terms for each engagement will be detailed in a separate service agreement, 
              including scope of work, deliverables, timelines, and pricing.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              3. Payment Terms
            </h2>
            <p className="text-slate-600 mb-4">
              Payment terms will be specified in your service agreement. Generally, invoices are 
              due within 14 days of issue. All prices are in Australian dollars (AUD) unless 
              otherwise specified.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-slate-600 mb-4">
              Unless otherwise agreed in writing, all intellectual property rights in deliverables 
              created specifically for you will be assigned to you upon full payment. We retain 
              rights to our pre-existing intellectual property and general methodologies.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              5. Confidentiality
            </h2>
            <p className="text-slate-600 mb-4">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive 
              information shared during the engagement.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-600 mb-4">
              Our liability for any claim arising from our services is limited to the fees paid 
              for the specific services giving rise to the claim.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              7. Governing Law
            </h2>
            <p className="text-slate-600 mb-4">
              These terms are governed by the laws of Western Australia, and any disputes will 
              be subject to the exclusive jurisdiction of the courts of Western Australia.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              8. Contact Information
            </h2>
            <p className="text-slate-600 mb-4">
              For questions about these terms, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-900 underline">
                {CONTACT_EMAIL}
              </a>
              . We are based in {CITY}.
            </p>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              ← Back to home
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}
