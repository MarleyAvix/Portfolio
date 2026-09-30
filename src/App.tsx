import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/Home';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { getPageMeta, isKnownPage, notFoundMeta, SITE_URL } from './lib/seo';

// Les pages autres que l'accueil sont chargées à la demande (bundle initial plus léger)
const FormationPage = lazy(() => import('./pages/Formation').then((m) => ({ default: m.FormationPage })));
const AboutPage = lazy(() => import('./pages/About').then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/Projects').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetailPage })));
const ParcoursDetailPage = lazy(() => import('./pages/ParcoursDetail').then((m) => ({ default: m.ParcoursDetailPage })));
const ContactPage = lazy(() => import('./pages/Contact').then((m) => ({ default: m.ContactPage })));
const TechWatchPage = lazy(() => import('./pages/TechWatch').then((m) => ({ default: m.TechWatchPage })));
const TechWatchDetailPage = lazy(() => import('./pages/TechWatchDetail').then((m) => ({ default: m.TechWatchDetailPage })));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegales').then((m) => ({ default: m.MentionsLegalesPage })));
const NotFoundPage = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFoundPage })));
const E5Page = lazy(() => import('./pages/E5Page'));

const lazyPage = (page: React.ReactNode) => <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>{page}</Suspense>;

function AppContent() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  // Titre, description et canonical mis à jour à chaque changement de page
  useEffect(() => {
    const known = isKnownPage(location.pathname);
    const meta = known ? getPageMeta(location.pathname) : notFoundMeta;
    document.title = meta.title;
    setAnnouncement(meta.title);
    // Accessibilité : après un changement de page, place le focus sur le contenu principal
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      mainRef.current?.focus({ preventScroll: true });
    }
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + meta.path);
    // Une page inconnue ne doit pas être indexée par les moteurs de recherche
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute('content', known ? 'index, follow, max-image-preview:large' : 'noindex, follow');
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-bg-dark text-slate-200">
      <a href="#main" className="skip-link">Aller au contenu principal</a>
      <div className="sr-only" role="status" aria-live="polite">{announcement}</div>

      <Sidebar />
      
      <main ref={mainRef} id="main" tabIndex={-1} className="outline-none md:pl-20 pb-20 md:pb-0 min-h-screen flex flex-col">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/formation" element={lazyPage(<FormationPage />)} />
              <Route path="/formation/:id" element={lazyPage(<ParcoursDetailPage />)} />
              <Route path="/about" element={lazyPage(<AboutPage />)} />
              <Route path="/projects" element={lazyPage(<ProjectsPage />)} />
              <Route path="/projects/:id" element={lazyPage(<ProjectDetailPage />)} />
              <Route path="/tech" element={lazyPage(<TechWatchPage />)} />
              <Route path="/tech/:id" element={lazyPage(<TechWatchDetailPage />)} />
              <Route path="/contact" element={lazyPage(<ContactPage />)} />
              <Route path="/e5" element={lazyPage(<E5Page />)} />
              <Route path="/mentions-legales" element={lazyPage(<MentionsLegalesPage />)} />
              <Route path="*" element={lazyPage(<NotFoundPage />)} />
            </Routes>
          </AnimatePresence>
        </div>

        <footer className="py-12 border-t border-brand-blue/15 bg-gradient-to-b from-slate-950/20 to-slate-900/55 text-center">
          <div className="container mx-auto px-6">
            <p className="text-slate-400/90 text-sm tracking-wide">
              © {new Date().getFullYear()} Marley Avix. Tous droits réservés.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-slate-300/90">
              <a href="https://www.linkedin.com/in/marleyavix/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors text-xs font-mono uppercase tracking-widest">LinkedIn</a>
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
      <div className="fixed inset-0 pointer-events-none z-[-1]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,132,255,0.03),transparent_70%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
