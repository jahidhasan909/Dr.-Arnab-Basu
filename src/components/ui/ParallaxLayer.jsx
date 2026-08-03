'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

/**
 * ParallaxLayer component to wrap elements with smooth vertical scroll parallax.
 */
export default function ParallaxLayer({
  targetRef,
  offset = [-30, 30],
  scrollOffset = ['start end', 'end start'],
  mobileFactor = 0.35,
  className = '',
  style = {},
  children,
  ...props
}) {
  const y = useParallax(targetRef, { offset, scrollOffset, mobileFactor });

  return (
    <motion.div
      style={{
        y,
        willChange: 'transform',
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
