import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Linkedin, Github  } from 'lucide-react';
import { motion } from 'motion/react';
import profilImage from '../assets/profil.jpg';

export const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const borderPosRef = useRef({ x: 50, y: 50 });

  const flushBorderPosition = () => {
    if (!imgRef.current) {
      frameRef.current = null;
      return;
    }
    const nx = (borderPosRef.current.x - 50) / 50;
    const ny = (borderPosRef.current.y - 50) / 50;
    const shadowX = Math.round(-nx * 18);
    const shadowY = Math.round(-ny * 18);
    const shadowBlur = 28 + Math.round((Math.abs(nx) + Math.abs(ny)) * 10);

    imgRef.current.style.setProperty('--mx', `${borderPosRef.current.x}%`);
    imgRef.current.style.setProperty('--my', `${borderPosRef.current.y}%`);
    imgRef.current.style.setProperty('--shadow-x', `${shadowX}px`);
    imgRef.current.style.setProperty('--shadow-y', `${shadowY}px`);
    imgRef.current.style.setProperty('--shadow-blur', `${shadowBlur}px`);
    frameRef.current = null;
  };

  const queueBorderPosition = (x: number, y: number) => {
    borderPosRef.current = { x, y };
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(flushBorderPosition);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    queueBorderPosition(x, y);
  };

  const handleImageMouseLeave = () => {
    queueBorderPosition(50, 50);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="relative">
          <div
            ref={imgRef}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl p-[3px]"
            style={{
              ['--mx' as string]: '50%',
              ['--my' as string]: '50%',
              ['--shadow-x' as string]: '0px',
              ['--shadow-y' as string]: '12px',
              ['--shadow-blur' as string]: '30px',
              background:
                'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.95) 0%, rgba(0, 66, 128, 0.9) 22%, rgba(0,132,255,0.18) 50%, rgba(15,23,42,0.9) 72%)',
              boxShadow:
                'var(--shadow-x) var(--shadow-y) var(--shadow-blur) rgba(2, 8, 23, 0.55), 0 20px 40px rgba(2, 8, 23, 0.35)',
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800">
              <img
                src={profilImage}
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
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
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-slate-100 rounded-xl cursor-default select-none"
          >
            Bonjour, je suis <span className="text-brand-blue">[Marley Avix]</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Développeur d'applications, je combine ma formation académique avec ma passion pour l'univers du jeu vidéo. J'aime transformer des idées complexes en code élégant et fonctionnel, tout en explorant les dernières tendances technologiques. Mon objectif est de créer des expériences numériques immersives qui captivent et inspirent.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/*<a 
              href="/Calendriers BTS_2025-2027.pdf" 
              download 
              className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg transition-all"
            >
             <Download size={20} /> 
              Télécharger CV
            </a>*/}
            <Link to="/projects" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all">
               <Github size={20} />
            </Link>
            <Link to="/projects" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all">
               <Linkedin size={20} />
            </Link>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
