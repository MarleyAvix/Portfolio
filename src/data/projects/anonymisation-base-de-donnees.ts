import type { Project } from './types';
import outilAno from '../../assets/outilAno.webp';
import dossierAno from '../../assets/dossierAno.webp';
import fichierParamAno from '../../assets/fichierParametrageAno.webp';
import csvAno from '../../assets/csvAno.webp';
import listCsv from '../../assets/listCsv.webp';
import logAno from '../../assets/resultLog.webp';
import listLogs from '../../assets/listLogs.webp';
import resultAno from '../../assets/resultatAno.webp';

/* Anonymisation base de données */
export const anonymisationBaseDeDonneesProject: Project = {
  id: 'anonymisation-base-de-donnees',
  title: 'Anonymisation de base de données',
  description:
    "Projet d'anonymisation de la base de données SOLIS pour des analyses techniques, tout en respectant les exigences RGPD.",
  longDescription:
    "Le projet consiste à anonymiser entièrement la base de données SOLIS afin de la transmettre à l'éditeur Arche MC2 pour des analyses techniques, tout en protégeant les données personnelles conformément au RGPD.\n\nL'anonymisation est réalisée sur l'environnement INTEG, à l'aide de l'Outil d'Anonymisation Solis.",
  image: 'https://placehold.co/600x400?text=Anonymisation+de+base+de+donnees', // Remplace par ta variable d'image
  category: 'Entreprise',
  tags: ['SQL', 'RGPD', 'Anonymisation'],
  live: '',
  github: '',
  featured: true,
  details: {
    detailImage: outilAno,
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le Défi',
        text: 'Le défi principal était de ne pas compromettre la qualité des données tout en assurant une anonymisation complète pour respecter les exigences RGPD.',
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
        images: [dossierAno, fichierParamAno],
      },
      {
        icon: 'CheckCircle2',
        title: 'Le traitement des données',
        text: "Les règles d'anonymisation sont définies dans un fichier CSV.",
        images: [csvAno, listCsv],
      },
      {
        icon: 'CheckCircle2',
        title: 'Les logs',
        text: "Les logs d'exécution de l'outil permettent de suivre le processus d'anonymisation et de détecter d'éventuelles erreurs.\n\n1. Le nom du module, la version et le chemin du CSV utilisé.\n2. La liste des traitements effectués: nom de la table, colonne traitée et type d'anonymisation appliqué.\n3. Le nombre de lignes traitées et le temps d'exécution du traitement.",
        images: [logAno, listLogs],
      },
      {
        icon: 'CheckCircle2',
        title: 'Une fois anonymisé',
        text: "Une fois les données anonymisées, elles sont validées pour s'assurer qu'elles sont conformes aux exigences RGPD tout en restant utilisables pour les analyses techniques.",
        images: [resultAno],
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "J'ai pu me confronter à la gestion de données sensibles et à l'importance de l'anonymisation pour protéger la vie privée des individus tout en permettant l'analyse de données techniques.\n\nJ'ai également appris à utiliser des outils d'anonymisation, à configurer des règles conformes au RGPD, et à créer des requêtes SQL pour analyser des données anonymisées puis valider les résultats.\n\nCe projet m'a permis de valider les compétences suivantes:\n- Recenser et identifier les ressources numériques\n- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique\n- Gérer des sauvegardes\n- Participer à la valorisation de l'image de l'organisation sur les médias numériques, en tenant compte du cadre juridique et des enjeux économiques",
      },
    ],
    technologies: ['Bash', 'CSV', 'SQL'],
    features: [
      'Visualisation de données',
      "Configuration flexible de l'anonymisation",
      "Création de requêtes SQL pour l'anonymisation",
      'Validation des données anonymisées',
      'Respect des exigences RGPD',
      "Configuration de l'outil d'anonymisation",
    ],
    validatedSkills: ['bloc1-1', 'bloc1-3'],
  },
};
