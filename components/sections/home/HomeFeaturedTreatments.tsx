import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#202020] block mb-2 font-medium uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#202020]">
            Guttering, fascias and roof repairs
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Guttering and roof repair services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#202020] uppercase tracking-wider block mb-2 font-medium">
                Roof repairs
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#202020] mb-4">
                Find and fix leaks at the source
              </h3>
              <p className="font-body text-15 md:text-17 text-[#202020]/80 leading-relaxed mb-6">
                From slipped tiles to active leaks, we inspect the roof and explain the recommended repair and timing before work begins.
              </p>
              <div className="p-4 bg-[#F5F7F5] border-l-4 border-[#202020] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#202020]/80">
                  <strong className="text-[#202020] font-semibold">Our promise:</strong> Clear advice and an agreed scope before work starts.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Explore roof repairs
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/pgr-project-03.jpg"
                  alt="Roof repair project by PGR Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Gutter, fascia and soffit installation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/pgr-project-13.jpg"
                  alt="New white fascia, soffit and guttering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#202020] uppercase tracking-wider block mb-2 font-medium">
                Guttering, fascias & soffits
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#202020] mb-4">
                A clean finish that lasts
              </h3>
              <p className="font-body text-15 md:text-17 text-[#202020]/80 leading-relaxed mb-6">
                Replace worn gutters and refresh fascias and soffits with carefully fitted materials made to suit your home.
              </p>
              <div className="p-4 bg-[#F5F7F5] border-l-4 border-[#202020] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#202020]/80">
                  <strong className="text-[#202020] font-semibold">Free quotation:</strong> Get straightforward advice tailored to your property.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                View all services
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
