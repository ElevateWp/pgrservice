import React from 'react';
import { Metadata } from 'next';
import HomeHero from '@/components/sections/home/HomeHero';
import HomeStats from '@/components/sections/home/HomeStats';
import PinnedHorizontalTrack, { HorizontalTrackItem } from '@/components/motion/PinnedHorizontalTrack';
import HomeWhyUs from '@/components/sections/home/HomeWhyUs';
import HomeDentists from '@/components/sections/home/HomeDentists';
import HomeFeaturedTreatments from '@/components/sections/home/HomeFeaturedTreatments';
import HomeBeforeAfter from '@/components/sections/home/HomeBeforeAfter';
import HomeGallery from '@/components/sections/home/HomeGallery';
import HomeFaqs from '@/components/sections/home/HomeFaqs';
import HomeLocation from '@/components/sections/home/HomeLocation';
import HomeFinalCTA from '@/components/sections/home/HomeFinalCTA';
import TextureBackground from '@/components/layout/TextureBackground';
import { SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Professional Guttering & Roofing in Dublin',
  description:
    'PGR Services provides guttering, fascia, soffit and roofing services in Dublin. Call Rafal and the team for a free quotation.',
  pathname: '/',
});

export default function HomePage() {
  const serviceTrackItems: HorizontalTrackItem[] = SERVICES.map((s, idx) => ({
    id: s.slug,
    title: s.name,
    subtitle: s.tagline,
    description: s.shortDescription,
    href: `/${s.slug}/`,
    theme: idx % 2 === 1 ? 'forest' : 'paper',
  }));

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Hero */}
      <HomeHero />

      {/* SECTION 2: Trust / Highlights */}
      <HomeStats />

      {/* SECTION 3: Dental Services (Pinned Horizontal Track - Orchestrated Moment 2) */}
      <PinnedHorizontalTrack
        items={serviceTrackItems}
        title="Guttering & Roofing Services"
      />

      {/* Signature Brand Device 2 of 4: Full-Bleed Section Divider */}
      <div className="relative w-full h-24 md:h-36 bg-paper overflow-hidden">
        <TextureBackground variant="divider" className="opacity-30" />
      </div>

      {/* SECTION 4: Why Choose Our company (Asymmetric & Deliberately Still) */}
      <HomeWhyUs />

      {/* SECTION 5: Meet Our Equipe (Staggered Baseline Grid) */}
      <HomeDentists />

      {/* SECTION 6: Featured Treatments (Curated Outcome Stories) */}
      <HomeFeaturedTreatments />

      {/* SECTION 7: Before & After (Draggable Slider - Orchestrated Moment 3) */}
      <HomeBeforeAfter />

      {/* SECTION 9: company Gallery (Irregular Parallax Grid) */}
      <HomeGallery />

      {/* SECTION 10: Frequently Asked Questions */}
      <HomeFaqs />

      {/* SECTION 11: Área de atendimento & Opening Hours */}
      <HomeLocation />

      {/* SECTION 12: Final quote request Section (The One Centered Moment) */}
      <HomeFinalCTA />
    </div>
  );
}
