'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
}

export function MotionDiv({ 
  children, 
  initial, 
  animate, 
  transition, 
  whileInView, 
  viewport, 
  className 
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionH1({ 
  children, 
  initial, 
  animate, 
  transition, 
  className 
}: MotionWrapperProps) {
  return (
    <motion.h1
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.h1>
  );
}

export function MotionP({ 
  children, 
  initial, 
  animate, 
  transition, 
  className 
}: MotionWrapperProps) {
  return (
    <motion.p
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.p>
  );
} 