import type { Project } from './types';

/*OUTIL SUPPORT*/
export const outilSupportInterneProject: Project = {
  id: 'outil-support-interne',
  title: "Développement d'un outil de support interne",
  description:
    "Conception et développement d'une application de support pour optimiser et automatiser certains processus internes.",
  longDescription:
    "Ce projet formalise la refonte complète d'un outil de support destiné à améliorer les processus internes. Il retrace toute la démarche d'ingénierie logicielle : du recueil des besoins initiaux auprès des utilisateurs jusqu'à la définition et la validation d'un produit minimum viable (MVP) fonctionnel, en passant par le choix et la validation d'une stack technique moderne.",
  image: 'https://placehold.co/600x400?text=Outil+Support+Interne',
  category: 'Entreprise',
  tags: ['Méthodologie projet', 'Architecture', 'MVP'],
  live: '',
  github: '',
  featured: true,
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: "L'objectif était de concevoir un outil parfaitement adapté aux contraintes opérationnelles des équipes, sans tomber dans la sur-spécification. Le défi résidait dans l'alignement entre les attentes métiers, les contraintes techniques de l'infrastructure et la livraison rapide d'une première version exploitable.",
      },
      {
        title: '1. Recueil des besoins',
        text: "Animation d'ateliers avec les futurs utilisateurs et techniciens support pour recenser les points de friction actuels et leurs besoins réels. Cette phase a permis de rédiger les premières User Stories (spécifications fonctionnelles) et d'identifier les flux de travail (workflows) indispensables au quotidien.",
      },
      {
        title: '2. Définition et validation de la Stack Technique',
        text: "Analyse comparative de différentes technologies selon des critères de performance, de sécurité et de maintenabilité. Après évaluation, la stack technique a été validée avec les équipes système pour s'assurer de sa parfaite intégration et de sa conformité avec l'infrastructure de l'organisation.",
      },
      {
        title: '3. Redaction des spécifications Technique et fonctionnelles',
        text: 'Rédaction des spécifications fonctionnelles détaillant les besoins utilisateurs, les flux de travail et les contraintes techniques. Ces documents ont servi de référence pour le développement et la validation des fonctionnalités du projet.',
      },
      {
        title: '4. Validation des besoins et Objectifs MVP',
        text: "Pour éviter l'effet 'tunnel', les besoins ont été priorisés selon la méthode MoSCoW afin de définir le périmètre du MVP (Minimum Viable Product). Cette validation conjointe avec les parties prenantes a fixé l'objectif principal : livrer un cœur de système fonctionnel (création, assignation et suivi des tickets de support) avant d'envisager des fonctionnalités secondaires.",
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a permis de maîtriser les phases amont d'un projet informatique, souvent cruciales pour sa réussite. J'ai appris à traduire des besoins utilisateurs parfois flous en spécifications techniques claires, à défendre des choix d'architecture et à piloter la conception par la valeur (approche MVP).\n\nCe projet m'a permis de valider les compétences suivantes:\n- Recenser et identifier les besoins des utilisateurs\n- Traiter des demandes d'assistance liées à une application\n- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique\n- Planifier les étapes du développement d'une solution",
      },
    ],
    technologies: ['.NET', 'Oracle', 'Blazor', 'C#'], // Stack technique à adapter selon ton vrai choix
    features: [
      'Recueil et formalisation des besoins utilisateurs',
      "Étude comparative et validation d'une stack logicielle",
      'Priorisation fonctionnelle et définition du périmètre MVP',
      "Développement d'une API REST",
      "Alignement avec les standards de sécurité de l'organisation",
    ],
    validatedSkills: ['bloc1-1', 'bloc1-2', 'bloc1-4'], // À adapter selon tes fiches E4/E5
  },
};
