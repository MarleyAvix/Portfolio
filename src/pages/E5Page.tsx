import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Server, Shield, Globe, Users, BookOpen, Layout } from 'lucide-react';
import { e5Activities } from '../data/e5';

const E5Page = () => {
  const getIcon = (index: number) => {
    const icons = [Server, Shield, Globe, Users, Layout, BookOpen];
    const Icon = icons[index % icons.length];
    return <Icon size={24} />;
  };

  return (
    <section className="py-12 min-h-screen bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Tableau de synthèse E5</h2>
        </div>

        <div className="grid gap-8">
          {e5Activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-slate-800 text-brand-blue border border-slate-700 shadow-sm">
                  {getIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  {activity.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {activity.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 hover:border-brand-blue/30 transition-all group"
                  >
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default E5Page;