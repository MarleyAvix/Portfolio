import type { Project } from './types';

/* Rédaction d'un courrier Jasper Soft */
export const redactionCourrierJasperSoftProject: Project = {
  id: 'redaction-courrier-jasper-soft',
  title: "Rédaction d'un courrier Jasper Soft",
  description: 'Rédaction de courriers pour Jasper Soft.',
  longDescription:
    'Rédaction de courriers pour Jasper afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis.\n\nCela permet une normalisation des courriers et facilite la communication ainsi que la compréhension des informations pour les utilisateurs.',
  image: 'https://placehold.co/600x400?text=Rédaction+de+courriers+Jasper+Soft',
  category: 'Entreprise',
  tags: ['Jasper Soft', 'SQL'],
  live: '',
  github: '',
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: 'Rédiger des courriers pour Jasper Soft afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis.',
      },
      {
        icon: 'CheckCircle2',
        title: 'La Solution',
        text: 'Création de requêtes SQL pour récupérer automatiquement les données nécessaires depuis la base de données Solis et intégration de ces données dans des modèles de courriers Jasper Soft, permettant ainsi une normalisation des courriers et une facilitation de la communication et de la compréhension des informations pour les utilisateurs.',
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a appris à rédiger des requêtes SQL pour extraire des données spécifiques de la base de données Solis, à créer des modèles de courriers dans Jasper Soft en intégrant les données récupérées, et à collaborer avec les équipes métiers pour comprendre leurs besoins en matière de communication et de présentation des informations.\n\nCe projet m'a permis de valider les compétences suivantes:\n- Accompagner les utilisateurs dans la mise en place d'un nouveau service\n- Collecter, suivre et orienter des demandes\n- Participer à la valorisation de l'image de l'organisation sur les médias numériques",
      },
    ],
    technologies: ['Jasper Soft', 'Solis', 'SQL'],
    features: [
      'Création de modèles de courriers Jasper Soft',
      'Rédaction de requêtes SQL pour extraire des données spécifiques',
      'Collaboration avec les équipes métiers pour comprendre leurs besoins',
      'Facilitation de la communication et de la compréhension des informations pour les utilisateurs',
    ],
    validatedSkills: ['bloc1-2', 'bloc1-3', 'bloc1-5'],
  },
};
