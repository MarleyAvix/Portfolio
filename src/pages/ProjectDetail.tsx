import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Code2, Rocket, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Projet introuvable</h2>
        <p className="text-slate-400 mb-8">Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/projects" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={18} />
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-6">
        {/* Navigation & Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-blue transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Retour
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-blue">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">{project.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={project.github} 
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all border border-slate-700"
              >
                <Github size={20} />
                Code Source
              </a>
              <a 
                href={project.live} 
                className="flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/20"
              >
                <ExternalLink size={20} />
                Démo Live
              </a>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 mb-16 shadow-2xl"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="text-brand-blue" />
                Aperçu du projet
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-lg">
                <p>{project.longDescription || project.description}</p>
              </div>
            </section>

            {project.details?.challenge && (
              <section className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="text-amber-400" />
                  Le Défi
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  {project.details.challenge}
                </p>
              </section>
            )}

            {project.details?.solution && (
              <section className="p-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" />
                  La Solution
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  {project.details.solution}
                </p>
              </section>
            )}
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="space-y-8">
            {project.details?.technologies && (
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Code2 className="text-brand-blue" size={20} />
                  Stack Technique
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.details?.features && (
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-6">Fonctionnalités Clés</h3>
                <ul className="space-y-4">
                  {project.details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
