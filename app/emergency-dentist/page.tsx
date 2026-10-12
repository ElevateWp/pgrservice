import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_INFO, EMERGENCY_CONDITIONS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata, generateFaqSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Urgent Roof Repairs',
  description:
    'Contact PGR Services about active roof leaks and storm damage in Dublin. Call +353 87 330 8707.',
  pathname: '/emergency-dentist/',
});

const EMERGENCY_FAQS = [
  {
    question: 'How do I report urgent roof damage?',
    answer: 'Call PGR Services on +353 87 330 8707 to discuss active leaks or storm damage and check availability.',
  },
  {
    question: 'Can you assess roof damage at my property?',
    answer: 'Contact the team to confirm availability and arrange an assessment at your property.',
  },
  {
    question: 'What should I do if roof tiles have fallen?',
    answer: 'Stay clear of loose materials and take photos from the ground only if it is safe. Do not climb onto the roof; call the team for advice.',
  },
];

export default function EmergencyDentistPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={generateFaqSchema(EMERGENCY_FAQS)} />



      {/* SECTION 1: Urgência Introduction & Immediate Action */}
      <section className="py-12 md:py-16 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Emergency Repairs', path: '/emergency-dentist/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest font-semibold block mb-2 uppercase tracking-wider">
                Urgent roof repairs
              </span>
              <h1 className="font-display text-33 sm:text-41 md:text-52 text-forest-ink leading-tight mb-4">
                Roof leaks and storm damage
              </h1>
              <p className="font-body text-17 text-forest-ink/90 leading-relaxed mb-6 max-w-2xl">
                If you have an active leak or storm damage, keep clear of unsafe areas and contact us to discuss an assessment.
              </p>

              {/* Direct Immediate Call Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button href="/book-appointment/" variant="ghost" size="lg">
                  Request an assessment
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-forest text-paper">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime font-medium uppercase tracking-wider block mb-2">
                PGR Services address
              </span>
              <address className="not-italic font-body text-15 text-paper leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.country}
              </address>
              <div className="pt-3 border-t border-mist/20 text-13 text-paper/80 font-body">
                Call to confirm service availability in your area.
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 4: Roof emergencies and immediate safety steps */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Signs of damage and immediate safety steps
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              What to do while you wait for a roof assessment
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EMERGENCY_CONDITIONS.map((cond, idx) => (
              <AnimateOnScroll key={cond.id} animation="fade-up" delay={idx * 0.1}>
              <div
                className="p-8 border border-mist bg-paper flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-display text-21 text-forest-ink">
                      {cond.title}
                    </span>
                    <span className="font-body text-13 text-forest font-semibold bg-mist/60 px-2.5 py-1">
                      {cond.urgency}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-1 font-medium">
                      Visible Signs:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/80">
                      {cond.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-mist/30 border-l-2 border-forest mb-4">
                    <span className="font-body text-13 text-forest font-semibold block mb-1">
                      Immediate Steps:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/90">
                      {cond.immediateAction.map((act, i) => (
                        <li key={i}>• {act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist text-13 font-body text-forest-ink/70">
                  <strong className="text-forest font-medium">Recommended action:</strong> {cond.clinicTreatment}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: When You Should Seek Immediate Care */}
      <section className="py-16 md:py-24 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="max-w-3xl mb-8">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Signs that need prompt attention
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
              When roof damage needs prompt attention
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
              Active leaks, exposed roof areas or water near electrical fittings need attention. Keep clear of unsafe areas and request an assessment.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="zoom-in" duration={0.8}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Sagging or Warped Ceiling</h3>
              <p className="font-body text-13 text-forest-ink/70">
                A sagging ceiling can indicate trapped water or structural damage. Keep away and do not press on it.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Leak near electrical fittings</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Do not touch damp lights, sockets or wiring. Stay clear and contact a qualified electrician if needed.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Tiles moved by strong winds</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Do not climb onto the roof to replace tiles. Photograph damage from the ground only if it is safe.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.3}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Active Leak During Rain</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Move items away from water and collect it only if there is no electrical or structural risk.
              </p>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: Urgent repair options */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Services for urgent damage
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Work the team can assess
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" duration={0.8}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof leak repairs</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Assess potential water entry points and agree on a suitable repair.
              </p>
              <Link href="/root-canal/" className="font-body text-13 text-forest underline">
                Learn about leak repairs →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof tile replacement</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Inspect displaced tiles and assess replacement with safe roof access.
              </p>
              <Link href="/dental-implants/" className="font-body text-13 text-forest underline">
                Learn about roof repairs →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof sealing and flashing</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Check roof junctions and seals where water may be getting in.
              </p>
              <Link href="/contact/" className="font-body text-13 text-forest underline">
                Contact the team →
              </Link>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: Same-Day Information & Direct Urgência Contact */}
      <section className="py-16 md:py-24 border-b border-mist bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Request an assessment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper mb-4">
                Talk to the team about roof damage
              </h2>
              <p className="font-body text-17 text-paper/90 leading-relaxed mb-8 max-w-2xl">
                Contact us to request an assessment. The team will confirm availability, access and the repair scope.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Telefone: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="ghost"
                  size="lg"
                  className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
                >
                  WhatsApp
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-paper/10 border border-mist/20">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime block mb-2 font-medium">
                Address
              </span>
              <p className="font-body text-13 text-paper/80 leading-relaxed">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Location and opening hours */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Address</span>
              <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                Dublin and surrounding areas
              </h2>
              <address className="not-italic font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <p className="font-body text-13 text-forest-ink/70">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Opening hours</span>
              <div className="border border-mist divide-y divide-mist bg-paper font-body text-13">
                {CLINIC_INFO.schedule.map((item) => (
                  <div key={item.day} className="p-3 flex justify-between">
                    <span>{item.day}</span>
                    <span className="tabular-nums">{item.hours}</span>
                  </div>
                ))}
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Emergency repair FAQs */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Frequently asked questions</span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Emergency repair FAQs
              </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <Accordion items={EMERGENCY_FAQS} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final emergency contact CTA */}
      <section className="py-16 md:py-24 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="flex flex-col items-center">
          <h2 className="font-display text-33 md:text-41 text-paper mb-4">
            Do not climb onto an unsafe roof.
          </h2>
          <p className="font-body text-15 md:text-17 text-paper/80 mb-8 max-w-xl">
            The team can assess visible damage and explain your roof repair options.
          </p>
          <Button
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            variant="lime"
            size="lg"
            className="font-bold text-17"
          >
            Telefone: {CLINIC_INFO.contact.emergencyPhone}
          </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
