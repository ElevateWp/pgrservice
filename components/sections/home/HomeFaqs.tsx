import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'How do you handle a roof leak?',
    answer: 'We inspect the roof, identify visible sources of water ingress and explain the recommended repair and expected timing.',
    relatedLink: { href: '/dental-implants/', label: 'Learn about roof repairs →' },
  },
  {
    question: 'Do you cover my area?',
    answer: 'Contact us by phone or WhatsApp and we will confirm availability for your location.',
    relatedLink: { href: '/contact/', label: 'Check our service area →' },
  },
  {
    question: 'What roofing services do you offer?',
    answer: 'We provide gutter, fascia and soffit replacement, roof repairs and roof inspections. Get in touch to discuss your project.',
    relatedLink: { href: '/braces/', label: 'Explore roof inspections →' },
  },
  {
    question: 'How can I get a quotation?',
    answer: `Call or message us on WhatsApp at ${CLINIC_INFO.contact.phone} or use our online quote form.`,
    relatedLink: { href: '/book-appointment/', label: 'Request a free quote →' },
  },
  {
    question: 'Where is PGR Services based?',
    answer: CLINIC_INFO.primaryLocation.directions,
    relatedLink: { href: '/contact/', label: 'Check our service area →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Roofing & Guttering FAQs
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Straightforward answers about roofing repairs, guttering and our Dublin service area.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have another question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Get in touch with Rafal and the team.
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=353873308707`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Message us on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
