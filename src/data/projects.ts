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
    challenge?: string;
    solution?: string;
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
      challenge: "Le défi principal était de gérer de grands volumes de données en temps réel sans compromettre la fluidité de l'interface utilisateur.",
      solution: "L'utilisation de D3.js pour le rendu des graphiques et de WebWorkers pour le traitement des données en arrière-plan a permis d'atteindre les objectifs de performance.",
      technologies: ["React 18", "D3.js", "Tailwind CSS", "Express", "Socket.io"],
      features: [
        "Visualisation de données en temps réel",
        "Filtres personnalisables",
        "Exportation de rapports PDF/CSV",
        "Mode sombre/clair automatique"
      ]
    }
  },
  {
    id: "maquette-site-videaste",
    title: "Maquette Site Vidéaste",
    description: "Création d'une maquette de site web pour un vidéaste, mettant en avant son portfolio et ses services de manière élégante et moderne.",
    longDescription: "Une maquette de site web pour un vidéaste, conçue pour présenter son portfolio et ses services de manière élégante et moderne.",
    image: "/src/assets/image_fuckcopsProd.png",
    tags: ["Développement Web", "UI/UX Design"],
    live: "https://fuckcops-prod.vercel.app/#",
    github: "#",
    details: {
      challenge: "créer un design moderne qui met en valeur le travail de l'artiste tout en offrant une expérience utilisateur fluide.",
      solution: "developement dune page statique répondant aux besoins du client, avec une attention particulière portée à la typographie, à la mise en page et à l'optimisation pour les appareils mobiles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "filtre de projets par catégorie",
        "animation survole des features",
        "Design épuré et moderne",
        "responsive pour tous les appareils"
      ],
    }
  },
  {
    id: "projet-2",
    title: "Projet 2",
    description: "Modern UI for interacting with LLMs, featuring streaming responses and markdown support.",
    longDescription: "Interface utilisateur moderne pour interagir avec des modèles de langage (LLM), offrant des réponses en streaming et un support complet du Markdown.",
    image: "https://picsum.photos/seed/ai/800/450",
    tags: ["React", "Gemini API", "Framer Motion"],
    live: "#",
    github: "#",
    details: {
      challenge: "Gérer l'affichage des réponses en streaming de manière fluide et esthétique.",
      solution: "Utilisation de Framer Motion pour les animations et d'un parseur Markdown personnalisé pour un rendu instantané.",
      technologies: ["React", "Google Gemini API", "Framer Motion", "Tailwind CSS"],
      features: [
        "Réponses en temps réel (streaming)",
        "Historique des conversations local",
        "Support du code syntax highlighting",
        "Interface responsive et minimaliste"
      ]
    }
  }
];
