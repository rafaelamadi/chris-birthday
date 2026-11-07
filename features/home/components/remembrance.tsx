'use client';

import React from 'react';
import Image from 'next/image';

interface RemembranceProps {
  title?: string;
  paragraphs?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export function Remembrance({
  title = 'A quiet stop',
  paragraphs = [
    'Life throws curves when we least expect them, and sometimes we end up somewhere dark. But God knows best, and He has guided you through every step.',
    'Your dad and your sister live on in you, in everything you do. I know they\'re smiling down on you, proud of you.',
  ],
  imageUrl = 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2400&auto=format&fit=crop',
  imageAlt = 'Cluster of stars in the night sky',
}: RemembranceProps = {}) {
  return (
    <section 
      style={{ colorScheme: 'dark' }}
      className="relative w-screen h-screen min-h-[720px] shrink-0 bg-black text-white select-none overflow-hidden flex items-center justify-center px-6 md:px-12"
    >
      {/* 1. Starry Night Sky Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover contrast-110"
        />
        {/* Atmospheric dark overlays so the stars glow naturally while text stays crisp */}
        <div 
          className="absolute inset-0 bg-black/45 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_90%)] pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* 2. Centered Sacred Narrative */}
      <div className="relative z-20 w-full max-w-[640px] md:max-w-[700px] text-center flex flex-col items-center">
        {/* Poetic Heading in Instrument Serif Italic */}
        <h2 className="font-special italic text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-8 md:mb-10 leading-tight">
          {title}
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 font-body text-base md:text-lg lg:text-[18px] leading-[1.75] text-white/90 font-normal">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

