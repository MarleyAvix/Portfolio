import React from 'react';
import { Radio, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const news = [
  {
    title: "The Future of Web Development with AI",
    category: "AI & Web",
    date: "Mars 2024",
    excerpt: "How generative AI is reshaping the way we build and maintain modern web applications...",
    image: "https://picsum.photos/seed/tech1/400/250"
  },
  {
    title: "Mastering Distributed Systems",
    category: "Backend",
    date: "Fev 2024",
    excerpt: "Key principles for building resilient and scalable microservices in the cloud era...",
    image: "https://picsum.photos/seed/tech2/400/250"
  },
  {
    title: "Next.js 14: What's New?",
    category: "Frontend",
    date: "Jan 2024",
    excerpt: "Deep dive into Server Actions, Partial Prerendering, and the new metadata API...",
    image: "https://picsum.photos/seed/tech3/400/250"
  },
  {
    title: "Cybersecurity Trends 2024",
    category: "Security",
    date: "Dec 2023",
    excerpt: "Protecting your infrastructure against evolving threats and zero-day vulnerabilities...",
    image: "https://picsum.photos/seed/tech4/400/250"
  }
];

export const TechWatch = () => {
  return (
    <section id="tech" className="py-12 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Veille techno</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:border-slate-600 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="tag-blue">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest">{item.date}</p>
                <h3 className="font-bold text-slate-100 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-[10px] font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1 group/btn">
                  Lire la suite <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
