import type { Project } from './types';

/* Modèles de courriers Jaspersoft */
export const redactionCourrierJasperSoftProject: Project = {
  id: 'redaction-courrier-jasper-soft',
  title: 'Création de modèles de courriers Jaspersoft',
  description:
    'Création de modèles de courriers Jaspersoft alimentés automatiquement par les données de la base Solis.',
  longDescription:
    'Création de modèles de courriers Jaspersoft afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis.\n\nCela permet une normalisation des courriers et facilite la communication ainsi que la compréhension des informations pour les utilisateurs.',
  image: 'https://placehold.co/600x400?text=Courriers+Jaspersoft',
  category: 'Entreprise',
  tags: ['Jaspersoft', 'SQL'],
  live: '',
  github: '',
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: 'Créer des modèles de courriers Jaspersoft afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis.',
      },
      {
        icon: 'CheckCircle2',
        title: 'La Solution',
        text: 'Création de requêtes SQL pour récupérer automatiquement les données nécessaires depuis la base de données Solis et intégration de ces données dans des modèles de courriers Jaspersoft, permettant ainsi une normalisation des courriers et une facilitation de la communication et de la compréhension des informations pour les utilisateurs.',
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a appris à rédiger des requêtes SQL pour extraire des données spécifiques de la base de données Solis, à créer des modèles de courriers dans Jaspersoft en intégrant les données récupérées, et à collaborer avec les équipes métiers pour comprendre leurs besoins en matière de communication et de présentation des informations.\n\nCe projet m'a permis de valider les compétences suivantes :\n- Accompagner les utilisateurs dans la mise en place d'un nouveau service\n- Collecter, suivre et orienter des demandes\n- Participer à la valorisation de l'image de l'organisation sur les médias numériques",
      },
    ],
    technologies: ['Jaspersoft', 'Solis', 'SQL'],
    features: [
      'Création de modèles de courriers Jaspersoft',
      'Rédaction de requêtes SQL pour extraire des données spécifiques',
      'Collaboration avec les équipes métiers pour comprendre leurs besoins',
      'Facilitation de la communication et de la compréhension des informations pour les utilisateurs',
    ],
    validatedSkills: ['bloc1-2', 'bloc1-3', 'bloc1-5'],
  },
};
