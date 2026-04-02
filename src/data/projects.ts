import fuckcops from '../assets/FuckcopsProd.png';
import outilAno from '../assets/outilAno.png';
import dossierAno from '../assets/dossierAno.png';
import listCsv from '../assets/listCsv.png';
import csvAno from '../assets/csvAno.png';
import fichierParamAno from '../assets/fichierParametrageAno.png';
import logAno from '../assets/resultLog.png';
import listLogs from '../assets/listLogs.png';
import resultAno from '../assets/resultatAno.png';

export type ProjectCategory = 'Ecole' | 'Entreprise' | 'Perso';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  live: string;
  github: string;
  featured?: boolean;
  details?: {
    content?: {
      icon?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' | 'Brain' | 'Code' | 'FolderKanban';
      title: string;
      text: string;
      images?: string[];
    }[];
    technologies?: string[];
    features?: string[];
    screenshots?: string[];
    validatedSkills?: string[];
  };
}

export const projects: Project[] = [
  /* Anonymisation base de données */
  {
    id: "anonymisation-base-de-donnees",
    title: "Anonymisation base de données",
    description: "Projet d'anonymisation de la base de données SOLIS pour analyses techniques tout en respectant les exigences RGPD.",
    longDescription: "Le projet consiste à anonymiser entièrement la base de données SOLIS afin de pouvoir la transmettre à l’éditeur Arche MC2 pour analyses techniques, tout en protégeant les données personnelles conformément aux exigences RGPD. L’anonymisation est réalisée sur l’environnement INTEG, à l’aide de l’Outil d’Anonymisation Solis V2",
    image: outilAno,
    category: "Entreprise",
    tags: ["SQL", "RGPD", "Anonymisation"],
    live: "",
    github: "",
    featured: true,
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "Le défi principal était de ne pas compromettre la qualité des données tout en assurant une anonymisation complète pour respecter les exigences RGPD."
        },
        {
          icon: 'CheckCircle2',
          title: "L'outil utilisé",
          text: "L'utilisation de l'Outil d’Anonymisation Solis a permis de garantir la conformité aux exigences RGPD tout en anonymisant efficacement les données.",
        },
        {
          icon: 'CheckCircle2',
          title: "Le fonctionnement de l'outil",
          text: "l'ouil se structure en trois étapes : la configuration, l'exécution de l'anonymisation et la validation des résultats pour s'assurer que les données sont correctement anonymisées tout en restant utilisables pour les analyses techniques./n 1. Les tableau csv ranger par modules listant le comportement et les champs à anonymiser./n 2. Les logs d'execution de l'outil permettant de suivre le processus d'anonymisation et de détecter d'éventuelles erreurs.<br> 3. le dossier de parametrage de l'outil permetant de configurer les modules à traiter, les parametre fonctionnels et techniques de l'outil. ",
          images: [
            dossierAno,
            fichierParamAno,
          ]
        },
        {
          icon: 'CheckCircle2',
          title: "Le traitement des données",
          text: "Les regles d'anonymisation sont définies dans un fichier csv. ",
          images: [
            csvAno,
            listCsv,
          ]
        },
        {
          icon: 'CheckCircle2',
          title: "Les logs",
          text: "Les logs d'exécution de l'outil permettent de suivre le processus d'anonymisation et de détecter d'éventuelles erreurs./n 1. le nom du modul avec la version et le chemain du csv utilisé /n 2. liste des traitement effectuer avec le nom de la table la colone traité et le type d'anonymisation appliqué /n 3. le nombre de ligne traité et le temps d'execution du traitement",
          images: [
            logAno,
            listLogs,
          ]
        },
        {
          icon: 'CheckCircle2',
          title: "Une fois anonymisé",
          text: "Une fois les données anonymisées, elles sont validées pour s'assurer qu'elles sont conformes aux exigences RGPD tout en restant utilisables pour les analyses techniques.",
          images: [
            resultAno,
          ]
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "j'ai pu me confronter à la gestion de données sensibles et à l'importance de l'anonymisation pour protéger la vie privée des individus tout en permettant l'analyse de données techniques. J'ai également appris à utiliser des outils d'anonymisation et à configurer des règles d'anonymisation pour garantir la conformité aux exigences RGPD. Et j'ai pu creer des requetes sql pour réaliser des analyse de données anonymisées et valider les résultats de l'anonymisation. Ce projet m'a permis de valider les compétences : recenser et identifier les ressources numériques, exploiter des référentiels, normes et standards adoptés par le prestataire informatique, gérer des sauvegardes, participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux economiques.",
        }
      ],
      technologies: ["bash", "csv", "sql"],
      features: [
        "Visualisation de données",
        "configuration flexible de l'anonymisation",
        "creation de requetes SQL pour l'anonymisation",
        "validation des données anonymisées",
        "respect des exigences RGPD",
        "Configuration de l'outil d'anonymisation"
      ],
      validatedSkills: ["bloc1-1", "bloc1-3"],
    }
  },
  /* Maquette Site Vidéaste */
  {
    id: "maquette-site-videaste",
    title: "Maquette Site Vidéaste",
    description: "Création d'une maquette de site web pour un vidéaste, mettant en avant son portfolio et ses services de manière élégante et moderne.",
    longDescription: "Une maquette de site web pour un vidéaste, conçue pour présenter son portfolio et ses services de manière élégante et moderne.",
    image: fuckcops,
    category: "Perso",
    tags: ["Développement Web", "UI/UX Design"],
    live: "https://fuckcops-prod.vercel.app/#",
    github: "",
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "créer un design moderne qui met en valeur le travail de l'artiste tout en offrant une expérience utilisateur fluide."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "developement dune page statique répondant aux besoins du client, avec une attention particulière portée à la typographie, à la mise en page et à l'optimisation pour les appareils mobiles."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à analyser les besoins des utilisateurs pour créer selon leurs attentes et de gerer un systeme de trie et de filtrage de données en temps réel pour une expérience utilisateur optimale."
        }
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "filtre de projets par catégorie",
        "animation survole des features",
        "Design épuré et moderne",
        "responsive pour tous les appareils"
      ],
      validatedSkills: [],
    }
  },
  /*Recette Only office*/
  {
    id: "recette-only-office",
    title: "Recette Only Office",
    description: "Recette de la suite bureautique Only Office pour valider les fonctionnalités et assurer la qualité du produit avant sa montée de version en production.",
    longDescription: "Recette de Only Office utiiliser dans la visioneuse GED, afin d'effectuer des tests de validation et de non régression pour assurer la qualité du produit avant sa montée de version en production.",
    image: "https://placehold.co/600x400",
    category: "Entreprise",
    tags: ["Test", "Validation"],
    live: "",
    github: "",
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "Effectuer des tests de validation et de non régression pour assurer la qualité du produit avant sa montée de version en production."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "Mise en place d'une procédure de recette pour la suite bureautique Only Office, incluant des tests fonctionnels et de performance, en creant un tableau excel afin de suivre et de répertorier les résultats."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à élaborer une stratégie de test efficace pour valider les fonctionnalités d'un produit, à identifier et à documenter les problèmes rencontrés lors des tests, et à collaborer avec les équipes pour assurer la résolution rapide des problèmes identifiés. ce qui ma permis de valider la compétence de realiser les tests d'intégration et d'acceptation d'un service. "
        },
      ],
      technologies: ["Only Office", "Excel"],
      features: [
        "Organisation de tests de validation",
        "Identification et documentation des problèmes",
        "Collaboration avec les équipes pour la résolution des problèmes",
        "Suivi des résultats de test dans un tableau Excel"

      ],
      validatedSkills: ["bloc1-5"],
    }
  },
  /* Creation de support vidéo de présentation d'application */
  {
    id: "creation-support-video",
    title: "Création de support vidéo de présentation d'application",
    description: "Création de supports vidéo pour présenter les fonctionnalités et l'utilisation d'application.",
    longDescription: "Réalisation de vidéos explicatives pour démontrer les fonctionnalités et l'utilisation de SAP BO , et de Solis afin de faciliter la compréhension et l'adoption par les utilisateurs. En lien avec l'équipe responsable des supports de formation, j'ai créé des vidéos démonstratives pour présenter les fonctionnalités et l'utilisation de SAP BO et de Solis, en utilisant des techniques de création de contenu adaptées pour rendre les vidéos claires et engageantes.",
    image: "https://placehold.co/600x400",
    category: "Entreprise",
    tags: ["Création de contenu"],
    live: "",
    github: "",
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "Créer des supports vidéo pour présenter les fonctionnalités et l'utilisation de SAP BO, afin de faciliter la compréhension et l'adoption par les utilisateurs."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "Réalisation de vidéos explicatives pour démontrer les fonctionnalités et l'utilisation de SAP BO, et de Solis, en respectant les directives de l'équipe responsable des supports de formation et en dynamisant les contenus pour les rendre clairs et engageants."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à mettre en place un cahier des charges avec les équipes pour définir les objectifs et les attentes des vidéos, à utiliser des techniques de création de contenu en respectant la charte graphique, de rédiger un story board afin de structurer les vidéos de manière logique et cohérente. Ce qui ma permis de valider la compétence accompagner les utilisateurs dans la mise en place d'un nouveau service."
        },
      ],
      technologies: ["SAP BO", "Solis", "Clipchamp"],
      features: [
        "Création de supports vidéo démonstratifs",
        "Utilisation de techniques de création de contenu adaptées",
        "Collaboration avec les équipes pour assurer la qualité des vidéos",
        "Facilitation de la compréhension et de l'adoption par les utilisateurs"

      ],
      validatedSkills: ["bloc1-5"],
    }
  },
  /*Rédaction d'un courrier Jasper Soft */
  {
    id: "redaction-courrier-jasper-soft",
    title: "Rédaction d'un courrier Jasper Soft",
    description: "Rédaction de courriers pour Jasper Soft.",
    longDescription: "Rédaction de courriers pour Jasper afin que les équipes métiers puissent generer des courier avec des données récuperer automatiquement depuis la base de données solis. cela permet une normalisatiion des courriers et une facilitation de la communication et de la compréhension des informations pour les utilisateurs.",
    image: "https://placehold.co/600x400",
    category: "Entreprise",
    tags: ["jasper soft", "sql"],
    live: "",
    github: "",
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "Rédiger des courriers pour Jasper Soft afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "Création de requêtes SQL pour récupérer automatiquement les données nécessaires depuis la base de données Solis et intégration de ces données dans des modèles de courriers Jasper Soft, permettant ainsi une normalisation des courriers et une facilitation de la communication et de la compréhension des informations pour les utilisateurs."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à rédiger des requêtes SQL pour extraire des données spécifiques de la base de données Solis, à créer des modèles de courriers dans Jasper Soft en intégrant les données récupérées, et à collaborer avec les équipes métiers pour comprendre leurs besoins en matière de communication et de présentation des informations. Ce qui ma permis de valider les compétences : accompagner les utilisateurs dans la mise en place d'un nouveau service, collecter suivre et orienter des demandes, participer à la valorisation de l'image de l'organisation sur les médias numériques.",
          
        },
      ],
      technologies: ["Jasper Soft", "Solis", "SQL"],
      features: [
        "Création de modèles de courriers Jasper Soft",
        "Rédaction de requêtes SQL pour extraire des données spécifiques",
        "Collaboration avec les équipes métiers pour comprendre leurs besoins",
        "Facilitation de la communication et de la compréhension des informations pour les utilisateurs"

      ],
      validatedSkills: ["bloc1-2", "bloc1-3", "bloc1-5"],
    }
  },
];
