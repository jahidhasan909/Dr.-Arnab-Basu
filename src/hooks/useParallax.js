'use client';

import { useState, useEffect } from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';


export function useParallax(targetRef, options = {}) {
  const {
    offset = [-30, 30],
    scrollOffset = ['start end', 'end start'],
    mobileFactor = 0.35,
  } = options;

  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: scrollOffset,
  });

  const effectiveMin = shouldReduceMotion ? 0 : isMobile ? offset[0] * mobileFactor : offset[0];
  const effectiveMax = shouldReduceMotion ? 0 : isMobile ? offset[1] * mobileFactor : offset[1];

  const y = useTransform(scrollYProgress, [0, 1], [effectiveMin, effectiveMax]);

  return y;
}
