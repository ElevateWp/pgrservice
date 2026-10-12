import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'dental-cleaning')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Gutter Cleaning',
  description:
    'Professional gutter cleaning to help keep rainwater flowing away from your property.',
  pathname: '/dental-cleaning/',
});

export default function DentalCleaningPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/dental-cleaning/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/dental-cleaning/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Gutter Cleaning & Drainage
                </span>
                <WordRevealH1 text="Clear gutters help rainwater drain safely away." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a Gutter Cleaning Quote
                  </Button>
                  <Button href="#procedure" variant="ghost" size="lg">
                    See the Service Steps
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Service</span>
                    <span className="font-medium text-forest">Gutter cleaning</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Drainage</span>
                    <span className="font-medium text-forest">Outlets checked</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-medium text-forest">By appointment</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Professional Gutter Cleaning */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Preventive Science
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Does Gutter Cleaning Work?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    The team removes accessible leaves and debris, checks outlets and drainage, and reports visible signs of damage that may need repair.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/pgr-project-01.jpg"
                    alt="Gutter and downpipe project"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Gutter Cleaning Is Important */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Protect Your Property
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Why Keep Gutters Clear?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <p className="font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {benefit}
                  </p>
                  <span className="font-body text-13 text-forest font-medium">Property care</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What Happens During Cleaning? (Procedure Pin) */}
      <div id="procedure">
        <ProcedurePin
          steps={service.procedureSteps}
          title="Gutter Cleaning Steps"
          subtitle="A clear, careful service process"
        />
      </div>

      {/* SECTION 5: Common Drainage Problems */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Drainage Problems
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Common Causes of Blocked Gutters
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Leaves, moss and other debris can restrict water flow. Clearing the gutter helps reduce overflow and makes visible issues easier to identify.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Leaves and Twigs</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Leaves and small debris can collect in gutters and slow the flow of rainwater.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Compacted Debris</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Wet leaves and dirt can build up over time. The cleaning method depends on safe access and the condition of the property.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Blocked Outlets</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  A blocked outlet can prevent water from draining through the downpipe and may cause water to spill over the gutter edge.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: How Often Should You Get Cleaning? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Maintenance Frequency
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                When to Arrange Gutter Cleaning
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Periodic Checks</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Routine Maintenance</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  The right cleaning schedule depends on nearby trees, weather exposure and the layout of your property.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">After Stormy Weather</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Check for Overflow</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  If water has overflowed or you notice a leak, arrange an inspection to identify the cause and discuss suitable next steps.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Aftercare */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                After-Service Care
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Keeping Your Roof Drainage in Good Condition
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Keep Gutters Clear</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Arrange cleaning when leaves or other debris begin to collect in gutters or at outlet points.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Look for Visible Issues</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  From the ground, look for overflow, loose fittings or visible leaks. Do not climb onto the roof without suitable equipment and training.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Arrange Repairs Promptly</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Broken or displaced roof components should be assessed by a professional with safe roof access.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 8: Cost Information */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Transparent Quotes
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Gutter Cleaning Quotes
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Quotation Details</span>
                  <span className="font-display text-26 md:text-33 text-forest block mb-2">
                    {service.costTransparency.baseRange}
                  </span>
                  <p className="font-body text-13 text-forest-ink/70">
                    {service.costTransparency.note}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <div className="p-6 bg-mist/30 border border-mist shadow-sm">
                  <h3 className="font-display text-17 md:text-21 text-forest-ink mb-3">
                    Information to Help Prepare Your Quote:
                  </h3>
                  <ul className="space-y-2 font-body text-13 text-forest-ink/80">
                    {service.costTransparency.whatIsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  homeowner Inquiries
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Gutter Cleaning FAQs
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <Accordion items={service.faqs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Gutter Care
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request Gutter Cleaning
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request a Quote
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
