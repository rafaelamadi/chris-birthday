'use client';

import React from 'react';
import Image from 'next/image';

export function WellWishes() {
  return (
    <section 
      style={{ colorScheme: 'light' }}
      className="relative w-screen min-w-[1280px] h-screen min-h-[720px] shrink-0 bg-transparent text-neutral-900 select-none overflow-hidden flex flex-row items-stretch justify-between px-8 md:px-14 lg:px-20 py-8 md:py-12"
    >
      {/* ========================================================
          LEFT FLANK: CHUKA'S TRIBUTE (THE BROTHER)
          Pure unboxed typography directly on paper background.
          Vertically centered in the section.
         ======================================================== */}
      <div className="w-[340px] md:w-[380px] lg:w-[420px] shrink-0 flex flex-col justify-center self-stretch z-20">
        <div className="flex flex-col gap-3.5">
          <h3 className="font-special italic text-5xl md:text-6xl lg:text-[80px] leading-[0.92] text-neutral-950 tracking-tight max-w-[320px]">
            Chuka
            <br />
            Ilozulu
          </h3>
          <p className="text-[16px] leading-[1.65] text-neutral-800 font-normal">
            &ldquo;Chris, happy birthday. When you showed up for Mum on her birthday last year, I was reminded of the kind of man you are: the kind who shows up. You carry this family with so much love, and I&apos;m proud of you. May this new year bring you everything you&apos;ve been working towards, and may God keep you and guide you always.&rdquo;
          </p>
        </div>
      </div>

      {/* ========================================================
          CENTER: DOMINATING BLOWN-UP CUTOUT OF CHRIS
          Waist-up portrait crop matching reference cd81aba7.jpg:
          Anchored to bottom baseline, upper body occupying 86vh,
          leaving ~14vh headroom above hair.
         ======================================================== */}
      <div className="relative w-[440px] md:w-[500px] lg:w-[560px] xl:w-[620px] h-full shrink-0 flex items-end justify-center overflow-visible pointer-events-none z-10">
        {/* Subtle Colossal Ghost Watermark behind Chris */}
        <span className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[160px] md:text-[220px] lg:text-[280px] xl:text-[320px] font-bold text-black/[0.035] tracking-tighter uppercase select-none pointer-events-none whitespace-nowrap z-0">
          THIRTY
        </span>

        {/* 
            Blown-up Waist-up Cutout:
            Scaled to 86vh anchored directly to the bottom baseline.
        */}
        <div className="relative w-full h-[86vh] flex items-end justify-center z-10">
          <Image
            src="/chris-pictures/chris-cutout.png"
            alt="Ilozulu Chris"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
            sizes="(max-width: 1024px) 500px, 640px"
          />
        </div>
      </div>

      {/* ========================================================
          RIGHT FLANK: COLLINS & RAPHAEL'S TRIBUTES
          Pure unboxed typography directly on paper background.
         ======================================================== */}
      <div className="w-[380px] md:w-[420px] lg:w-[460px] shrink-0 flex flex-col justify-between self-stretch z-20 py-2 md:py-4 gap-6">
        {/* Collins Osuji Tribute */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-special italic text-4xl md:text-5xl lg:text-[80px] leading-[0.92] text-neutral-950 tracking-tight max-w-[320px]">
            Collins
            <br />
            Osuji
          </h3>
          <p className="text-[16px] leading-[1.65] text-neutral-800 font-normal">
            &ldquo;Ever heard the song &lsquo;Count on Me&rsquo;? That&apos;s what friendship with you means to me. Friendship isn&apos;t just laughing together once in a while. It&apos;s having someone who has your back, someone you can trust and rely on. May this new chapter bring you greater opportunities, happiness, and good health. Cheers to the next twelve years and more!&rdquo;
          </p>
        </div>

        {/* Raphael Tribute */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-special italic text-4xl md:text-5xl lg:text-[80px] leading-[0.92] text-neutral-950 tracking-tight max-w-[340px]">
            Raphael
            <br />
            Amadi
          </h3>
          <div className="flex flex-col gap-2 text-[16px] leading-[1.65] text-neutral-800 font-normal">
            <p className="text-neutral-800">
              &ldquo;Thank you for always pushing me to grow. You&apos;ve always expected more from me than I expected from myself, and you&apos;ve never let me stay comfortable. I never took your Upwork advice, but I heard you, and I hear you on everything else too. Some of the things you&apos;ve done for me, I still can&apos;t explain, and I&apos;ve stopped trying. That&apos;s just who you are.
            </p>
            <p className="text-neutral-800">
              May this new year be a blessing to you, and may the good Lord continue to guide and protect you.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

