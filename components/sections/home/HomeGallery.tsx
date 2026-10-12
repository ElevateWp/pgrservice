import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/pgr-project-01.jpg', alt: 'Black gutter and downpipe installation' },
  { src: '/images/pgr-project-02.jpg', alt: 'Fascia and soffit replacement before and after' },
  { src: '/images/pgr-project-03.jpg', alt: 'Roof repair and new waterproofing layer' },
  { src: '/images/pgr-project-04.jpg', alt: 'PGR Services work van' },
  { src: '/images/pgr-project-05.jpg', alt: 'Gutter and downpipe replacement before and after' },
  { src: '/images/pgr-project-06.jpg', alt: 'Roof tile replacement in progress' },
  { src: '/images/pgr-project-07.jpg', alt: 'Friendly PGR Services roofing team' },
  { src: '/images/pgr-project-08.jpg', alt: 'New roofline and white soffits' },
  { src: '/images/pgr-project-09.jpg', alt: 'Guttering and fascia detailing' },
  { src: '/images/pgr-project-10.jpg', alt: 'New guttering on a brick home' },
  { src: '/images/pgr-project-11.jpg', alt: 'Brown fascia and gutter installation' },
  { src: '/images/pgr-project-12.jpg', alt: 'Guttering and downpipe replacement' },
  { src: '/images/pgr-project-13.jpg', alt: 'White fascia, soffit and downpipe installation' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#E91E2B] block mb-2 font-medium uppercase tracking-wider">
            PGR Services · Dublin
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#202020]">
            Recent Roofing & Guttering Projects
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F5F7F5] overflow-hidden border border-[#E2E5E2] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F5F7F5] overflow-hidden border border-[#E2E5E2] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
