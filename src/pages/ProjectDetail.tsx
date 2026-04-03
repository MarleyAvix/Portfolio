import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Code2, Rocket, Lightbulb, Brain, FolderKanban, Code, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '../data/projects';
import { ValidatedSkills } from '../components/ValidatedSkills';

const ProjectIcon = ({ name }: { name?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' | 'Brain' | 'Code' | 'FolderKanban' }) => {
  if (!name) return null;

  switch (name) {
    case 'Lightbulb':
      return <Lightbulb className="text-amber-400" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="text-emerald-400" />;
    case 'Rocket':
      return <Rocket className="text-brand-blue" />;
    case 'Brain':
      return <Brain className="text-purple-400" />;
    case 'Code':
      return <Code className="text-green-400" />;
    case 'FolderKanban':
      return <FolderKanban className="text-red-400" />;
    default:
      return null;
  }
};

const formatCardText = (text: string) => {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\/(?:r)?n/g, '\n')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

const markdownComponents: Components = {
  p: ({ ...props }) => <p className="mb-4 last:mb-0" {...props} />,
  ol: ({ ...props }) => <ol className="my-4 list-decimal pl-6 space-y-2" {...props} />,
  ul: ({ ...props }) => <ul className="my-4 list-disc pl-6 space-y-2" {...props} />,
  li: ({ ...props }) => <li className="marker:text-brand-blue" {...props} />,
  a: ({ ...props }) => <a className="text-brand-blue underline hover:text-blue-400" {...props} />,
};

const MarkdownText = ({ text, className }: { text: string; className?: string }) => (
  <div className={className}>
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {formatCardText(text)}
    </ReactMarkdown>
  </div>
);
export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const project = projects.find(p => p.id === id);
  const projectDetailImage = project?.details?.detailImage || project?.image;
  const isValidLink = (url?: string) => Boolean(url && url.trim() && url.trim() !== '#');

  const hasGithubLink = isValidLink(project?.github);
  const hasLiveLink = isValidLink(project?.live);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
              {hasGithubLink ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all border border-slate-700"
                >
                  <Github size={20} />
                  Code Source
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800/40 text-slate-500 rounded-xl font-bold border border-slate-700/50 opacity-70"
                >
                  <Github size={20} />
                  Code Source
                </button>
              )}

              {hasLiveLink ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/20"
                >
                  <ExternalLink size={20} />
                  Démo Live
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="flex items-center gap-2 px-6 py-3 bg-brand-blue/30 text-blue-200/60 rounded-xl font-bold border border-brand-blue/30 opacity-70"
                >
                  <ExternalLink size={20} />
                  Démo Live
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,3fr)_minmax(260px,1fr)] gap-12 items-start">
          {/* Left Column: Hero + Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-h-[clamp(320px,70vh,780px)] rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-slate-950 flex items-center justify-center"
            >
              <img
                src={projectDetailImage}
                alt={project.title}
                className="w-full h-auto max-h-[clamp(320px,70vh,780px)] object-contain cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setZoomedImage({ src: projectDetailImage, alt: project.title })}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </motion.div>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="text-brand-blue" />
                Aperçu du projet
              </h2>
              <MarkdownText
                text={project.longDescription || project.description}
                className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-lg"
              />
            </section>

            {project.details?.content?.map((item, index) => (
              <section key={index} className="p-0">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <ProjectIcon name={item.icon} />
                  <span>{item.title}</span>
                </h2>
                <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
                  <MarkdownText text={item.text} />
                  {item.images && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {item.images.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`${item.title} ${i + 1}`}
                          className="w-full h-auto max-h-[clamp(220px,55vh,520px)] object-contain rounded-lg bg-slate-950/60 cursor-zoom-in"
                          onClick={() => setZoomedImage({ src: image, alt: `${item.title} ${i + 1}` })}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="space-y-8 w-full max-w-sm lg:justify-self-end">
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

            {project.details?.validatedSkills && (
              <ValidatedSkills validatedSkills={project.details.validatedSkills} />
            )}
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-[101] rounded-full border border-white/20 bg-slate-900/70 p-2 text-slate-200 hover:text-white hover:border-white/40 transition-colors"
            onClick={() => setZoomedImage(null)}
            aria-label="Fermer l'image agrandie"
          >
            <X size={20} />
          </button>

          <div className="flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};
