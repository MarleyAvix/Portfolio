import type { Project } from './types';

/* OUTIL SUPPORT */
export const outilSupportInterneProject: Project = {
  id: 'outil-support-interne',
  title: "Conception d'un outil de support interne",
  description:
    "Projet en cours : refonte d'un outil de support interne, du cadrage des besoins au choix de la stack technique et à la rédaction des spécifications.",
  longDescription:
    "Projet en cours de refonte complète d'un outil de support destiné à améliorer les processus internes. Il retrace la démarche d'ingénierie logicielle menée à ce jour : compréhension de l'outil existant, étude et présentation de plusieurs stacks techniques aux équipes concernées, prise en compte des contraintes de déploiement et de sécurité, choix de la stack et rédaction des premières spécifications.",
  image: 'https://placehold.co/600x400?text=Outil+Support+Interne',
  category: 'Entreprise',
  tags: ['Méthodologie projet', 'Architecture', 'En cours'],
  live: '',
  github: '',
  featured: true,
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: "L'objectif est de concevoir un outil adapté aux contraintes opérationnelles des équipes, sans tomber dans la sur-spécification. Le défi réside dans l'alignement entre les attentes des métiers, les contraintes techniques et de sécurité de l'infrastructure, et les besoins de l'équipe qui maintiendra l'outil.",
      },
      {
        icon: 'Users',
        title: '1. Réunion de précadrage',
        text: "Organisation d'une réunion de précadrage pour comprendre le fonctionnement de l'outil existant et recenser précisément ce qu'il contient.",
      },
      {
        icon: 'Server',
        title: '2. Étude des stacks et avis des équipes',
        text: "Étude des stacks techniques envisageables, puis animation d'une présentation devant le chef de service et la future équipe qui maintiendra l'outil, afin de recueillir leur avis sur ces choix.",
      },
      {
        icon: 'ShieldCheck',
        title: '3. Contraintes de déploiement et de sécurité',
        text: "Nouvelle présentation, adaptée aux équipes cybersécurité et infrastructure qui assureront le déploiement et le maintien à jour du produit, pour identifier et comprendre leurs contraintes.",
      },
      {
        icon: 'CheckCircle2',
        title: '4. Choix de la stack technique',
        text: "À partir des avis recueillis et des contraintes identifiées, détermination de la stack technique retenue pour le projet.",
      },
      {
        icon: 'FileText',
        title: '5. Rédaction des premières spécifications',
        text: "Rédaction des premières spécifications, avec notamment des User Stories, qui serviront de référence pour le développement et la validation des fonctionnalités.",
      },
      {
        icon: 'Terminal',
        title: "6. Analyse du code de l'ancien outil",
        text: "Analyse du code Progress de l'ancien outil pour comprendre son fonctionnement actuel et s'assurer que la refonte reprend l'ensemble des règles métier existantes.",
      },
      {
        icon: 'Rocket',
        title: 'Prochaines étapes',
        text: "Le projet est en cours. Le développement, notamment celui d'une API REST, est cadré et doit débuter prochainement.",
      },
      {
        icon: 'Brain',
        title: "Ce que j'apprends",
        text: "Ce projet me permet de maîtriser les phases amont d'un projet informatique, souvent décisives pour sa réussite : animer des réunions et des présentations auprès de publics différents, traduire des besoins parfois flous en spécifications claires, et défendre des choix techniques en tenant compte des contraintes de chaque équipe.\n\nCe projet m'a permis de valider les compétences suivantes :\n- Recenser et identifier les besoins des utilisateurs\n- Traiter des demandes d'assistance liées à une application\n- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique\n- Planifier les étapes du développement d'une solution",
      },
    ],
    technologies: ['.NET', 'Oracle', 'Blazor', 'C#'],
    features: [
      "Compréhension de l'existant et recensement des fonctionnalités",
      "Présentations aux équipes métier, cybersécurité et infrastructure",
      'Étude comparative et choix de la stack technique',
      'Rédaction des spécifications et des User Stories',
      "Analyse du code Progress de l'ancien outil",
      "API REST : cadrée, développement à venir",
    ],
    validatedSkills: ['bloc1-1', 'bloc1-2', 'bloc1-4'],
  },
};
