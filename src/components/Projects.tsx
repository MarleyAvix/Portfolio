import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';
import { ProjectCategory, projects } from '../data/projects';
import { e5Activities } from '../data/e5';

const categoryFilters: Array<'Tous' | ProjectCategory> = ['Tous', 'Ecole', 'Entreprise', 'Perso'];
const allSkillsOption = 'Toutes les competences';
const categoryBadgeClassName =
  'rounded-full border border-brand-blue/70 bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-brand-blue/35';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'Tous' | ProjectCategory>('Tous');
  const [activeSkill, setActiveSkill] = useState<string>(allSkillsOption);
  const isValidLink = (value?: string) =>
    typeof value === 'string' && value.trim().length > 0;

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
              <div className="relative aspect-video overflow-hidden">
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </Link>

                <div className="absolute top-4 left-4 z-20">
                  <span className={categoryBadgeClassName}>
                    {project.category}
                  </span>
                </div>

                {(isValidLink(project.github) || isValidLink(project.live)) && (
                  <div className="absolute top-4 right-4 z-20 flex gap-2.5">
                    {isValidLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/25 bg-slate-950/75 p-2.5 text-slate-200 backdrop-blur-sm hover:text-white hover:border-white/45 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {isValidLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/25 bg-slate-950/75 p-2.5 text-slate-200 backdrop-blur-sm hover:text-brand-blue hover:border-brand-blue/55 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-8 flex h-full flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-blue">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-brand-blue transition-colors">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
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
