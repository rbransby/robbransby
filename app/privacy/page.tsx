import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Fractional CTO + Automation';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${BRAND_NAME} services`,
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-slate-600 mb-4">
              We collect information you provide directly to us, such as when you contact us, 
              book a consultation, or engage our services. This may include your name, email address, 
              phone number, company information, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, process transactions, and comply with legal obligations.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organisational measures to protect your personal 
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-slate-600 mb-4">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of certain communications from us.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-900 underline">
                {CONTACT_EMAIL}
              </a>
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
