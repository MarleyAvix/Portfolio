import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/Home';
import { FormationPage } from './pages/Formation';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { ParcoursDetailPage } from './pages/ParcoursDetail';
import { ContactPage } from './pages/Contact';
import { TechWatchPage } from './pages/TechWatch';
import { TechWatchDetailPage } from './pages/TechWatchDetail';
import E5Page from './pages/E5Page';
import { MentionsLegalesPage } from './pages/MentionsLegales';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg-dark text-slate-200">

      <Sidebar />
      
      <main className="md:pl-20 pb-20 md:pb-0 min-h-screen flex flex-col">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/formation" element={<FormationPage />} />
              <Route path="/formation/:id" element={<ParcoursDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/tech" element={<TechWatchPage />} />
              <Route path="/tech/:id" element={<TechWatchDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/e5" element={<E5Page />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            </Routes>
          </AnimatePresence>
        </div>

        <footer className="py-12 border-t border-brand-blue/15 bg-gradient-to-b from-slate-950/20 to-slate-900/55 text-center">
          <div className="container mx-auto px-6">
            <p className="text-slate-400/90 text-sm tracking-wide">
              © {new Date().getFullYear()} Marley Avix. Tous droits réservés.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-slate-300/90">
              <a href="https://www.linkedin.com/in/marleyavix" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors text-xs font-mono uppercase tracking-widest">LinkedIn</a>
              <a href="https://github.com/marleyavix" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors text-xs font-mono uppercase tracking-widest">GitHub</a>
            </div>
            <div className="mt-4">
              <Link to="/mentions-legales" className="text-slate-400/80 hover:text-cyan-300 transition-colors text-xs">
                Mentions légales
              </Link>
            </div>
          </div>
        </footer>
      </main>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,132,255,0.03),transparent_70%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
