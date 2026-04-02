import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const diplomas = [
  {
    title: "BREVET D'ETUDES PROFESSIONNELLES MENUISERIE AGENCEMENT",
    institution: "Lycée Professionnel BEAUMONT - Redon",
    date: "2012",
    description: "Spécialisé en menuiserie et agencement..",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "BACCALAUREAT PROFFESSIONEL MENUISERIE AGENCEMENT",
    institution: "Lycée Professionnel BEAUMONT - Redon",
    date: "2013",
    description: "Spécialisé en menuiserie et agencement..",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600"
  },
];

const certifications = [
  {
    title: "MOOC RGPD",
    institution: "CNIL",
    date: "2025",
    description: "Certification en protection des données personnelles.",
    icon: Award,
    color: "from-cyan-500 to-blue-600"
  }
];

const formation = [
  {
    title: "FORMATION EN DEVELOPPEMENT WEB",
    institution: "UDEMY",
    date: "2013",
    description: "Spécialisé en développement web.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "BTS SIO",
    institution: "MY DIGITAL SCHOOL - Angers",
    date: "2025 - 2027",
    description: "option solutions logicielles et applications métiers.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600"
  },
];

export const Formation = () => {
  return (
    <section id="formation" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Formation</h2>
        </div>

        <div className="space-y-16">

          {/* Formation*/}
          <div>
            <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              Formation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {formation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 group hover:border-slate-600"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-slate-800 text-brand-blue border border-slate-700 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                  <p className="text-brand-blue text-sm font-medium mb-4">{item.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 group hover:border-slate-600"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-slate-800 text-brand-blue border border-slate-700 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                  <p className="text-brand-blue text-sm font-medium mb-4">{item.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Diplômes */}
          <div>
            <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              Diplômes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {diplomas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 group hover:border-slate-600"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-slate-800 text-brand-blue border border-slate-700 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                  <p className="text-brand-blue text-sm font-medium mb-4">{item.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
