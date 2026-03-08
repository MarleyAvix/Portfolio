import React from 'react';
import { Home, GraduationCap, User, Briefcase, Mail, Radio } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import profileImage from '../assets/profil.jpg';


const navItems = [
  { id: 'home', icon: Home, label: 'Accueil', path: '/' },
  { id: 'formation', icon: GraduationCap, label: 'Formation', path: '/formation' },
  { id: 'about', icon: User, label: 'À propos', path: '/about' },
  { id: 'projects', icon: Briefcase, label: 'Projets', path: '/projects' },
  { id: 'tech', icon: Radio, label: 'Veille', path: '/tech' },
  { id: 'contact', icon: Mail, label: 'Contact', path: '/contact' },
];

export const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center py-8 bg-slate-900 border-r border-slate-800 z-50">
        <div className="mb-12">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg">
           <span className="text-white font-bold text-sm">MA</span>
          </div>
        </div>
        
        <nav className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `group relative p-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-brand-blue text-white' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={22} />
                  
                  {/* Tooltip */}
                  <span className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl border border-slate-700">
                    {item.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="active-nav-desktop"
                      className="absolute inset-0 border-2 border-brand-blue/20 rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 px-2 py-3 flex justify-around items-center z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `relative p-2 transition-all duration-200 ${
              isActive ? 'text-brand-blue' : 'text-slate-400'
            }`}
          >
            {({ isActive }) => (
              <div className="flex flex-col items-center gap-1">
                <item.icon size={20} />
                <span className="text-[11px] font-semibold tracking-tight">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-mobile"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
