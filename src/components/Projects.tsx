import React from 'react';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Projets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};
