/**
 * Shared single-RAF loop registry.
 *
 * Problem it solves:
 *   The site's scroll system drives a horizontal track via its own
 *   requestAnimationFrame loop. When other components (background colour
 *   transitions, text-reveal visibility checks) register their own GSAP
 *   ticker callbacks, the browser ends up with two competing animation
 *   timers — RAF and GSAP ticker — that fire at different micro-positions
 *   within the same frame. This forces multiple style-write / layout-read
 *   cycles per frame, causing the visible jitter on scroll.
 *
 * Solution:
 *   All per-frame work (transform writes, colour interpolation, visibility
 *   checks) registers here. One single requestAnimationFrame loop drives
 *   every callback in one sequential pass per frame — no competing timers.
 */

type FrameCallback = () => void;

const callbacks = new Set<FrameCallback>();
let rafId: number | null = null;

function tick(): void {
  for (const cb of callbacks) {
    cb();
  }
  // Keep ticking as long as there are registered callbacks
  rafId = callbacks.size > 0 ? requestAnimationFrame(tick) : null;
}

/**
 * Register a callback to run once per animation frame.
 * Calling with the same function reference is safe — Set deduplicates.
 */
export function addFrameCallback(cb: FrameCallback): void {
  callbacks.add(cb);
  if (rafId === null && typeof window !== 'undefined') {
    rafId = requestAnimationFrame(tick);
  }
}

/**
 * Unregister a frame callback. The RAF loop stops automatically
 * when no callbacks remain, freeing the frame budget.
 */
export function removeFrameCallback(cb: FrameCallback): void {
  callbacks.delete(cb);
}

