import React from 'react';
import { GraduationCap, Award, Calendar, BriefcaseBusiness, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  parcoursBySection,
  parcoursSectionLabels,
  type ParcoursIconName,
  type ParcoursItem,
  type ParcoursSection,
} from '../data/parcours';

const iconMap: Record<ParcoursIconName, typeof GraduationCap> = {
  'graduation-cap': GraduationCap,
  'briefcase-business': BriefcaseBusiness,
  award: Award,
};

const sectionOrder: ParcoursSection[] = ['formation', 'experience', 'certification', 'diploma'];

export const Formation = () => {
  const renderCard = (item: ParcoursItem, index: number) => {
    const Icon = iconMap[item.icon];

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="group"
      >
        <Link
          to={`/formation/${item.id}`}
          className="glass-card block h-full p-8 hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
        >
          <div className="flex justify-between items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-slate-800 text-brand-blue border border-slate-700 shadow-sm">
              <Icon size={24} />
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono shrink-0">
              <Calendar size={12} />
              {item.date}
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 mb-2">
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-brand-blue transition-colors">
              {item.title}
            </h4>
            <ChevronRight
              size={18}
              className="mt-1 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue"
            />
          </div>

          <p className="text-brand-blue text-sm font-medium mb-4">{item.institution}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="tag-blue">
                {tag}
              </span>
            ))}
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section id="formation" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Parcours</h2>
        </div>

        <div className="space-y-16">
          {sectionOrder.map(section => (
            <div key={section}>
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                {parcoursSectionLabels[section]}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {parcoursBySection[section].map(renderCard)}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
