'use client';

import React from 'react';
import Image from 'next/image';

interface MumSurpriseProps {
  headingLine1?: string;
  headingLine2?: string;
  subheading?: string;
  story?: string;
  closing?: string;
  images?: string[];
}

export function MumSurprise({
  headingLine1 = 'MAY 04',
  headingLine2 = '2025',
  subheading = "Mum's birthday",
  story = "She had no idea Chris was coming, No call No hint, nothing. He just showed up. And that is the kind of guy he is, he shows up for his people.",
  closing = 'Which brings us to today.',
  images = [
    '/chris-pictures/mum-surprise-1.jpg',
    '/chris-pictures/mum-dinner.jpg',
  ],
}: MumSurpriseProps) {
  return (
    <section 
      style={{ colorScheme: 'dark' }}
      className="relative w-screen min-w-[1200px] h-screen min-h-[720px] shrink-0 bg-transparent text-white select-none overflow-hidden flex flex-row items-stretch justify-between gap-8 md:gap-10 lg:gap-12 px-8 md:px-16 lg:px-24 py-10 md:py-14"
    >
      {/* ========================================================
          COLUMN 1: COLOSSAL DATE HEADING (MATCHING HARZARD SCALE)
         ======================================================== */}
      <div className="shrink-0 flex flex-col justify-start self-start">
        <h1 className="font-heading text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold leading-[0.88] tracking-tight text-white uppercase whitespace-nowrap">
          {headingLine1}
          <br />
          {headingLine2}
        </h1>
      </div>

      {/* ========================================================
          COLUMN 2: IMAGE 1 + QUOTE + NARRATIVE (FULL ~480PX WIDTH)
         ======================================================== */}
      <div className="w-[380px] md:w-[440px] lg:w-[480px] xl:w-[500px] shrink-0 flex flex-col justify-start self-start">
        {/* Image 1: The Hug (Generous Full Size) */}
        <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden group shrink-0">
          <Image
            src={images[0]}
            alt="Mum's Birthday Surprise Moment"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-cover contrast-105 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Group under Image 1 (60px gap from Image 1) */}
        <div className="mt-[60px]">
          {/* Text 1: Mum's birthday in Instrument Serif */}
          <h2 className="font-special italic text-3xl md:text-4xl text-white leading-tight">
            {subheading}
          </h2>

          {/* Text 2: 14px in standard project subtext white/80, maintaining 16px gap */}
          <p className="font-body text-[14px] leading-relaxed text-white/80 font-normal mt-3 md:mt-4">
            {story}
          </p>
        </div>
      </div>

      {/* ========================================================
          COLUMN 3: IMAGE 2 + TRANSITION ("Which brings us to today.")
         ======================================================== */}
      <div className="w-[380px] md:w-[440px] lg:w-[480px] xl:w-[500px] shrink-0 flex flex-col justify-between h-full self-start">
        {/* Image 2: The Family Dinner Table (Generous Full Size) */}
        <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden group shrink-0">
          <Image
            src={images[1]}
            alt="Family Birthday Dinner Celebration"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-cover contrast-105 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* "Which brings us to today." anchored to bottom right with decorative curved arrow */}
        {closing && (
          <div className="mt-auto pt-6 flex items-center gap-4 lg:gap-6">
            <p className="font-special italic text-4xl md:text-5xl lg:text-[72px] leading-[0.95] text-white">
              {closing}
            </p>

            {/* Decorative hand-drawn curved SVG arrow pointing to the next section at a dynamic angle */}
            <div 
              className="w-32 md:w-40 lg:w-48 xl:w-52 h-20 md:h-24 lg:h-28 shrink-0 text-white/80 self-center -rotate-12 origin-left -mb-3"
              aria-hidden="true"
            >
              <svg 
                viewBox="0 0 130 65" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Hand-drawn curved arc sweeping toward right at an angle */}
                <path 
                  d="M 8 46 C 38 52, 76 12, 120 24" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                {/* Arrowhead pointing forward */}
                <path 
                  d="M 96 12 L 122 24 L 104 42" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
