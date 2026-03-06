import React from 'react';
import { Projects } from '../components/Projects';
import { motion } from 'motion/react';

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Projects />
    </motion.div>
  );
};
