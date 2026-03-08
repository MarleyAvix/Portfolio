import fuckcops from '../assets/FuckcopsProd.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  live: string;
  github: string;
  featured?: boolean;
  details?: {
    content?: {
      icon?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' |'Brain' | 'Code' | 'FolderKanban';
      title: string;
      text: string;
    }[];
    technologies?: string[];
    features?: string[];
    screenshots?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "tableau-e4-e5",
    title: "Tableau E4/E5",
    description: "Enterprise dashboard for real-time data visualization and analytics. Built with high performance in mind.",
    longDescription: "Ce projet est un tableau de bord d'entreprise conçu pour la visualisation de données en temps réel. Il permet aux utilisateurs de suivre des indicateurs de performance clés (KPI) à travers des graphiques interactifs et des rapports détaillés.",
    image: "https://picsum.photos/seed/dashboard/800/450",
    tags: ["React", "D3.js", "Tailwind", "Node.js"],
    live: "#",
    github: "#",
    featured: true,
    details: {
      content: [
        {
          icon: 'Lightbulb',
          title: "Le Défi",
          text: "Le défi principal était de gérer de grands volumes de données en temps réel sans compromettre la fluidité de l'interface utilisateur."
        },
        {
          icon: 'CheckCircle2',
          title: "La Solution",
          text: "L'utilisation de D3.js pour le rendu des graphiques et de WebWorkers pour le traitement des données en arrière-plan a permis d'atteindre les objectifs de performance."
        },
           {
          icon: 'Brain',
          title: "Ce que j'ai appris",
          text: "Ce projet m'a appris à analyser les besoins des utilisateurs pour créer selon leurs attentes et de gerer un systeme de trie et de filtrage de données en temps réel pour une expérience utilisateur optimale."
        }
      ],
      technologies: ["React 18", "D3.js", "Tailwind CSS", "Express", "Socket.io"],
      features: [
        "Visualisation de données en temps réel",
        "Filtres personnalisables",
        "Exportation de rapports PDF/CSV",
        "Mode sombre/clair automatique"
      ],
    }
  },
  {
    id: "maquette-site-videaste",
    title: "Maquette Site Vidéaste",
    description: "Création d'une maquette de site web pour un vidéaste, mettant en avant son portfolio et ses services de manière élégante et moderne.",
    longDescription: "Une maquette de site web pour un vidéaste, conçue pour présenter son portfolio et ses services de manière élégante et moderne.",
    image: fuckcops,
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
    }
  },
];
