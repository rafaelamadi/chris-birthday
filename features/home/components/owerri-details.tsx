'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { MaskedTextReveal } from '@/shared/components/ui';
import { addFrameCallback, removeFrameCallback } from '@/shared/utils/raf-registry';

interface OwerriDetailsProps {
  // Year 1 (Spread 1) Props
  year?: string;
  season?: string;
  title?: string;
  location?: string;
  paragraphs?: string[];
  imageUrl?: string;
  imageAlt?: string;

  // Year 5 (Spread 2) Props
  year5Heading?: string;
  year5Subtitle?: string;
  mealPlanTitle?: string;
  mealPlanText?: string;
  cleanCodeTitle?: string;
  cleanCodeText?: string;
  year5ImageUrl?: string;
  year5ImageAlt?: string;

  // Harzard (Spread 3) Props
  hazardHeading?: string;
  hazardParagraphs?: string[];
  hazardImageUrl?: string;
  hazardImageAlt?: string;

  // Paths Diverge (Spread 4) Props
  pathsHeading?: string;
  pathsText?: string;
  pathsImageUrl?: string;
  pathsImageAlt?: string;
}

export function OwerriDetails({
  // Spread 1 defaults
  year = 'SEPT 2013',
  title = 'Roommates by chance',
  location = 'Year 1 · FUTO, Owerri, Nigeria',
  paragraphs = [
    'I was randomly paired with Chris as a roommate in first year, and we quickly found we saw the world the same way. We were hooked on the Nigerian and diaspora startup scene (the early Paystack days, you remember the energy), and every semester break meant startup events in Lagos, together.',
    'He found his footing in software engineering. I found mine in marketing. Twelve years on, it\'s still a "Count on Me" kind of friendship.',
  ],
  imageUrl = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  imageAlt = 'Two college roommates and close friends smiling together',

  // Spread 2 defaults
  year5Heading = 'YEAR 5',
  year5Subtitle = 'FUTO · Final Lap',
  mealPlanTitle = 'The half-semester meal plan',
  mealPlanText = 'Final year hit me hard, and feeding became a struggle. Chris kept helping me out. For half a semester, he literally fed me, until things eased up. I\'ll be forever grateful. That\'s when we went from acquaintances to real friends.',
  cleanCodeTitle = "Of course he's Clean Code",
  cleanCodeText = 'By year five, Chris had upgraded to a better laptop and was making real money from code. He was working for a company called Transhumanism, and he helped build STACC\'s election system. For a student, that was serious work. Somewhere in all of it, he also got close to his crush. (Another story for another day.). And so the nickname Clean Code was born. And why wouldn\'t I call him that? Chris was balling.',
  year5ImageUrl = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop',
  year5ImageAlt = 'Late-night programming and laptop setup on university desk',

  // Spread 3 defaults
  hazardHeading = 'HARZARD',
  hazardParagraphs = [
    'Not every story was about code. One day, Chris and I went to the Owerri market to buy him shoes. On the way to the bus park, some boys said they could fix a pin on the shoe. We agreed, and that\'s how we met Harzard, who almost robbed us.',
    'We got away. Egusi soup and a lot of thanksgiving followed. And then, almost before we knew it, graduation came.',
  ],
  hazardImageUrl = '/chris-pictures/harzard-street.jpg',
  hazardImageAlt = 'Owerri street road near the market where the Harzard encounter happened',

  // Spread 4 defaults
  pathsHeading = 'PATHS DIVERGE',
  pathsText = 'Graduation came, and our paths diverged. Some of us headed to Abuja, others went their own ways, and Chris went back to Lagos. But this is not the end of the story.',
  pathsImageUrl = '/chris-pictures/graduation-paths-diverge.jpg',
  pathsImageAlt = 'Chris and university friends at graduation',
}: OwerriDetailsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hazardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const hazard = hazardRef.current;
    if (!section || !hazard) return;

    const paper = '#faf9f6';
    const black = '#000000';

    gsap.set(section, { backgroundColor: paper });

    const updateColor = () => {
      if (!section || !hazard) return;
      const hRect = hazard.getBoundingClientRect();
      const vw = window.innerWidth || 1;

      // 1. Offscreen to the right (Year 1 & Year 5 active)
      if (hRect.left >= vw) {
        gsap.set(section, { backgroundColor: paper });
        return;
      }

      // 2. Offscreen to the left (Paths Diverge active)
      if (hRect.right <= 0) {
        gsap.set(section, { backgroundColor: paper });
        return;
      }

      // 3. Entering from the right (Year 5 -> Harzard transition)
      if (hRect.left > vw * 0.25) {
        const enterProgress = (vw - hRect.left) / (vw * 0.75);
        const clamped = Math.max(0, Math.min(1, enterProgress));
        const color = gsap.utils.interpolate(paper, black, clamped);
        gsap.set(section, { backgroundColor: color });
        return;
      }

      // 4. Fully in view (Harzard reading spread)
      if (hRect.right >= vw * 0.75) {
        gsap.set(section, { backgroundColor: black });
        return;
      }

      // 5. Exiting to the left (Harzard -> Paths Diverge transition)
      const exitProgress = (vw * 0.75 - hRect.right) / (vw * 0.75);
      const clamped = Math.max(0, Math.min(1, exitProgress));
      const color = gsap.utils.interpolate(black, paper, clamped);
      gsap.set(section, { backgroundColor: color });
    };

    // Initial check and frame callback attachment (shared RAF — no competing timer)
    updateColor();
    addFrameCallback(updateColor);

    return () => {
      removeFrameCallback(updateColor);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{ colorScheme: 'light', backgroundColor: '#faf9f6' }}
      className="relative h-screen min-h-[720px] shrink-0 text-[#151515] select-none overflow-hidden flex flex-row items-stretch will-change-[background-color]"
    >
      {/* ========================================================
          PART 1: YEAR 1 · ROOMMATES BY CHANCE
         ======================================================== */}
      <div className="shrink-0 h-full relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-[120px] items-stretch pl-8 md:pl-16 lg:pl-24 py-10 md:py-14">
        {/* Left Column: Big Year & Milestone Headline (Top-aligned to match Year 5) */}
        <div className="shrink-0 w-full lg:w-[380px] xl:w-[420px] flex flex-col justify-start self-start">
          <MaskedTextReveal
            lines={[year]}
            as="h1"
            className="font-heading text-6xl md:text-7xl lg:text-[110px] xl:text-[120px] font-bold leading-none tracking-tight text-[#151515] uppercase"
            delay={0.15}
          />

          <div className="mt-6 md:mt-8">
            <h2 className="font-special italic text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#151515] leading-tight">
              {title}
            </h2>
            <p className="font-body text-base md:text-lg text-black/70 mt-2 font-medium">
              {location}
            </p>
          </div>
        </div>

        {/* Right Column: Photo & Corresponding Narrative Below (Vertically centered) */}
        <div className="w-[360px] md:w-[420px] lg:w-[480px] shrink-0 flex flex-col justify-start self-center">
          {/* Photograph Container */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              priority
              unoptimized
              sizes="480px"
              className="object-cover contrast-105"
            />
          </div>

          {/* Narrative Story Subtext directly below picture */}
          <div className="mt-6 space-y-4 font-body text-[16px] leading-[1.65] text-[#333333] font-normal">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#333333]">{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          PART 2: YEAR 5 · DUAL-AXIS PAUSE EDITORIAL SPREAD
         ======================================================== */}
      <div className="shrink-0 h-full w-[1180px] lg:w-[1380px] xl:w-[1500px] flex flex-col justify-between ml-12 lg:ml-[280px] pr-8 md:pr-16 lg:pr-24 py-10 md:py-14">
        {/* TOP ANCHOR: 4-Column Editorial Header Grid */}
        <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Column 1: Monumental Milestone Heading */}
          <div className="flex flex-col justify-start">
            <h2 className="font-heading text-6xl md:text-7xl lg:text-[100px] xl:text-[110px] font-bold leading-none tracking-tight text-[#151515] uppercase whitespace-nowrap">
              {year5Heading}
            </h2>
            <p className="font-body text-xs md:text-sm font-semibold tracking-wider text-black/50 uppercase mt-3">
              {year5Subtitle}
            </p>
          </div>

          {/* Column 2: Intentional Horizontal Pause (Editorial Breathing Room) */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Column 3: Story 1 — The half-semester meal plan */}
          <div className="flex flex-col space-y-3 max-w-[420px]">
            <h3 className="font-special italic text-2xl md:text-3xl lg:text-[32px] text-[#151515] leading-snug">
              {mealPlanTitle}
            </h3>
            <p className="font-body text-[16px] leading-[1.65] text-[#333333] font-normal">
              {mealPlanText}
            </p>
          </div>

          {/* Column 4: Story 2 — Of course he's Clean Code */}
          <div className="flex flex-col space-y-3 max-w-[420px]">
            <h3 className="font-special italic text-2xl md:text-3xl lg:text-[32px] text-[#151515] leading-snug">
              {cleanCodeTitle}
            </h3>
            <p className="font-body text-[16px] leading-[1.65] text-[#333333] font-normal">
              {cleanCodeText}
            </p>
          </div>
        </div>

        {/* INTENTIONAL VERTICAL PAUSE: The open space naturally created by justify-between */}

        {/* BOTTOM ANCHOR: Wide Panoramic Photograph Banner across all columns */}
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[390px] xl:h-[430px] max-h-[46vh] overflow-hidden bg-neutral-200 shrink-0">
          <Image
            src={year5ImageUrl}
            alt={year5ImageAlt}
            fill
            priority
            unoptimized
            sizes="1500px"
            className="object-cover contrast-105"
          />
        </div>
      </div>

      {/* ========================================================
          PART 3: THE HARZARD INCIDENT · INVERTED EDITORIAL SPREAD
         ======================================================== */}
      <div 
        ref={hazardRef}
        style={{ colorScheme: 'dark' }}
        className="shrink-0 h-full flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-stretch pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-24 py-10 md:py-14 bg-transparent text-white"
      >
        {/* Left Side: The Framed Photograph (Aligned to top of Year 5 heading) */}
        <div className="w-[320px] md:w-[400px] lg:w-[460px] xl:w-[500px] aspect-[4/5] relative shrink-0 overflow-hidden bg-neutral-900 self-start">
          <Image
            src={hazardImageUrl}
            alt={hazardImageAlt}
            fill
            priority
            unoptimized
            sizes="500px"
            className="object-cover contrast-105"
          />
        </div>

        {/* Right Side: Inverted Text Stack (Aligned to bottom of Year 5 image) */}
        <div className="w-fit flex flex-col justify-end self-end">
          {/* Subtexts on Top (2-Column Grid constrained to 500px) */}
          <div className="w-full max-w-[500px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-body text-[16px] leading-[1.65] text-neutral-300 font-normal mb-8 lg:mb-12">
            {hazardParagraphs.map((para, idx) => (
              <p key={idx} className="text-neutral-300">{para}</p>
            ))}
          </div>

          {/* Colossal Heading Underneath (Natural unconstrained width) */}
          <div>
            <h2 className="font-heading text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold leading-none tracking-tight text-white uppercase whitespace-nowrap">
              {hazardHeading}
            </h2>
          </div>
        </div>
      </div>

      {/* ========================================================
          PART 4: PATHS DIVERGE · 50/50 SPLIT-SCREEN FINALE
         ======================================================== */}
      <div className="shrink-0 h-full w-screen flex flex-col lg:flex-row items-stretch bg-transparent">
        {/* Left Half: Warm Paper Editorial Block (Subtext at Top, Heading at Bottom) */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-12 lg:pr-16 py-10 md:py-14 bg-transparent">
          {/* Top: Narrative Subtext */}
          <div className="max-w-[480px]">
            <p className="font-body text-[16px] leading-[1.65] text-[#333333] font-normal">
              {pathsText}
            </p>
          </div>

          {/* Bottom: Colossal Heading (Matching Harzard size, stacked on 2 lines) */}
          <div className="mt-8">
            <h2 className="font-heading text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold leading-[0.9] tracking-tight text-[#151515] uppercase">
              {pathsHeading}
            </h2>
          </div>
        </div>

        {/* Right Half: Full-Height Full-Bleed Photograph */}
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden bg-neutral-200 shrink-0">
          <Image
            src={pathsImageUrl}
            alt={pathsImageAlt}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-left contrast-105"
          />
        </div>
      </div>
    </section>
  );
}


