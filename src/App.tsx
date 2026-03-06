import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/Home';
import { FormationPage } from './pages/Formation';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { ContactPage } from './pages/Contact';
import { TechWatchPage } from './pages/TechWatch';
import { AnimatePresence } from 'motion/react';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-dark text-slate-200">
      <Sidebar />
      
      <main className="md:pl-20 pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/formation" element={<FormationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/tech" element={<TechWatchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <footer className="py-12 border-t border-white/5 bg-black/40 text-center">
          <div className="container mx-auto px-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Marley Avix. Tous droits réservés.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-slate-400">
              <a href="#" className="hover:text-brand-blue transition-colors text-xs font-mono uppercase tracking-widest">LinkedIn</a>
              <a href="#" className="hover:text-brand-blue transition-colors text-xs font-mono uppercase tracking-widest">GitHub</a>
              <a href="#" className="hover:text-brand-blue transition-colors text-xs font-mono uppercase tracking-widest">Twitter</a>
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
