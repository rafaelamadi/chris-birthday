'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { addFrameCallback, removeFrameCallback } from '@/shared/utils/raf-registry';

/**
 * Resolves a CSS value to an actual colour string that GSAP can interpolate.
 * If the value is a var(--token) reference, reads the resolved value from
 * getComputedStyle so GSAP receives a real hex/rgb value, not a variable name.
 */
function resolveColor(value: string): string {
  if (typeof window === 'undefined') return value;
  const varMatch = value.match(/^var\((--[^)]+)\)/);
  if (varMatch) {
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(varMatch[1])
        .trim() || value
    );
  }
  return value;
}

interface SmoothBackgroundSequenceProps {
  children: ReactNode;
  /** Array of colors for each section in sequence (e.g. ['#faf9f6', '#000000', '#faf9f6', '#000000']) */
  colors: string[];
  className?: string;
}

export function SmoothBackgroundSequence({
  children,
  colors,
  className = '',
}: SmoothBackgroundSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || colors.length < 2) return;

    const resolvedColors = colors.map(resolveColor);
    const totalSegments = resolvedColors.length - 1;

    // Immediately set starting color
    gsap.set(container, { backgroundColor: resolvedColors[0] });

    const updateColor = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth || 1;
      
      // Calculate continuous progress across the child sections
      const currentOffset = -rect.left;
      const rawProgress = Math.max(0, Math.min(totalSegments, currentOffset / viewportWidth));

      const segmentIndex = Math.min(Math.floor(rawProgress), totalSegments - 1);
      const segmentProgress = Math.max(0, Math.min(1, rawProgress - segmentIndex));

      const fromColor = resolvedColors[segmentIndex];
      const toColor = resolvedColors[segmentIndex + 1];

      const currentColor = gsap.utils.interpolate(fromColor, toColor, segmentProgress);
      gsap.set(container, { backgroundColor: currentColor });
    };

    // Drive via shared RAF registry — same frame as the scroll transform write
    addFrameCallback(updateColor);

    return () => {
      removeFrameCallback(updateColor);
    };
  }, [colors]);

  return (
    <div
      ref={containerRef}
      className={`relative shrink-0 flex flex-row h-full will-change-[background-color] ${className}`}
    >
      {/* 
        Unified Transparent Shell:
        Forces all child sections to sit on a transparent layer so the
        smoothly animated background shows through clearly without seams.
      */}
      <div className="w-full h-full bg-transparent flex flex-row shrink-0">
        {children}
      </div>
    </div>
  );
}

