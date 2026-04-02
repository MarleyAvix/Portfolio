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
  {
    id: "anonymisation-base-de-donnees",
    title: "Anonymisation base de données",
    description: "Projet d'anonymisation de la base de données SOLIS pour analyses techniques tout en respectant les exigences RGPD.",
    longDescription: "Le projet consiste à anonymiser entièrement la base de données SOLIS afin de pouvoir la transmettre à l’éditeur Arche MC2 pour analyses techniques, tout en protégeant les données personnelles conformément aux exigences RGPD. L’anonymisation est réalisée sur l’environnement INTEG, à l’aide de l’Outil d’Anonymisation Solis V2",
    image: outilAno,
    category: "Entreprise",
    tags: ["SQL", "RGPD", "Anonymisation"],
    live: "#",
    github: "#",
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
          icon: 'CheckCircle2',
          title: "Ce que j'ai appris",
          text: "j'ai pu me confronter à la gestion de données sensibles et à l'importance de l'anonymisation pour protéger la vie privée des individus tout en permettant l'analyse de données techniques. J'ai également appris à utiliser des outils d'anonymisation et à configurer des règles d'anonymisation pour garantir la conformité aux exigences RGPD. Et j'ai pu creer des requetes sql pour réaliser des analyse de données anonymisées et valider les résultats de l'anonymisation.",
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
      validatedSkills: ["bloc1-1", "bloc1-2"],
    }
  },
  {
    id: "maquette-site-videaste",
    title: "Maquette Site Vidéaste",
    description: "Création d'une maquette de site web pour un vidéaste, mettant en avant son portfolio et ses services de manière élégante et moderne.",
    longDescription: "Une maquette de site web pour un vidéaste, conçue pour présenter son portfolio et ses services de manière élégante et moderne.",
    image: fuckcops,
    category: "Perso",
    tags: ["Développement Web", "UI/UX Design"],
    live: "https://fuckcops-prod.vercel.app/#",
    github: "#",
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
];
