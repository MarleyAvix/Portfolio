import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Award, BriefcaseBusiness, Calendar, GraduationCap, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parcoursItems, parcoursSectionLabels, type ParcoursIconName } from '../data/parcours';

const iconMap: Record<ParcoursIconName, typeof GraduationCap> = {
  'graduation-cap': GraduationCap,
  'briefcase-business': BriefcaseBusiness,
  award: Award,
};

const markdownComponents: Components = {
  p: ({ ...props }) => <p className="mb-4 last:mb-0" {...props} />,
  ul: ({ ...props }) => <ul className="my-4 list-disc pl-6 space-y-2" {...props} />,
  li: ({ ...props }) => <li className="marker:text-brand-blue" {...props} />,
};

export const ParcoursDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const parcours = parcoursItems.find(item => item.id === id);

  if (!parcours) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Parcours introuvable</h2>
        <p className="text-slate-400 mb-8">Le parcours que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/formation" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-slate-100 hover:border-brand-blue hover:text-brand-blue transition-colors">
          <ArrowLeft size={18} />
          Retour au parcours
        </Link>
      </div>
    );
  }

  const Icon = iconMap[parcours.icon];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-blue transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Retour
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                {parcoursSectionLabels[parcours.section]}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">{parcours.title}</h1>
              <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">{parcours.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,3fr)_minmax(280px,1fr)] gap-10 items-start">
          <div className="space-y-10">
            <section className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-slate-100">Aperçu</h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {parcours.details.overview}
                </ReactMarkdown>
              </div>
            </section>

            {parcours.details.highlights && parcours.details.highlights.length > 0 && (
              <section className="p-0">
                <h2 className="text-2xl font-bold mb-6 text-slate-100">Points clés</h2>
                <ul className="space-y-4">
                  {parcours.details.highlights.map(highlight => (
                    <li key={highlight} className="flex items-start gap-3 text-slate-400">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="space-y-8 w-full max-w-sm lg:justify-self-end">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-xl font-bold mb-6 text-slate-100">Informations</h3>
              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-slate-500 uppercase tracking-[0.2em] text-[11px] mb-1">Période</p>
                    <p>{parcours.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon size={18} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-slate-500 uppercase tracking-[0.2em] text-[11px] mb-1">Structure</p>
                    <p>{parcours.institution}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-100">
                <Tag size={18} className="text-brand-blue" />
                Repères
              </h3>
              <div className="flex flex-wrap gap-2">
                {parcours.tags.map(tag => (
                  <span key={tag} className="tag-blue">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};