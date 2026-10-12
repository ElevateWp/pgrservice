import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import BeforeAfterSlider from '@/components/motion/BeforeAfterSlider';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'braces')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Roof Inspections',
  description:
    'Roof inspections to identify visible wear, drainage issues and areas that may need maintenance.',
  pathname: '/braces/',
});

const BRACES_COMPARISON = [
  { type: 'Clay Tiles', visibility: 'Visual check of tiles and joints', removability: 'Replacement based on compatibility and roof condition', comfort: 'Check of seals and finishing', bestFor: 'Broken, displaced or visibly worn tiles', adjustmentInterval: 'Schedule advised after inspection' },
  { type: 'Metal Roofing', visibility: 'Check of overlaps and fixings', removability: 'Localised repair based on material condition', comfort: 'Review of joints, screws and finishing', bestFor: 'Water entry points or damaged sections', adjustmentInterval: 'Schedule advised after inspection' },
  { type: 'Flat Roof', visibility: 'Check of seams, outlets and seals', removability: 'Solution selected for the surface', comfort: 'Drainage and pooling check', bestFor: 'Signs of damp or standing water', adjustmentInterval: 'Schedule advised after inspection' },
];

export default function BracesPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/braces/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/braces/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Roof Inspections
                </span>
                <WordRevealH1 text="Roof inspections to identify wear and vulnerable areas." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a Roof Assessment
                  </Button>
                  <Button href="#comparison" variant="ghost" size="lg">
                    Explore Roof Types
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Service Team</span>
                    <Link href={`/dentists/${leadDentist.slug}/`} className="font-medium text-forest underline">
                      {leadDentist.name}
                    </Link>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Featured Service</span>
                    <span className="font-medium text-forest">Inspection based on roof condition</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assessment Method</span>
                    <span className="font-medium text-forest">Visual roof inspection</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About Roof Inspections */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Roof Assessment
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Does a Roof Inspection Work?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    The inspection checks tiles, seams, flashing and seals to help identify suitable repair or maintenance work.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/pgr-project-10.jpg"
                    alt="Residential roof inspection"
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

      {/* SECTION 3: When to Arrange an Inspection */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                When to Arrange an Inspection
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                What Signs May Indicate a Need for Repair?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whoNeeds.map((item, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex items-start gap-4 h-full shadow-sm">
                  <span className="font-display text-21 text-forest flex-shrink-0">0{idx + 1}</span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Roof Types (Comparison Table) */}
      <section id="comparison" className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roof Types
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roof Type Comparison
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className="border border-mist overflow-x-auto bg-paper shadow-sm">
              <table className="w-full text-left font-body text-13 border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-mist/40 border-b border-mist text-forest-ink">
                    <th className="py-4 px-6 font-display text-17">Roof Type</th>
                    <th className="py-4 px-6 font-medium">Visible Finishing and Details</th>
                    <th className="py-4 px-6 font-medium">Repair Options</th>
                    <th className="py-4 px-6 font-medium">When to Arrange an Inspection</th>
                    <th className="py-4 px-6 font-medium">Review Timing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist">
                  {BRACES_COMPARISON.map((row) => (
                    <tr key={row.type} className="hover:bg-mist/20 transition-colors">
                      <td className="py-5 px-6 font-display text-17 text-forest font-medium">
                        {row.type}
                      </td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.visibility}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.removability}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.bestFor}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.adjustmentInterval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: Inspection Process */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="Roof Inspection Steps"
        subtitle="How the service works"
      />

      {/* SECTION 6: Service Timing */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Service Steps
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Estimated Repair Timing
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                The timing depends on the materials, access and extent of any damage. The team will explain the next steps after inspecting the roof.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Assessment</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Roof Condition Check</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  The team identifies visibly damaged tiles and assesses which sections may need adjustment or replacement.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Repair</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Work on Affected Areas</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Seals, overlaps and finishing are reviewed according to the roof type.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Review</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Finishing Review</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  The final review covers the work completed and any maintenance guidance.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-mist/40 border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Maintenance</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Preventive Roof Care</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  The team can explain practical roof maintenance after the inspection or repair.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Functional Value
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Benefits of Preventive Maintenance
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
                  <span className="font-body text-13 text-forest font-medium">Roof maintenance</span>
                </div>
              </AnimateOnScroll>
            ))}
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
                  Service Quote
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Roof Repair Quotes
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Full repair Range</span>
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
                    Items Considered in Your Quote:
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

      {/* SECTION 9: Before & After */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Example Inspection
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Illustrative Roof Repair Example
              </h2>
              <p className="font-body text-15 text-forest-ink/80 max-w-2xl">
                {service.beforeAfterCase.clinicalContext}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={service.beforeAfterCase.beforeImage}
                afterImage={service.beforeAfterCase.afterImage}
                beforeLabel={service.beforeAfterCase.beforeLabel}
                afterLabel={service.beforeAfterCase.afterLabel}
                clinicalNote={`Project example: ${service.beforeAfterCase.timeframe}.`}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  homeowner Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Roof Inspection FAQs
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

      {/* SECTION 11: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Request an Inspection
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a Roof Inspection
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request an Assessment
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
