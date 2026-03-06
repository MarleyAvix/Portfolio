import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
            <h2 className="text-4xl font-bold text-slate-100">Me contacter</h2>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 text-slate-100">Parlons de votre projet</h3>
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations. 
              N'hésitez pas à me contacter via mes réseaux sociaux ou par email.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a 
              href="mailto:Marleyavix@outlook.fr"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-5 p-8 glass-card hover:border-brand-blue/50 group transition-all"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors border border-slate-700 shadow-lg">
                <Mail size={32} />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Email</p>
                <p className="font-bold text-slate-200 group-hover:text-brand-blue transition-colors">Marleyavix@outlook.fr</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://linkedin.com/in/marley-avix"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-5 p-8 glass-card hover:border-brand-blue/50 group transition-all"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors border border-slate-700 shadow-lg">
                <Linkedin size={32} />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="font-bold text-slate-200 group-hover:text-brand-blue transition-colors">Marley Avix</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://github.com/marleyavix"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-5 p-8 glass-card hover:border-brand-blue/50 group transition-all"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors border border-slate-700 shadow-lg">
                <Github size={32} />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">GitHub</p>
                <p className="font-bold text-slate-200 group-hover:text-brand-blue transition-colors">@marleyavix</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
