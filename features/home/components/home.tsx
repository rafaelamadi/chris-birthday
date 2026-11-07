'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { addFrameCallback, removeFrameCallback } from '@/shared/utils/raf-registry';
import { IntroductionSpread } from './introduction-spread';
import { LagosChapter } from './lagos-chapter';
import { OwerriIntroduction } from './owerri-introduction';
import { OwerriDetails } from './owerri-details';
import { Remembrance } from './remembrance';
import { AbujaIntroduction } from './abuja-introduction';
import { AbujaDetails } from './abuja-details';
import { MumSurprise } from './mum-surprise';
import { WellWishes } from './well-wishes';
import { Ending } from './ending';
import { SmoothBackgroundSequence } from '@/shared/components/ui';

export function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const scrollProgressRef = useRef(0);

  const [trackWidth, setTrackWidth] = useState(0);

  // Measure track width and setup scroll bounds
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Give time for fonts and imagery to settle
    const timer = setTimeout(updateDimensions, 400);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // Smooth scroll sync: maps window scroll to horizontal translation.
  // Registered into the shared RAF registry so it runs in the same frame
  // as all other per-frame callbacks — no competing timer jitter.
  useEffect(() => {
    let targetX = 0;
    let currentX = 0;
    let lastProgressSync = 0;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const totalScrollableDistance = container.offsetHeight - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      scrollProgressRef.current = progress;

      const maxTrackDistance = trackRef.current.scrollWidth - window.innerWidth;
      targetX = progress * Math.max(0, maxTrackDistance);
    };

    // Frame callback — runs inside the shared RAF loop alongside all other
    // per-frame work so there is exactly one animation timer site-wide.
    const loop = () => {
      currentX += (targetX - currentX) * 0.12;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${currentX}px, 0, 0)`;
      }

      // Drive the progress bar directly via DOM — zero React re-renders.
      const now = performance.now();
      if (now - lastProgressSync > 50 && progressBarRef.current) {
        lastProgressSync = now;
        progressBarRef.current.style.width = `${Math.round(scrollProgressRef.current * 100)}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    addFrameCallback(loop);

    // Enable wheel navigation
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        window.scrollBy({ top: e.deltaY, behavior: 'auto' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    // Keyboard navigation (ArrowLeft / ArrowRight)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        window.scrollBy({ top: 380, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        window.scrollBy({ top: -380, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      removeFrameCallback(loop);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trackWidth]);

  // Virtual container height calculated so total vertical scroll equals horizontal travel
  const scrollDistance = Math.max(0, trackWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200));
  const containerHeight = trackWidth > 0 ? `calc(100vh + ${scrollDistance}px)` : '350vh';

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white"
      style={{ height: containerHeight }}
    >
      {/* Fixed Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Horizontal Panoramic Track (Translates leftward as viewer scrolls) */}
        <div
          ref={trackRef}
          className="flex flex-row h-full w-max will-change-transform"
        >
          {/* ========================================================
              PANEL 0: OPENING HERO (CHRIS ILOZULU)
             ======================================================== */}
          <section className="relative w-screen h-screen min-h-[680px] shrink-0 bg-black flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-6 md:pt-8 pb-10 md:pb-14 select-none overflow-hidden">
            {/* Top Bar: Local to Hero section only (Extreme Left and Extreme Right) */}
            <div className="relative z-30 flex items-center justify-between w-full pointer-events-auto">
              <div>
                <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-white/90 font-medium">
                  Thirty Years
                </span>
              </div>
              <div>
                <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-white/90 font-medium">
                  Three cities.
                </span>
              </div>
            </div>

            {/* Subtle Vignette */}
            <div
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_45%,transparent_20%,rgba(0,0,0,0.85)_80%)]"
              aria-hidden="true"
            />

            {/* Colossal Name: 400px with line-height adjusted to eliminate overlap */}
            <div className="relative z-20 w-full">
              <h1 className="flex flex-col leading-[0.95] tracking-[-0.03em] uppercase font-heading text-white">
                <span className="overflow-hidden inline-block pb-[0.12em] -mb-[0.12em]">
                  <motion.span
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[clamp(120px,26vw,400px)] lg:text-[400px] font-normal block drop-shadow-2xl"
                  >
                    CHRIS
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block pb-[0.12em] -mb-[0.12em]">
                  <motion.span
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[clamp(120px,26vw,400px)] lg:text-[400px] font-normal block drop-shadow-2xl text-white/95"
                  >
                    ILOZULU
                  </motion.span>
                </span>
              </h1>
            </div>
          </section>

          {/* ========================================================
              PANEL 1: INTRODUCTION SPREAD (STOP 01: A BOY IS BORN)
             ======================================================== */}
          <IntroductionSpread />

          {/* ========================================================
              PANEL 2: CHAPTER 1 — LAGOS (STOPS 02 TO 07)
             ======================================================== */}
          <LagosChapter />

          {/* ========================================================
              PANEL 3: OWERRI INTRODUCTION (STOP 08)
             ======================================================== */}
          <OwerriIntroduction />

          {/* ========================================================
              PANEL 4: OWERRI DETAILS
             ======================================================== */}
          <OwerriDetails />

          {/* ========================================================
              PANEL 5: A QUIET STOP (REMEMBRANCE)
             ======================================================== */}
          <Remembrance />

          {/* ========================================================
              PANEL 6: ABUJA INTRODUCTION (STOP THREE: ABUJA)
             ======================================================== */}
          <AbujaIntroduction />

          {/* ========================================================
              UNIFIED BACKGROUND TRANSITION SEQUENCE:
              AbujaDetails (#faf9f6) → MumSurprise (#000000) →
              WellWishes (#faf9f6) → Ending (#000000)
             ======================================================== */}
          <SmoothBackgroundSequence
            colors={['#faf9f6', '#000000', '#faf9f6', '#000000']}
          >
            {/* PANEL 7: ABUJA DETAILS (WEARING EVERY HAT) */}
            <AbujaDetails />

            {/* PANEL 8: MUM'S BIRTHDAY SURPRISE (MAY 4, 2025) */}
            <MumSurprise />

            {/* PANEL 9: YOUR PEOPLE / WELL-WISHES (NOV 08, 2026) */}
            <WellWishes />

            {/* PANEL 10: ENDING (HAPPY BIRTHDAY CHRISTOPHER) */}
            <Ending />
          </SmoothBackgroundSequence>
        </div>

        {/* Minimalist Bottom Progress Line — driven directly via DOM ref, no React state */}
        <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-white/10 z-50">
          <div
            ref={progressBarRef}
            className="h-full bg-white"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}
