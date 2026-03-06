import React from 'react';
import { Formation } from '../components/Formation';
import { motion } from 'motion/react';

export const FormationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Formation />
    </motion.div>
  );
};
