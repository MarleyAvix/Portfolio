import React from 'react';
import { User, Cpu, Lightbulb, BriefcaseBusiness, Ear } from 'lucide-react';
import { motion } from 'motion/react';
import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'PHP', icon: FaPhp },
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'React', icon: FaReact },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'SQL', icon: FaDatabase },
];

const softSkills = [
  { name: 'Esprit d\'équipe', icon: User },
  { name: 'Valeur de l\'entreprise', icon: BriefcaseBusiness },
  { name: 'Capacité d\'écoute', icon: Ear },
  { name: 'Remise en question', icon: Cpu },
  { name: 'Grande curiosité', icon: Lightbulb },
];

const aboutContent = `Autodidacte passionné et engagé, j'ai cultivé une solide expertise technique bien avant de formaliser mon parcours au sein de MyDigitalSchool Angers. Mon intégration en BTS SIO est l'aboutissement d'un choix de carrière stratégique, venant sceller des années de pratique informatique personnelle et rigoureuse.

**Mon atout majeur :** 15 années d'expérience multisectorielle qui m'ont appris à décrypter les enjeux d'une entreprise et à évoluer avec aisance dans des environnements complexes.

Plus qu'un développeur en devenir, je suis un collaborateur mature, capable de transformer des besoins métiers en solutions technologiques performantes.`;

export const About = () => {
  return (
    <section id="about" className="pt-20 pb-12 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">A propos</h2>
        </div>

        <div className="space-y-20">

          {/* Présentation + Valeurs */}
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 h-full"
            >
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em]">
                En savoir plus sur moi
              </h3>
              <div className="glass-card p-6 md:p-8 h-full">
                <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed prose-p:my-0 prose-p:leading-relaxed prose-strong:text-slate-100 prose-strong:font-semibold prose-p:mb-4 last:prose-p:mb-0">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {aboutContent}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 h-full"
            >
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em]">
                Valeurs
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="glass-card min-h-20 p-4 flex items-center gap-4 hover:border-slate-600">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue border border-slate-700">
                      <skill.icon size={20} />
                    </div>
                    <span className="font-semibold text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Compétences */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em]">
              Compétences
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card min-h-28 p-4 hover:border-brand-blue/50 transition-colors flex flex-col items-center justify-center gap-2"
                >
                  <div className="text-brand-blue">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-xs font-medium text-slate-200 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
