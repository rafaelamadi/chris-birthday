'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { addFrameCallback, removeFrameCallback } from '@/shared/utils/raf-registry';

// ---------------------------------------------------------------------------
// Module-level shared visibility registry.
// All MaskedTextReveal instances register into this map. The single
// addFrameCallback drives one batched pass per frame — no per-instance RAF
// or GSAP ticker calls, so there is exactly one animation timer site-wide.
// ---------------------------------------------------------------------------
type RevealCallback = () => void;
const registry = new Map<HTMLElement, RevealCallback>();
let watching = false;

function batchedCheck() {
  if (registry.size === 0) return;
  const vw = window.innerWidth || 1;

  // Collect triggers in a read-only pass first (avoids layout thrash)
  const toFire: RevealCallback[] = [];
  for (const [el, cb] of registry) {
    const rect = el.getBoundingClientRect();
    if (rect.left < vw * 0.95 && rect.right > 0) {
      toFire.push(cb);
      registry.delete(el);
    }
  }

  // Stop watching if nothing left
  if (registry.size === 0 && watching) {
    removeFrameCallback(batchedCheck);
    watching = false;
  }

  // Defer setState to after the current frame's style writes have committed
  if (toFire.length > 0) {
    Promise.resolve().then(() => {
      toFire.forEach((cb) => cb());
    });
  }
}

function registerElement(el: HTMLElement, cb: RevealCallback) {
  registry.set(el, cb);
  if (!watching) {
    addFrameCallback(batchedCheck);
    watching = true;
  }
}

function unregisterElement(el: HTMLElement) {
  registry.delete(el);
  if (registry.size === 0 && watching) {
    removeFrameCallback(batchedCheck);
    watching = false;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
interface MaskedTextRevealProps {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  className?: string;
  style?: React.CSSProperties;
  lineClassName?: string | ((index: number) => string);
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: [number, number, number, number];
  /** Fraction of viewport width at which to trigger (default 0.95) */
  threshold?: number;
}

export function MaskedTextReveal({
  lines,
  as: Component = 'h2',
  className = '',
  style,
  lineClassName = '',
  duration = 1.35,
  delay = 0.1,
  stagger = 0.25,
  ease = [0.22, 1, 0.36, 1],
  threshold = 0.95,
}: MaskedTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || inView) return;

    // Check immediately (handles elements already in view on mount)
    const vw = window.innerWidth || 1;
    const rect = el.getBoundingClientRect();
    if (rect.left < vw * threshold && rect.right > 0) {
      setInView(true);
      return;
    }

    // Register into the shared batched frame check
    registerElement(el, () => setInView(true));
    return () => {
      unregisterElement(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      style={style}
      className={`flex flex-col items-start ${className}`}
    >
      {lines.map((line, idx) => {
        const extraLineClass =
          typeof lineClassName === 'function' ? lineClassName(idx) : lineClassName;

        return (
          <span
            key={idx}
            className="overflow-hidden inline-block pb-[0.14em] -mb-[0.14em]"
          >
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration,
                delay: delay + idx * stagger,
                ease,
              }}
              className={`inline-block ${extraLineClass}`}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
