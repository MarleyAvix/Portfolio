import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { e5Activities } from '../data/e5';

const E5Page = () => {
  const totalSkills = e5Activities.reduce((sum, activity) => sum + activity.skills.length, 0);
  const validatedSkills = e5Activities.reduce(
    (sum, activity) => sum + activity.skills.filter((skill) => skill.isValidated).length,
    0
  );

  return (
    <section className="py-12 min-h-screen bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Tableau de synthese E5</h2>
            <p className="text-slate-400 mt-1 text-sm">
              {validatedSkills} competences validees sur {totalSkills}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="bg-slate-800/80 text-left">
                  <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-700 w-[120px]">
                    Bloc
                  </th>
                  <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-700 w-[320px]">
                    Activite
                  </th>
                  <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-700">
                    Competence evaluee
                  </th>
                  <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-700 w-[180px]">
                    Validation
                  </th>
                </tr>
              </thead>

              <tbody>
                {e5Activities.map((activity) =>
                  activity.skills.map((skill, skillIndex) => (
                    <tr
                      key={`${activity.id}-${skillIndex}`}
                      className="border-b border-slate-800/80 hover:bg-slate-800/30"
                    >
                      {skillIndex === 0 && (
                        <>
                          <td
                            rowSpan={activity.skills.length}
                            className="px-4 py-4 align-top border-r border-slate-800"
                          >
                            <span className="inline-flex items-center rounded-md border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue uppercase tracking-wide">
                              {activity.id.replace('bloc', 'BLOC ').replace('-', '.')}
                            </span>
                          </td>
                          <td
                            rowSpan={activity.skills.length}
                            className="px-4 py-4 align-top text-slate-200 font-semibold border-r border-slate-800"
                          >
                            {activity.title}
                          </td>
                        </>
                      )}

                      <td className="px-4 py-3 text-slate-300">{skill.name}</td>

                      <td className="px-4 py-3">
                        {skill.isValidated ? (
                          <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
                            <CheckCircle2 size={16} />
                            Validee
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-400">
                            <XCircle size={16} />
                            Non validee
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-slate-800 bg-slate-900/70 text-xs text-slate-400">
            Lecture: chaque ligne correspond a une competence evaluee dans le cadre de l'epreuve E5.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default E5Page;