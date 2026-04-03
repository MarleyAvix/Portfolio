import fuckcops from '../assets/FuckcopsProd.png';
import outilAno from '../assets/outilAno.png';
import dossierAno from '../assets/dossierAno.png';
import listCsv from '../assets/listCsv.png';
import csvAno from '../assets/csvAno.png';
import fichierParamAno from '../assets/fichierParametrageAno.png';
import logAno from '../assets/resultLog.png';
import listLogs from '../assets/listLogs.png';
import resultAno from '../assets/resultatAno.png';
import fairviewHome from '../assets/fairviewHome.png';
import paletteCouleurs from '../assets/paletteCouleurs.png';
import lighthouseScore from '../assets/lighthouse.png';

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
    title: "Anonymisation de base de données",
    description: "Projet d'anonymisation de la base de données SOLIS pour des analyses techniques, tout en respectant les exigences RGPD.",
    longDescription: "Le projet consiste à anonymiser entièrement la base de données SOLIS afin de la transmettre à l'éditeur Arche MC2 pour des analyses techniques, tout en protégeant les données personnelles conformément au RGPD.\n\nL'anonymisation est réalisée sur l'environnement INTEG, à l'aide de l'Outil d'Anonymisation Solis.",
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
          text: "L'outil se structure en trois étapes: la configuration, l'exécution de l'anonymisation et la validation des résultats, pour s'assurer que les données sont correctement anonymisées tout en restant utilisables pour les analyses techniques.\n\n1. Les tableaux CSV, rangés par modules, listant les comportements et les champs à anonymiser.\n2. Les logs d'exécution de l'outil, permettant de suivre le processus d'anonymisation et de détecter d'éventuelles erreurs.\n3. Le dossier de paramétrage de l'outil, permettant de configurer les modules à traiter ainsi que les paramètres fonctionnels et techniques.",
          images: [
            dossierAno,
            fichierParamAno,
          ]
        },
        {
          icon: 'CheckCircle2',
          title: "Le traitement des données",
          text: "Les règles d'anonymisation sont définies dans un fichier CSV.",
          images: [
            csvAno,
            listCsv,
          ]
        },
        {
          icon: 'CheckCircle2',
          title: "Les logs",
          text: "Les logs d'exécution de l'outil permettent de suivre le processus d'anonymisation et de détecter d'éventuelles erreurs.\n\n1. Le nom du module, la version et le chemin du CSV utilisé.\n2. La liste des traitements effectués: nom de la table, colonne traitée et type d'anonymisation appliqué.\n3. Le nombre de lignes traitées et le temps d'exécution du traitement.",
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
          text: "J'ai pu me confronter à la gestion de données sensibles et à l'importance de l'anonymisation pour protéger la vie privée des individus tout en permettant l'analyse de données techniques.\n\nJ'ai également appris à utiliser des outils d'anonymisation, à configurer des règles conformes au RGPD, et à créer des requêtes SQL pour analyser des données anonymisées puis valider les résultats.\n\nCe projet m'a permis de valider les compétences suivantes:\n- Recenser et identifier les ressources numériques\n- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique\n- Gérer des sauvegardes\n- Participer à la valorisation de l'image de l'organisation sur les médias numériques, en tenant compte du cadre juridique et des enjeux économiques",
        }
      ],
      technologies: ["Bash", "CSV", "SQL"],
      features: [
        "Visualisation de données",
        "Configuration flexible de l'anonymisation",
        "Création de requêtes SQL pour l'anonymisation",
        "Validation des données anonymisées",
        "Respect des exigences RGPD",
        "Configuration de l'outil d'anonymisation"
      ],
      validatedSkills: ["bloc1-1", "bloc1-3"],
    }
  },
  /* Maquette Site Vidéaste */
  {
    id: "maquette-site-videaste",
    title: "Maquette Site Vidéaste",
    description: "Création d'une maquette de site web pour un vidéaste.",
    longDescription: "Création d'une maquette de site web pour un vidéaste, mettant en avant son portfolio et ses services de manière élégante et moderne.",
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
          text: "Créer un design moderne qui met en valeur le travail de l’artiste tout en offrant une expérience utilisateur fluide."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "Développement d’une page statique répondant aux besoins du client, avec une attention particulière portée à la typographie, à la mise en page et à l’optimisation mobile."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m’a appris à analyser les besoins des utilisateurs pour créer selon leurs attentes, ainsi qu’à gérer un système de tri et de filtrage de données en temps réel pour offrir une expérience utilisateur optimale."
        }
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Filtre de projets par catégorie",
        "Animation au survol des sections",
        "Design épuré et moderne",
        "Responsive pour tous les appareils"
      ],
      validatedSkills: [],
    }
  },
  /* Recette Only Office */
  {
    id: "recette-only-office",
    title: "Recette Only Office",
    description: "Recette de la suite bureautique Only Office pour valider les fonctionnalités et assurer la qualité du produit avant sa montée de version en production.",
    longDescription: "Recette de Only Office utilisée dans la visionneuse GED, afin d'effectuer des tests de validation et de non-régression pour assurer la qualité du produit avant sa montée de version en production.",
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
          text: "Mise en place d'une procédure de recette pour la suite bureautique Only Office, incluant des tests fonctionnels et de performance, en créant un tableau Excel afin de suivre et de répertorier les résultats."
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à élaborer une stratégie de test efficace pour valider les fonctionnalités d'un produit, à identifier et à documenter les problèmes rencontrés lors des tests, et à collaborer avec les équipes pour assurer une résolution rapide des anomalies.\n\nCe projet m'a permis de valider la compétence suivante:\n- Réaliser les tests d'intégration et d'acceptation d'un service."
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
  /* Création de support vidéo de présentation d'application */
  {
    id: "creation-support-video",
    title: "Création de support vidéo de présentation d'application",
    description: "Création de supports vidéo pour présenter les fonctionnalités et l'utilisation d'applications.",
    longDescription: "Réalisation de vidéos explicatives pour démontrer les fonctionnalités et l'utilisation de SAP BO et de Solis, afin de faciliter la compréhension et l'adoption par les utilisateurs.\n\nEn lien avec l'équipe responsable des supports de formation, j'ai créé des vidéos démonstratives en utilisant des techniques de création de contenu adaptées pour rendre les vidéos claires et engageantes.",
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
          text: "Ce projet m'a appris à mettre en place un cahier des charges avec les équipes pour définir les objectifs et les attentes des vidéos, à utiliser des techniques de création de contenu en respectant la charte graphique, et à rédiger un storyboard afin de structurer les vidéos de manière logique et cohérente.\n\nCe projet m'a permis de valider la compétence suivante:\n- Accompagner les utilisateurs dans la mise en place d'un nouveau service."
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
  /* Rédaction d'un courrier Jasper Soft */
  {
    id: "redaction-courrier-jasper-soft",
    title: "Rédaction d'un courrier Jasper Soft",
    description: "Rédaction de courriers pour Jasper Soft.",
    longDescription: "Rédaction de courriers pour Jasper afin que les équipes métiers puissent générer des courriers avec des données récupérées automatiquement depuis la base de données Solis.\n\nCela permet une normalisation des courriers et facilite la communication ainsi que la compréhension des informations pour les utilisateurs.",
    image: "https://placehold.co/600x400",
    category: "Entreprise",
    tags: ["Jasper Soft", "SQL"],
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
          text: "Ce projet m'a appris à rédiger des requêtes SQL pour extraire des données spécifiques de la base de données Solis, à créer des modèles de courriers dans Jasper Soft en intégrant les données récupérées, et à collaborer avec les équipes métiers pour comprendre leurs besoins en matière de communication et de présentation des informations.\n\nCe projet m'a permis de valider les compétences suivantes:\n- Accompagner les utilisateurs dans la mise en place d'un nouveau service\n- Collecter, suivre et orienter des demandes\n- Participer à la valorisation de l'image de l'organisation sur les médias numériques",

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
  {
    id: "fairview-rp",
    title: "Fairview RP",
    description: "Conception et développement du site web vitrine et communautaire pour un serveur de jeu Roleplay.",
    longDescription: "Le projet visait à créer une plateforme centrale pour les joueurs de Fairview RP. Le site permet non seulement de présenter l'univers du serveur, mais aussi de gérer les interactions communautaires, les candidatures des joueurs et d'offrir une interface immersive fidèle à l'identité visuelle du projet.",
    image: fairviewHome, // Remplace par ta variable d'image
    category: "Perso",
    tags: ["web", "front-end", "UI/UX", "Community"],
    live: "https://fairviewrp.marley-avix.fr/", // À remplir si disponible
    github: "https://github.com/MarleyAvix/FairviewRpSiteWeb",
    featured: false,
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "La Vision",
          text: "L'objectif était de créer une porte d'entrée professionnelle et immersive. Il fallait concilier un design moderne avec les codes esthétiques du gaming pour instaurer une confiance immédiate chez les nouveaux joueurs."
        },
        {
          icon: 'Lightbulb',
          title: "Identité Visuelle & UI",
          text: "Le site utilise une charte graphique sombre avec des accents colorés pour rappeler l'ambiance urbaine du serveur. L'interface a été pensée pour être 'responsive', offrant une expérience fluide sur mobile comme sur PC.",
          images: [
            paletteCouleurs,
          ]
        },
        {
          icon: 'FolderKanban',
          title: "Architecture du site",
          text: "Le site se compose de plusieurs sections stratégiques pour accompagner le parcours de l'utilisateur :\n\n1. Une landing page dynamique présentant les fonctionnalités exclusives du serveur.\n2. Un espace règlement détaillé pour assurer la qualité du Roleplay.\n3. Un système de redirection vers les plateformes communautaires (Discord, Boutique).",
        },
        {
          icon: 'Code',
          title: "Développement Technique",
          text: "Pour garantir des performances optimales et une maintenance aisée, j'ai utilisé des technologies modernes permettant une mise à jour rapide des informations du serveur.",
          images: [
            lighthouseScore,
          ]
        },
        {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a permis de travailler sur l'expérience utilisateur (UX) dans un contexte passionné. J'ai appris à traduire les besoins d'une communauté en fonctionnalités techniques concrètes.",
        }
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Design immersif et responsive",
        "Animations fluides au scroll",
        "Optimisation SEO",
        "Gestion des actualités",
        "Intégration d'API tierces (Discord/Status Serveur)"
      ],
      validatedSkills: [], // À adapter selon ton référentiel
    }
  }
];
