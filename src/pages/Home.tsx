import React from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};
