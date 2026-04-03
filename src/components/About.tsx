import React from 'react';
import { User, Cpu, Brain, CheckCircle2, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

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
  { name: 'Capacité d\’analyse', icon: Brain },
  { name: 'Collaboration en équipe', icon: User },
  { name: 'Communication', icon: CheckCircle2 },
  { name: 'Adaptabilité', icon: Cpu },
  { name: 'Grande curiosité', icon: Lightbulb },
];

export const About = () => {
  return (
    <section id="about" className="py-12 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">A propos</h2>
        </div>

        <div className="space-y-20">

          {/* Présentation */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-slate-100">En savoir plus sur moi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
               Passionné par l'informatique depuis mon plus jeune âge, j'ai d'abord forgé mes compétences en autodidacte avant de valider mon projet professionnel. Aujourd'hui étudiant en BTS SIO chez My Digital School Angers, je mets à profit mon expérience personnelle pour progresser rapidement dans le développement.<br></br>Mon parcours atypique est une force car les années passées dans d'autres secteurs m'ont permis de développer une maturité et des soft skills que je souhaite désormais investir dans le monde de la tech.
              </p>
            </motion.div>

          </div>
          {/* Parcours & Experience */}
          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.2em] mb-8">
                Expérience
              </h3>
              <div className="relative pl-8 border-l border-slate-800 space-y-8">
                {[
                  { role: 'Alternant développeur', company: 'Conseil départemental de la Mayenne', year: '2025 - 2027' },

                ].map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-sm" />
                    <h4 className="font-bold text-slate-200">{exp.role}</h4>
                    <p className="text-cyan-500 text-sm">{exp.company}</p>
                    <p className="text-slate-500 text-xs font-mono mt-1">{exp.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compétences & Soft Skills */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8">
                Compétences
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card w-24 h-24 p-4 hover:border-brand-blue/50 transition-colors flex flex-col items-center justify-center gap-2"
                  >
                    <div className="text-brand-blue">
                      <skill.icon size={24} />
                    </div>
                    <span className="text-xs font-medium text-slate-200 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8">
                Soft skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="glass-card p-5 flex items-center gap-4 hover:border-slate-600">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue border border-slate-700">
                      <skill.icon size={20} />
                    </div>
                    <span className="font-semibold text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
