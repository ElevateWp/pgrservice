'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProcedureStep {
  stepNumber: number;
  title: string;
  duration: string;
  description: string;
  clinicalDetails: string;
}

interface ProcedurePinProps {
  steps: ProcedureStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ProcedurePin({
  steps,
  title = 'Service steps',
  subtitle = 'Repair process',
  className = '',
}: ProcedurePinProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const stepElements = containerRef.current?.querySelectorAll('.procedure-step-item');
      if (!stepElements) return;

      stepElements.forEach((stepEl, idx) => {
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section
      ref={containerRef}
      className={`w-full py-12 sm:py-16 md:py-24 border-t border-b border-mist ${className}`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8 md:mb-12">
          <span className="font-body text-13 text-forest-ink/60 block mb-2">{subtitle}</span>
          <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink leading-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Sticky Step Overview (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28 p-8 bg-paper border border-mist">
              <span className="font-body text-13 text-forest uppercase tracking-wider block mb-2 font-medium">
                Etapa ativa {activeStep + 1} de {steps.length}
              </span>
              <h3 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                {steps[activeStep]?.title}
              </h3>
              <div className="inline-block bg-mist/60 px-3 py-1 text-13 font-body text-forest-ink/80 mb-6">
                Estimated Duration: {steps[activeStep]?.duration}
              </div>
              <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                {steps[activeStep]?.clinicalDetails}
              </p>

              {/* Step Progress Vertical Timeline */}
              <div className="flex flex-col space-y-3 pt-6 border-t border-mist">
                {steps.map((s, idx) => (
                  <div
                    key={s.stepNumber}
                    className={`flex items-center gap-3 transition-colors duration-200 ${
                      activeStep === idx ? 'text-forest font-medium' : 'text-forest-ink/40'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-13 border ${
                        activeStep === idx
                          ? 'border-forest bg-forest text-paper'
                          : 'border-mist bg-transparent text-forest-ink/40'
                      }`}
                    >
                      {s.stepNumber}
                    </span>
                    <span className="font-body text-13 truncate">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Procedure Flow (Scrolls on desktop, clean responsive stack on mobile) */}
          <div className="w-full lg:col-span-7 flex flex-col space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className={`procedure-step-item p-6 sm:p-8 border border-mist bg-paper/60 transition-all duration-300 ${
                  activeStep === idx ? 'border-forest/50 shadow-sm' : 'opacity-90'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="font-display text-21 sm:text-26 text-forest">Etapa 0{step.stepNumber}</span>
                  <span className="font-body text-13 text-forest-ink/60 bg-mist/50 px-2.5 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-display text-21 sm:text-26 text-forest-ink mb-3 sm:mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="font-body text-15 sm:text-17 text-forest-ink/90 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="p-3.5 sm:p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80 block">
                    <strong className="text-forest font-medium">Typical timing:</strong>{' '}
                    {step.clinicalDetails}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
