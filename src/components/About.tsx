import React from 'react';
import { User, Cpu, Brain, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

const skills = [
  { name: 'Python', level: 10, icon: FaPython },
  { name: 'PHP', level: 80, icon: FaPhp },
  { name: 'JavaScript', level: 60, icon: IoLogoJavascript },
  { name: 'HTML', level: 95, icon: FaHtml5 },
  { name: 'CSS', level: 85, icon: FaCss3Alt },
  { name: 'React', level: 90, icon: FaReact },
  { name: 'Docker', level: 5, icon: FaDocker },
  { name: 'Git', level: 50, icon: FaGitAlt },
  { name: 'SQL', level: 50, icon: FaDatabase },
];

const softSkills = [
  { name: 'Analyse capacité d\'analyse', icon: Brain },
  { name: 'Collaboration en équipe', icon: User },
  { name: 'Communication', icon: CheckCircle2 },
  { name: 'Adaptabilité', icon: Cpu },
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
          {/* Parcours & Experience */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-mono text-brand-blue uppercase tracking-[0.2em] mb-8">
                Parcours
              </h3>
              <div className="relative pl-8 border-l border-slate-800 space-y-8">
                {[
                  { title: 'BTS SIO SLAM', place: 'My digital school Anger', year: '2025 - 2027' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-blue shadow-sm" />
                    <h4 className="font-bold text-slate-200">{item.title}</h4>
                    <p className="text-brand-blue text-sm">{item.place}</p>
                    <p className="text-slate-500 text-xs font-mono mt-1">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.2em] mb-8">
                Experience
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="glass-card p-5 hover:border-slate-600">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-xl text-brand-blue" />
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-brand-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="h-full bg-brand-blue rounded-full"
                      />
                    </div>
                  </div>
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
