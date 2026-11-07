'use client';

import React from 'react';
import Image from 'next/image';
import { MaskedTextReveal } from '@/shared/components/ui';

interface PortraitItem {
  role: string;
  imageUrl: string;
  caption?: string;
}

interface AbujaDetailsProps {
  headingLine1?: string;
  headingLine2?: string;
  story?: string;
  portraits?: PortraitItem[];
}

export function AbujaDetails({
  headingLine1 = 'WEARING',
  headingLine2 = 'EVERY HAT',
  story = 'Abuja taught you to love and to laugh. It also handed you more to carry: big brother, the eldest, boyfriend, friend, and more. You\'ve known heartbreak. Love? Only you can answer that one. Through it all, you\'ve grown. Just ask his mum.',
  portraits = [
    {
      role: 'The Eldest',
      imageUrl: '/chris-pictures/eldest-son.jpg',
    },
    {
      role: 'The Friend',
      imageUrl: '/chris-pictures/the-friend.jpg',
    },
    {
      role: 'Growing Up',
      imageUrl: '/chris-pictures/growing-up.jpg',
    },
  ],
}: AbujaDetailsProps) {
  return (
    <section 
      style={{ colorScheme: 'light' }}
      className="relative w-screen h-screen min-h-[720px] shrink-0 bg-transparent text-[#151515] select-none overflow-hidden flex flex-col lg:flex-row items-stretch px-8 md:px-16 lg:px-24 py-10 md:py-14"
    >
      {/* ========================================================
          LEFT COLUMN (~40%): TITLE, ARROW & NARRATIVE STORY
         ======================================================== */}
      <div className="w-full lg:w-[380px] xl:w-[440px] shrink-0 h-full flex flex-col justify-between pr-4 lg:pr-10">
        {/* Top: 2-Line Heading with Sweeping Curved Arrow */}
        <div>
          <div className="relative inline-block">
            <MaskedTextReveal
              lines={[headingLine1, headingLine2]}
              as="h2"
              className="font-heading text-6xl md:text-7xl lg:text-[80px] xl:text-[92px] font-bold leading-[0.9] tracking-tight text-[#151515] uppercase"
              delay={0.1}
              stagger={0.25}
            />

            {/* Hand-drawn style sweeping curved SVG arrow pointing towards portraits */}
            <div 
              className="hidden lg:block absolute -right-28 xl:-right-32 top-1 w-28 xl:w-32 h-20 pointer-events-none text-[#151515]/75"
              aria-hidden="true"
            >
              <svg 
                viewBox="0 0 110 70" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Arc sweeping upward and over to the right */}
                <path 
                  d="M 6 46 C 26 10, 68 8, 98 38" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  fill="none"
                />
                {/* Sharp arrowhead pointing toward the portraits */}
                <path 
                  d="M 82 32 L 99 40 L 98 22" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom: The Narrative Story Paragraph */}
        <div className="mt-8 lg:mt-0 max-w-[420px]">
          <p className="font-body text-[16px] leading-[1.65] text-[#333333] font-normal">
            {story}
          </p>
        </div>
      </div>

      {/* ========================================================
          RIGHT COLUMN (~60%): THE 3-PORTRAIT GALLERY ("THE HATS")
         ======================================================== */}
      <div className="flex-1 h-full flex items-center mt-10 lg:mt-0 lg:ml-12 xl:ml-16 overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {portraits.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Portrait Photograph */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                <Image
                  src={item.imageUrl}
                  alt={item.role}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                  className="object-cover contrast-105 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Role Title */}
              <div className="mt-4">
                <span className="font-heading text-base md:text-lg tracking-wide uppercase text-[#151515]">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
