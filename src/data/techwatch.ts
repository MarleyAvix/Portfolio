export interface TechWatchItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  details?: {
    longDescription: string;
    content?: {
      icon?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' | 'Link' | 'Code' | 'ShieldCheck' | 'Server' | 'Cloud' | 'BookOpen' | 'Search' | 'AlertTriangle';
      title: string;
      text: string;
    }[];
  }
}

export const techWatchItems: TechWatchItem[] = [
  {
    id: "teck-sama-show",
    title: "Teck Sama Show: chaine YouTube dédiée à la technologie",
    category: "logiciels et hardware",
    date: "depuis 2020",
    excerpt: "Teck Sama Show est une chaîne YouTube dédiée à la technologie, couvrant des sujets allant des tests de materiel à de l'actualité technologique.",
    image: "/assets/Image_techSamaShow.png",
    details: {
      longDescription: "Teck Sama Show offre une analyse approfondie des dernières tendances technologiques, des critiques de produits et des discussions sur l'impact de la technologie dans notre vie quotidienne. La chaîne est appréciée pour son contenu informatif et divertissant, attirant une large audience de passionnés de technologie.",
      content: [
        {
          icon: 'Lightbulb',
          title: "La crise mondiale de la RAM",
          text: "En 2024, le marché de la RAM a été secoué par une pénurie mondiale, entraînant une hausse des prix et des retards dans la production de nouveaux appareils. Cette crise a mis en lumière les vulnérabilités de la chaîne d'approvisionnement mondiale et a incité les fabricants à chercher des alternatives pour répondre à la demande croissante. Sur la chaîne Teck Sama Show, j'ai exploré les causes de cette pénurie, et j'ai pu suivre l'évolution de la situation en temps réel."
        },
        {
          icon: 'Rocket',
          title: "Architecture processeur",
          text: "J'ai pu suivre à multiples reprises les annonces de nouvelles architectures de processeurs, notamment celles d'Intel et d'AMD. Ces annonces ont souvent été accompagnées de démonstrations de performances impressionnantes, suscitant l'enthousiasme de la communauté technologique. Sur Teck Sama Show, j'ai analysé ces annonces, discuté des implications pour les consommateurs et les professionnels, et comparé les différentes architectures pour aider les spectateurs à comprendre les avantages et les inconvénients de chaque option."
        },
        {
          icon: 'Link',
          title: "Lien de la chaine",
          text: "https://www.youtube.com/@TeckSamaShow"
        }
      ]
    }
  },
  {
    id: "webp-anim-vs-gif",
    title: "WebP animé vs GIF - Le guide pour enfin virer vos animations de 1987",
    category: "Web & Développement",
    date: "6 mars 2026",
    excerpt: "Analyse comparative des formats d'animation : pourquoi le WebP supplante définitivement le GIF en termes de performance et de rendu visuel.",
    image: "https://picsum.photos/seed/tech2/400/250",
    details: {
      longDescription: "L'évolution des standards du web impose une optimisation constante des assets. Cette veille technique explore la transition du format GIF vers le WebP animé, un format développé par Google qui allie la légèreté de la compression moderne à une qualité visuelle sans compromis (couleurs 24 bits et canal alpha).",
      content: [
        {
          icon: 'BookOpen',
          title: "Synthèse technique",
          text: "L'article souligne la fin d'une époque pour le GIF. Le WebP animé réduit le poids des fichiers de près de 90%, élimine les artefacts de transparence et optimise drastiquement le temps de chargement des pages sans sacrifier la fluidité."
        },
        {
          icon: 'Search',
          title: "Sourcing & Veille",
          text: "Le site de korben propose une news letter pour ne rien manquer de l'actualité."
        },
        {
          icon: 'Lightbulb',
          title: "Analyse critique",
          text: "J'ai identifié ici un levier direct d'amélioration du score Core Web Vitals (LCP). L'enjeu n'est pas seulement esthétique, il est stratégique pour le SEO et l'expérience utilisateur sur mobile."
        },
        {
          icon: 'CheckCircle2',
          title: "Organisation",
          text: "L'article est répertorié dans ma base Notion avec une documentation technique sur l'usage des fallbacks (balise <picture>) pour assurer une compatibilité totale sur les anciens navigateurs."
        },
        {
          icon: 'Rocket',
          title: "Résultats & Mise en pratique",
          text: "Utilisation systématique du WebP pour les animations. L'adoption de l'outil gif2webp me permet de convertir le patrimoine existant, garantissant des sites plus rapides et une bande passante préservée."
        },
        {
          icon: 'Link',
          title: "Source originale",
          text: "https://korben.info/webp-anime-vs-gif-transparence-couleurs.html"
        }
      ]
    }
  },
  {
    id: "shuffle-ai-redesign",
    title: "Shuffle - Quand 4 IA redesignent votre site (et c'est moche)",
    category: "IA et Design",
    date: "8 mars 2026",
    excerpt: "Analyse des limites de l'IA dans le webdesign : pourquoi l'automatisation du redesign ne remplace pas encore l'expertise humaine.",
    image: "https://picsum.photos/seed/tech3/400/250",
    details: {
      longDescription: "L'article de Korben explore l'outil Shuffle et ses fonctionnalités de redesign assisté par quatre modèles d'IA différents. Le constat est sans appel : si la technologie progresse, le résultat visuel et l'expérience utilisateur (UX) restent souvent incohérents. Cette veille souligne l'importance de garder un œil critique sur les outils de génération automatique qui, pour l'instant, peinent à respecter les standards de qualité professionnelle.",
      content: [
        {
          icon: 'BookOpen',
          title: "Synthèse technique",
          text: "L'outil Shuffle propose de transformer une structure de site via des modèles d'IA. L'article démontre que malgré la puissance de calcul, les IA échouent sur la hiérarchie visuelle, l'harmonie des couleurs et la pertinence contextuelle des éléments de design."
        },
        {
          icon: 'Search',
          title: "Sourcing & Veille",
          text: "Veille effectuée via Korben.info. Mon objectif ici est de suivre l'évolution des outils 'No-code' et 'AI-driven' pour évaluer leur maturité et leur viabilité dans un flux de production professionnel."
        },
        {
          icon: 'AlertTriangle',
          title: "Analyse critique",
          text: "Ce test prouve que l'IA est un assistant, pas un remplaçant. En tant que développeur, mon rôle est de comprendre ces outils pour gagner du temps sur des tâches répétitives, tout en restant le garant final de l'accessibilité et de l'esthétique du projet."
        },
        {
          icon: 'Lightbulb',
          title: "Prise de recul",
          text: "L'article rappelle que le 'design system' ne se résume pas à l'assemblage de composants, mais à une intention utilisateur que l'IA ne maîtrise pas encore. Cela renforce la valeur de l'expertise humaine en UI/UX."
        },
        {
          icon: 'Link',
          title: "Source originale",
          text: "https://korben.info/shuffle-ai-redesign-site-moche.html"
        }
      ]
    }
  },
  {
    id: "webhooks-proxy-tunnel",
    title: "Webhooks Proxy Tunnel – Vos webhooks en local sans payer Ngrok",
    category: "Outils de développement",
    date: "8 mars 2026",
    excerpt: "Optimisation de l'environnement de développement local : comment s'affranchir des limites de Ngrok pour tester ses webhooks gratuitement et de manière illimitée.",
    image: "https://picsum.photos/seed/tunnel/400/250",
    details: {
      longDescription: "Le développement d'applications intégrant des services tiers (Stripe, GitHub, Shopify) nécessite souvent la réception de webhooks en environnement local. L'article de Korben présente 'Webhooks Proxy Tunnel', une alternative Open Source et auto-hébergée aux services payants comme Ngrok ou Tailscale Funnel. Cette solution permet de créer un pont sécurisé entre le web et un serveur local sans subir les restrictions de sessions ou de sous-domaines aléatoires.",
      content: [
        {
          icon: 'BookOpen',
          title: "Synthèse technique",
          text: "L'outil repose sur un système de relais (proxy) qui redirige les requêtes HTTP entrantes vers une machine locale derrière un NAT ou un pare-feu. Contrairement aux versions gratuites de services tiers, il offre une persistance des URLs, ce qui évite de reconfigurer les endpoints des APIs externes à chaque redémarrage."
        },
        {
          icon: 'Search',
          title: "Sourcing & Veille",
          text: "Veille technologique issue de Korben.info. Ma démarche ici est de sourcer des outils 'Self-hosted' et Open Source pour réduire la dépendance aux services tiers (SaaS) et maîtriser l'infrastructure de bout en bout."
        },
        {
          icon: 'Lightbulb',
          title: "Analyse critique",
          text: "J'ai identifié cet outil comme un gain de productivité immédiat pour mes phases de debug. Pouvoir tester des tunnels de paiement ou des automations sans limite de temps ni coût récurrent est un avantage majeur pour la phase de prototypage."
        },
        {
          icon: 'CheckCircle2',
          title: "Organisation",
          text: "Article ajoutée à ma base de connaissance Notion."
        },
        {
          icon: 'Link',
          title: "Source originale",
          text: "https://korben.info/webhooks-proxy-tunnel-local-ngrok.html"
        }
      ]
    }
  },
];
