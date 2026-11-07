'use client';

import React from 'react';
import Image from 'next/image';
import { MaskedTextReveal } from '@/shared/components/ui';

export function IntroductionSpread() {
  return (
    <section className="relative w-screen h-screen min-h-[680px] shrink-0 bg-black flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24 select-none overflow-hidden">
      {/* 1. Full Picture Background: Parents holding their newborn baby */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chris-pictures/lagos-intro.jpg"
          alt="Lagos cathedral, the city where Chris was born and raised"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover grayscale contrast-105"
        />
        {/* Soft, balanced overlay so parents and baby are clearly visible */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* 2. Foreground Editorial Content */}
      <div className="relative z-20 w-full">
        {/* Date on top: Anton bold, not big */}
        <span className="font-heading text-sm md:text-base tracking-[0.25em] uppercase text-white/90 mb-2 block font-normal">
          NOV. 8, 1996
        </span>

        {/* Title Container: Controlled width causing 'A Boy Is Born' to wrap to line 2 */}
        <div className="max-w-[950px] mb-6">
          <MaskedTextReveal
            lines={['A Boy', 'Is Born']}
            as="h2"
            style={{ lineHeight: 0.8 }}
            className="font-special italic text-6xl md:text-[130px] lg:text-[240px] font-normal text-white tracking-tight normal-case"
            delay={0.15}
            stagger={0.25}
          />
        </div>

        {/* Subtext Container: Independent controlled width for paragraph wrapping */}
        <div className="w-full max-w-[720px] font-body text-base md:text-lg text-white/90 leading-relaxed">
          <p>
            On November 8, 1996, Mr and Mrs Ilozulu welcomed their first son, Ilozulu Christopher Chiduso. Known to family and friends as Chris, and to some others as .................. Our journey starts here.
          </p>
        </div>
      </div>
    </section>
  );
}
