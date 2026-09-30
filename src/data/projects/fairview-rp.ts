import type { Project } from './types';
import fairviewHome from '../../assets/fairviewHome.webp';
import paletteCouleurs from '../../assets/paletteCouleurs.webp';
import lighthouseScore from '../../assets/lighthouse.webp';

export const fairviewRpProject: Project = {
  id: 'fairview-rp',
  title: 'Fairview RP',
  description: 'Conception et développement du site web vitrine et communautaire pour un serveur de jeu Roleplay.',
  longDescription:
    "Le projet visait à créer une plateforme centrale pour les joueurs de Fairview RP. Le site permet non seulement de présenter l'univers du serveur, mais aussi de gérer les interactions communautaires, les candidatures des joueurs et d'offrir une interface immersive fidèle à l'identité visuelle du projet.",
  image: fairviewHome,
  category: 'Perso',
  tags: ['Web', 'Front-end', 'UI/UX', 'Communauté'],
  live: 'https://fairviewrp.marley-avix.fr/',
  github: 'https://github.com/MarleyAvix/FairviewRpSiteWeb',
  featured: false,
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'La vision',
        text: "L'objectif était de créer une porte d'entrée professionnelle et immersive. Il fallait concilier un design moderne avec les codes esthétiques du gaming pour instaurer une confiance immédiate chez les nouveaux joueurs.",
      },
      {
        icon: 'Palette',
        title: 'Identité visuelle et interface',
        text: "Le site utilise une charte graphique sombre avec des accents colorés pour rappeler l'ambiance urbaine du serveur. L'interface a été pensée pour être « responsive », offrant une expérience fluide sur mobile comme sur PC.",
        images: [paletteCouleurs],
      },
      {
        icon: 'FolderKanban',
        title: 'Architecture du site',
        text: "Le site se compose de plusieurs sections stratégiques pour accompagner le parcours de l'utilisateur :\n\n1. Une landing page dynamique présentant les fonctionnalités exclusives du serveur.\n2. Un espace règlement détaillé pour assurer la qualité du Roleplay.\n3. Un système de redirection vers les plateformes communautaires (Discord, Boutique).",
      },
      {
        icon: 'Code',
        title: 'Développement technique',
        text: "Le site est développé avec React et TypeScript, construit avec Vite et navigué avec React Router. Cette base moderne garantit de bonnes performances (voir le score Lighthouse ci-dessous) et facilite la mise à jour des informations du serveur.",
        images: [lighthouseScore],
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a permis de travailler sur l'expérience utilisateur (UX) dans un contexte passionné. J'ai appris à traduire les besoins d'une communauté en fonctionnalités techniques concrètes.",
      },
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'React Router'],
    features: [
      'Design immersif et responsive',
      'Optimisation SEO',
      'Gestion des actualités',
    ],
  },
};
