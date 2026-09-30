import type { Project } from './types';
import moeviaVoyage from '../../assets/moeviaVoyage.webp';

/*Moévia voyage*/
export const moeviaVoyageProject: Project = {
  id: 'moevia-voyage',
  title: 'Moevia Voyage',
  description:
    'Conception et développement du site web Moevia Voyage sous Vue.js, de la définition du besoin à la mise en production.',
  longDescription:
    'Pilotage complet du projet web pour Moevia Voyage : recueil du besoin, rédaction du cahier des charges, co-conception du design avec la cliente et développement front-end réactif sous Vue.js.',
  image: moeviaVoyage, // Variable d'import de ton image/mockup
  category: 'Perso', // Ou "Entreprise" selon la façon dont tu catégorises tes projets clients / freelance
  tags: ['Vue.js', 'Gestion de Projet', 'UI/UX Design', 'Développement Web'],
  live: 'https://www.moeviavoyage.com',
  github: '',
  featured: true,
  details: {
    content: [
      {
        icon: 'FileText',
        title: 'Cadrage & Cahier des charges',
        text: "Définition des objectifs et recueil exhaustif des besoins de la cliente. Rédaction du cahier des charges fonctionnel et technique, structuration de l'arborescence et formalisation des attentes métier pour le service de voyage.",
      },
      {
        icon: 'Palette',
        title: 'Co-conception UI/UX & Design',
        text: "Collaboration étroite avec la cliente pour définir l'identité visuelle, la palette graphique et les maquettes d'interface. Priorité accordée à une expérience immersive, inspirante et fluide pour inciter à la prise de contact.",
      },
      {
        icon: 'Code',
        title: 'Développement & Organisation',
        text: "Mise en place d'une architecture modulaire basée sur Vue.js. Suivi de projet itératif avec des jalons réguliers de validation, garantissant le respect du planning et la conformité avec la maquette validée.",
      },
      {
        icon: 'Brain',
        title: 'Compétences mobilisées',
        text: 'Gestion de la relation client de bout en bout, traduction des besoins fonctionnels en spécifications techniques, découpage en composants réutilisables et optimisation des performances et du responsive design.',
      },
    ],
    technologies: [
      'Vue.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Figma', // Outil de design/maquettage si applicable
    ],
    features: [
      'Présentation immersive des offres et services de voyage',
      'Formulaire de demande de contact et de devis sur-mesure',
      'Architecture front-end en composants dynamiques et réutilisables',
      'Interface 100% responsive adaptée au mobile, tablette et desktop',
      'Optimisation du parcours utilisateur et des temps de chargement',
    ],
    validatedSkills: [
      'Recueillir, analyser et formaliser les besoins du client',
      'Concevoir une interface utilisateur ergonomique et accessible',
      "Planifier et assurer le suivi d'un projet web",
      'Développer une application front-end réactive avec Vue.js',
      "Déployer et assurer la mise en ligne d'une solution web",
    ],
  },
};
