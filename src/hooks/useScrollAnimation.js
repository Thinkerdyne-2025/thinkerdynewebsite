import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fade-in and slide-up animation when element enters viewport.
 * @param {Object} options
 * @param {React.RefObject} options.ref - Ref to the element to animate
 * @param {number} options.delay - Delay in seconds
 * @param {number} options.duration - Animation duration
 * @param {string} options.start - ScrollTrigger start (default 'top 85%')
 */
export function useFadeInUp({ ref, delay = 0, duration = 0.6, start = 'top 85%' } = {}) {
  useEffect(() => {
    if (!ref?.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [ref, delay, duration, start]);
}

/**
 * Stagger children animation when container enters viewport.
 * @param {Object} options
 * @param {React.RefObject} options.containerRef - Ref to container
 * @param {string} options.selector - Child selector (e.g. '.card')
 * @param {string} options.start - ScrollTrigger start
 */
export function useStaggerChildren({
  containerRef,
  selector,
  start = 'top 85%',
  stagger = 0.12,
  duration = 0.5,
} = {}) {
  useEffect(() => {
    if (!containerRef?.current || prefersReducedMotion()) return;

    const children = containerRef.current.querySelectorAll(selector);
    if (!children.length) return;

    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [containerRef, selector, start, stagger, duration]);
}
