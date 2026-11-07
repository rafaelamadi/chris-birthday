'use client';

import React from 'react';
import Image from 'next/image';
import { MaskedTextReveal } from '@/shared/components/ui';

interface OwerriIntroductionProps {
  badge?: string;
  title?: string;
  subtext?: string;
  imageUrl?: string;
}

export function OwerriIntroduction({
  badge = 'FUTO · OWERRI',
  title = 'Where The Cast Grows',
  subtext = 'FUTO, the Federal University of Technology. This is where the cast grows.',
  imageUrl = '/chris-pictures/owerri-intro.jpg',
}: OwerriIntroductionProps = {}) {
  return (
    <section className="relative w-screen h-screen min-h-[680px] shrink-0 bg-black flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24 select-none overflow-hidden">
      {/* 1. Full Picture Background: Campus atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Aerial view of Owerri city, where Chris studied at FUTO"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover grayscale contrast-105"
        />
        {/* Soft, balanced overlay so background is atmospheric and text is crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 2. Foreground Editorial Content */}
      <div className="relative z-20 w-full">
        {/* Badge on top: Anton bold, not big */}
        <span className="font-heading text-sm md:text-base tracking-[0.25em] uppercase text-white/90 mb-2 block font-normal">
          {badge}
        </span>

        {/* Title Container: Instrument Serif italic monumental text */}
        <div className="max-w-[1050px] mb-6">
          <MaskedTextReveal
            lines={['Where The', 'Cast Grows']}
            as="h2"
            style={{ lineHeight: 0.85 }}
            className="font-special italic text-6xl md:text-[130px] lg:text-[220px] font-normal text-white tracking-tight normal-case"
            delay={0.15}
            stagger={0.25}
          />
        </div>

        {/* Subtext Container: Controlled width for paragraph wrapping */}
        <div className="w-full max-w-[720px] font-body text-base md:text-lg text-white/90 leading-relaxed">
          <p>{subtext}</p>
        </div>
      </div>
    </section>
  );
}

