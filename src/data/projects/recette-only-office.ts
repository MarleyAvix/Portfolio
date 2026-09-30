import type { Project } from './types';

/* Recette ONLYOFFICE */
export const recetteOnlyOfficeProject: Project = {
  id: 'recette-only-office',
  title: 'Recette ONLYOFFICE',
  description:
    'Recette de la suite bureautique ONLYOFFICE pour valider les fonctionnalités et assurer la qualité du produit avant sa montée de version en production.',
  longDescription:
    "Recette d'ONLYOFFICE, utilisé dans la visionneuse GED, afin d'effectuer des tests de validation et de non-régression pour assurer la qualité du produit avant sa montée de version en production.",
  image: 'https://placehold.co/600x400?text=Recette+ONLYOFFICE',
  category: 'Entreprise',
  tags: ['Recette', 'Tests'],
  live: '',
  github: '',
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: 'Effectuer des tests de validation et de non-régression pour assurer la qualité du produit avant sa montée de version en production.',
      },
      {
        icon: 'CheckCircle2',
        title: 'La Solution',
        text: "Mise en place d'une procédure de recette pour la suite bureautique ONLYOFFICE, incluant des tests fonctionnels et de performance, en créant un tableau Excel afin de suivre et de répertorier les résultats.",
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a appris à élaborer une stratégie de test efficace pour valider les fonctionnalités d'un produit, à identifier et à documenter les problèmes rencontrés lors des tests, et à collaborer avec les équipes pour assurer une résolution rapide des anomalies.\n\nCe projet m'a permis de valider la compétence suivante :\n- Réaliser les tests d'intégration et d'acceptation d'un service.",
      },
    ],
    technologies: ['ONLYOFFICE', 'Excel'],
    features: [
      'Organisation de tests de validation',
      'Identification et documentation des problèmes',
      'Collaboration avec les équipes pour la résolution des problèmes',
      'Suivi des résultats de test dans un tableau Excel',
    ],
    validatedSkills: ['bloc1-5'],
  },
};
