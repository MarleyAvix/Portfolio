import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { techWatchItems } from '../data/techwatch';

const categories = ['Toutes', ...new Set(techWatchItems.map(item => item.category))];

export const TechWatch = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredItems = selectedCategory === 'Toutes'
    ? techWatchItems
    : techWatchItems.filter(item => item.category === selectedCategory);

  return (
    <section id="tech" className="py-12 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <h2 className="text-3xl font-bold text-slate-100">Veille techno</h2>
        </div>

        <div className="flex items-center gap-2 mb-12">
          <p>J'organise ma veille technologique par catégorie en m'abonnant à des newsletters, en suivant des chaînes YouTube et des podcasts. Quand je lis un article intéressant, je le stocke dans une base de données Notion pour avoir un suivi, un archivage et une consultation facile.</p>
          </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-brand-blue text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Link to={`/tech/${item.id}`} key={item.id} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group hover:border-slate-600 flex flex-col overflow-hidden h-full"
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
                  <div className="mt-auto text-[10px] font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire la suite <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
