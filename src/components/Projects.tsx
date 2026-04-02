import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';
import { ProjectCategory, projects } from '../data/projects';
import { e5Activities } from '../data/e5';

const categoryFilters: Array<'Tous' | ProjectCategory> = ['Tous', 'Ecole', 'Entreprise', 'Perso'];
const allSkillsOption = 'Toutes les competences';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'Tous' | ProjectCategory>('Tous');
  const [activeSkill, setActiveSkill] = useState<string>(allSkillsOption);

  const availableSkills = e5Activities.filter(activity =>
    projects.some(project => project.details?.validatedSkills?.includes(activity.id))
  );

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'Tous' || project.category === activeCategory;
    const matchesSkill =
      activeSkill === allSkillsOption || project.details?.validatedSkills?.includes(activeSkill);

    return matchesCategory && matchesSkill;
  });

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
            <h2 className="text-3xl font-bold text-slate-100">Réalisations</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categoryFilters.map(category => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="max-w-md">
            <label htmlFor="skills-filter" className="mb-2 block text-sm font-semibold text-slate-200">
              Filtrer par compétence validée
            </label>
            <select
              id="skills-filter"
              value={activeSkill}
              onChange={(event) => setActiveSkill(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition-colors hover:border-slate-500 focus:border-brand-blue"
            >
              <option value={allSkillsOption}>{allSkillsOption}</option>
              {availableSkills.map((activity) => (
                <option key={activity.id} value={activity.id}>
                  {activity.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card overflow-hidden group hover:border-slate-600 ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>
              </Link>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    {project.category}
                  </span>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-blue">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-brand-blue transition-colors flex items-center justify-between">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.live} className="text-slate-400 hover:text-brand-blue transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2 group/btn"
                  >
                    Voir les détails
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                  <a 
                    href={project.github}
                    className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 py-10 text-center text-slate-400">
            Aucun projet ne correspond aux filtres sélectionnés.
          </div>
        )}
      </div>
    </section>
  );
};
