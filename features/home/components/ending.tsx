'use client';

import React from 'react';

export function Ending() {
  return (
    <section 
      style={{ colorScheme: 'dark' }}
      className="relative w-screen min-w-[1200px] h-screen min-h-[720px] shrink-0 bg-transparent text-white select-none overflow-hidden flex flex-col justify-between px-8 md:px-16 lg:px-24 py-10 md:py-14"
    >
      {/* Subtle Ambient Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.035)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Top Bar: Three phrases (One left, one middle, one right) */}
      <div className="relative z-20 grid grid-cols-3 items-center w-full font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-white/60">
        <span className="text-left">
          Thirty years.
        </span>
        <span className="text-center">
          Three cities.
        </span>
        <span className="text-right">
          Countless stories.
        </span>
      </div>

      {/* Centerpiece: Happy Birthday Christopher in both Anton & Instrument Serif */}
      <div className="relative z-20 w-full flex flex-col justify-center my-auto">
        {/* Anton: Monumental Uppercase Headline */}
        <h1 className="font-heading font-bold uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] leading-[0.88] tracking-tight text-white">
          HAPPY BIRTHDAY
        </h1>

        {/* Instrument Serif: Colossal Italic Contrast (matching owerri-introduction.tsx) */}
        <p 
          style={{ lineHeight: 0.85 }}
          className="font-special italic font-normal text-7xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[220px] text-white tracking-tight normal-case mt-2 md:mt-4"
        >
          Christopher.
        </p>
      </div>

      {/* Bottom Spacer to maintain balanced vertical centering */}
      <div className="relative z-20 w-full pointer-events-none" aria-hidden="true" />
    </section>
  );
}

