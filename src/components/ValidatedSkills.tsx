import React from 'react';
import { Check, X } from 'lucide-react';

const allSkills = [
  "Gérer le patrimoine informatique",
  "Répondre aux incidents et demandes d'assistance",
  "Développer la présence en ligne",
  "Travailler en mode projet",
  "Mettre à disposition un service informatique",
  "Organiser son développement professionnel"
];

interface ValidatedSkillsProps {
  validatedSkills: string[];
}

export const ValidatedSkills: React.FC<ValidatedSkillsProps> = ({ validatedSkills }) => {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
      <h3 className="text-xl font-bold mb-6">Compétences E5 Validées</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                Compétence
              </th>
              <th scope="col" className="px-6 py-3 text-center rounded-r-lg">
                Validée
              </th>
            </tr>
          </thead>
          <tbody>
            {allSkills.map((skill, index) => {
              const isValidated = validatedSkills.includes(skill);
              return (
                <tr key={index} className="border-b border-slate-800">
                  <td className="px-6 py-4 font-medium text-slate-300">
                    {skill}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {isValidated ? (
                      <Check className="w-5 h-5 text-green-400 inline-block" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 inline-block" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
