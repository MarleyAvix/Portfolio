import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Code2, Rocket, Lightbulb,Link, Cloud, ShieldCheck, Server, Search, BookOpen, AlertTriangle, Laptop, ChartColumnDecreasing } from 'lucide-react';
import { techWatchItems } from '../data/techwatch';

// Re-using the icon logic from ProjectDetailPage. We can extract this to a shared component later if needed.
const TechWatchIcon = ({ name }: { name?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' | 'Link' | 'Code' | 'ShieldCheck' | 'Server' | 'Cloud' | 'BookOpen' | 'Search' | 'AlertTriangle' | 'TrendingDown' | 'Laptop' }) => {
  if (!name) return null;

  switch (name) {
    case 'Lightbulb':
      return <Lightbulb className="text-amber-400" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="text-emerald-400" />;
    case 'Rocket':
      return <Rocket className="text-brand-blue" />;
    case 'Link':
      return <Link className="text-blue-400" />;
    case 'Code':
      return <Code2 className="text-green-400" />;
    case 'ShieldCheck':
      return <ShieldCheck className="text-red-400" />;
    case 'Server':
      return <Server className="text-purple-400" />;
    case 'Cloud':
      return <Cloud className="text-cyan-400" />;
    case 'BookOpen':
      return <BookOpen className="text-yellow-400" />;
    case 'Search':
      return <Search className="text-pink-400" />;
    case 'AlertTriangle':
      return <AlertTriangle className="text-orange-400" />;
    case 'TrendingDown':
      return <ChartColumnDecreasing className="text-red-400" />;
    case 'Laptop':
      return <Laptop className="text-gray-400" />;
    default:

      return null;
  }
};

export const TechWatchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = techWatchItems.find(p => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Article introuvable</h2>
        <p className="text-slate-400 mb-8">L'article de veille que vous recherchez n'existe pas.</p>
        <Link to="/tech" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={18} />
          Retour à la veille
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
               <span className="tag-blue mb-4">
                  {item.category}
                </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">{item.title}</h1>
               <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">{item.date}</p>
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
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="text-brand-blue" />
                Aperçu
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-lg">
                <p>{item.details?.longDescription || item.excerpt}</p>
              </div>
            </section>

            {item.details?.content?.map((contentItem, index) => (
              <section key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <TechWatchIcon name={contentItem.icon} />
                  <span>{contentItem.title}</span>
                </h2>
                <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
                  {contentItem.text.startsWith('http') ? (
                    <a href={contentItem.text} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">{contentItem.text}</a>
                  ) : (
                    <p>{contentItem.text}</p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
