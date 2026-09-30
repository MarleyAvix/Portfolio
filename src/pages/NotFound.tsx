import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[70vh] flex items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-xl">
        <p className="font-mono text-brand-text text-sm uppercase tracking-widest mb-4">Erreur 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Page introuvable</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée. Vous pouvez revenir à l'accueil ou
          découvrir mes projets.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-brand-strong hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/projects"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-xl font-semibold border border-slate-700 transition-colors"
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
