
import techSamaShowRam from '../assets/TechSamaShowRam.png';
import siteKorbenGif from '../assets/siteKorbenGif.png';
import siteKorbenProxy from '../assets/siteKorbenProxy.png';
import siteKorbenShuffle from '../assets/siteKorbenShuffle.png';

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
      icon?: 'Lightbulb' | 'CheckCircle2' | 'Rocket' | 'Link' | 'Code' | 'ShieldCheck' | 'Server' | 'Cloud' | 'BookOpen' | 'Search' | 'AlertTriangle' | 'TrendingDown' | 'Laptop';
      title: string;
      text: string;
      images?: string[];
    }[];
  }
}

export const techWatchItems: TechWatchItem[] = [
  {
    id: "webp-anim-vs-gif",
    title: "WebP animé vs GIF - Le guide pour enfin virer vos animations de 1987",
    category: "Web & Développement",
    date: "6 mars 2026",
    excerpt: "Analyse comparative des formats d'animation : pourquoi le WebP supplante définitivement le GIF en termes de performance et de rendu visuel.",
    image: siteKorbenGif,
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
    image: siteKorbenShuffle,
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
          text: "https://korben.info/shuffle-dev-redesign-ia-site-web.html"
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
    image: siteKorbenProxy,
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
  {
    id: "tech-sama-349-ram-macbook",
    title: "Tech_Sama Show #349 : Accalmie sur les prix de la RAM et offensive Apple",
    category: "Hardware & Marché",
    date: "8 mars 2026",
    excerpt: "Analyse des tendances hardware : baisse des prix de la mémoire DDR5, arrivée de puces chinoises compétitives et rumeurs d'un MacBook à 599$.",
    image: techSamaShowRam,
    details: {
      longDescription: "Dans cet épisode, Tech_Sama décrypte une phase de transition majeure du marché hardware. D'un côté, la démocratisation de la DDR5 s'accélère avec l'arrivée de fabricants comme CXMT (puces chinoises) proposant des performances élevées (6000 MT/s) à prix réduit. De l'autre, Apple semble préparer une réponse agressive au marché des Chromebooks avec un MacBook d'entrée de gamme (potentiellement le 'MacBook Neo') positionné sous la barre des 600$.",
      content: [
        {
          icon: 'TrendingDown',
          title: "Marché de la RAM",
          text: "Observation d'une baisse réelle sur la DDR5. L'émergence de nouveaux acteurs comme CXMT casse le duopole habituel, permettant d'envisager des configurations 32 Go ou 64 Go à des tarifs bien plus accessibles pour les serveurs et stations de travail."
        },
        {
          icon: 'Laptop',
          title: "Stratégie Apple",
          text: "L'éventualité d'un MacBook à 599$ (hors taxes) marque un tournant. Même avec 8 Go de RAM, ce positionnement vise à capturer le secteur éducatif et les budgets serrés, bousculant l'écosystème Windows/ChromeOS sur l'entrée de gamme."
        },
        {
          icon: 'Search',
          title: "Méthode de veille",
          text: "Effectue un suivi hebdomadaire via des canaux spécialisés (notamment Tech_Sama sur YouTube). Cette démarche me permet de maintenir une connaissance actualisée des évolutions hardware (composants, performances) et des dernières actualités logicielles."
        },
        {
          icon: 'Lightbulb',
          title: "Analyse critique",
          text: "Le prix de la RAM est le premier indicateur du coût futur des services Cloud et des serveurs physiques. Surveiller cette baisse permet d'optimiser le timing des investissements infrastructurels."
        },
        {
          icon: 'Link',
          title: "Source originale",
          text: "https://www.youtube.com/watch?v=xayK66z63Xw"
        }
      ]
    }
  },
];
