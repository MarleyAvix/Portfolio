import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function MentionsLegalesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 pb-16 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-blue transition-colors text-sm mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl font-bold text-white mb-10">Mentions légales</h1>

        <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

          {/* Éditeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Éditeur du site
            </h2>
            <p>Ce site est édité à titre personnel par :</p>
            <ul className="mt-2 space-y-1">
              <li><span className="text-slate-400">Nom :</span> Marley Avix</li>
              <li><span className="text-slate-400">Statut :</span> Étudiant en BTS SIO — option SLAM</li>
              <li>
                <span className="text-slate-400">Contact :</span>{' '}
                <a
                  href="https://www.linkedin.com/in/marleyavix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  LinkedIn
                </a>
                <span> | </span>
                 <a
                  href="mailto:marley.avix@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Hébergement
            </h2>
            <p>Ce site est hébergé par :</p>
            <ul className="mt-2 space-y-1">
              <li><span className="text-slate-400">Société :</span> IONOS</li>
              <li><span className="text-slate-400">Service :</span> IONOS</li>
              <li>
                <span className="text-slate-400">Site :</span>{' '}
                <a
                  href="https://www.ionos.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  www.ionos.fr
                </a>
              </li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg font-semibent text-white mb-3 border-b border-white/10 pb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, projets, code source) est la
              propriété exclusive de son auteur, sauf mention contraire. Toute reproduction,
              représentation ou diffusion, même partielle, est interdite sans autorisation
              préalable.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle. Aucun cookie de traçage ni
              formulaire de collecte de données n'est utilisé. Le formulaire de contact
              éventuel n'enregistre aucune information côté serveur.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Limitation de responsabilité
            </h2>
            <p>
              L'auteur s'efforce de maintenir les informations publiées à jour et exactes.
              Toutefois, il ne saurait être tenu responsable des erreurs ou omissions, ni des
              dommages résultant de l'utilisation des informations présentes sur ce site.
              Les liens hypertextes vers des sites tiers sont fournis à titre informatif ;
              l'auteur n'est pas responsable de leur contenu.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
