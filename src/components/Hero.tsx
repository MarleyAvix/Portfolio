import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import profilImage from '../assets/profil.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-slate-700 p-1 bg-slate-800 shadow-2xl">
            <img 
              src={profilImage}
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center shadow-xl border border-white/10">
            <span className="text-white font-bold text-sm">DEV</span>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-mono mb-6 rounded-md border border-brand-blue/20 text-xs uppercase tracking-widest"
          >
            Etudiant en bts SIO SLAM
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-slate-100"
          >
            Bonjour, je suis <span className="text-brand-blue">[Marley Avix]</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Futur développeur d'applications, je combine ma formation académique avec ma passion pour l'univers du jeu vidéo. J'aime transformer des idées complexes en code élégant et fonctionnel, tout en explorant les dernières tendances technologiques. Mon objectif est de créer des expériences numériques immersives qui captivent et inspirent.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a 
              href="/Calendriers BTS_2025-2027.pdf" 
              download 
              className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg transition-all"
            >
              <Download size={20} />
              Download CV
            </a>
            <Link to="/projects" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all">
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
