import type { Project } from './types';
import mcdrawMcd from '../../assets/mcdrawMcd.webp';
import mcdrawMld from '../../assets/mcdrawMld.webp';
import mcdrawPlanSite from '../../assets/mcdrawPlanSite.webp';
import mcdrawApi from '../../assets/mcdrawApi.webp';
import mcdrawSequence from '../../assets/mcdrawSequence.webp';

/* MCDraw */
export const mcdrawProject: Project = {
  id: 'mcdraw',
  title: 'MCDraw, modélisation Merise en ligne',
  description:
    "Application web open source de modélisation Merise : du MCD au MLD, puis au SQL et au code ORM, directement dans le navigateur.",
  longDescription:
    "MCDraw est un outil de diagrammes léger qui fonctionne dans le navigateur, sans installation ni compte. Il permet de dessiner un MCD, d'en dériver automatiquement le MLD, puis d'exporter le schéma en SQL, en code ORM ou en données de test.\n\nL'outil s'étend à d'autres types de documents (plan de site, carte mentale, diagramme de séquence, description d'API REST) qui partagent la même interface et le même moteur d'édition.",
  image: mcdrawMcd,
  category: 'Perso',
  tags: ['Vue 3', 'TypeScript', 'Merise', 'Docker'],
  live: 'https://mcdraw.marley-avix.fr',
  github: 'https://github.com/MarleyAvix/MCDraw',
  featured: true,
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'La problématique',
        text: "Modéliser une base de données en Merise oblige souvent à jongler entre un outil de dessin, un calcul manuel du MLD et une écriture à la main du SQL. Les outils existants sont soit lourds à installer, soit payants, soit peu adaptés à la notation française (entités, associations, cardinalités, identifiants relatifs).\n\nL'objectif de MCDraw : un outil gratuit, accessible depuis un simple navigateur, qui garde la modélisation et la base de données cohérentes entre elles.",
        images: [mcdrawMcd],
      },
      {
        icon: 'Database',
        title: 'Modélisation Merise et génération',
        text: "- MCD : entités, associations, cardinalités, identifiants relatifs, héritage et validation en direct.\n\n- MLD calculé automatiquement à partir du MCD, avec clés primaires, clés étrangères et tables d'association, et vues ERD et UML.\n\n- Exports SQL (PostgreSQL, MySQL/MariaDB, SQLite, SQL Server), code ORM (C# EF Core, Prisma, TypeORM), blocs Mermaid et PlantUML, images PNG, SVG et PDF.\n\n- Import de requêtes CREATE TABLE pour reconstruire un MCD, et génération de données d'exemple.",
        images: [mcdrawMld],
      },
      {
        icon: 'FolderKanban',
        title: 'Architecture extensible',
        text: "Chaque type de diagramme respecte un contrat unique, `DocumentType`, qui décrit ses vues, ses panneaux, ses actions, ses raccourcis, ses exemples et ses exports. L'interface commune (en-tête, historique, sauvegarde, partage, export, recherche) est mutualisée.\n\nLa logique métier (calcul du MLD, génération SQL et ORM, liens de partage) est isolée dans un moteur de fonctions pures, donc testable sans interface. Ajouter un nouveau type de diagramme revient à créer un dossier et à l'enregistrer dans le registre.",
      },
      {
        icon: 'Network',
        title: 'Autres types de documents',
        text: "- Plan de site : édition texte et arbre synchronisés, export Markdown et sitemap.xml.\n\n- Carte mentale : disposition équilibrée, export Markdown et OPML.\n\n- Diagramme de séquence : syntaxe proche de Mermaid, blocs conditionnels et boucles, export Mermaid et PlantUML.\n\n- API REST : routes et schémas en texte ou en arbre, contrôle de conception par règles, génération CRUD depuis le MCD, import et export OpenAPI 3.",
        images: [mcdrawPlanSite, mcdrawApi, mcdrawSequence],
      },
      {
        icon: 'ClipboardCheck',
        title: 'Qualité et tests',
        text: "Tests unitaires du moteur avec Vitest et tests de bout en bout du parcours utilisateur avec Playwright. Vérification des types TypeScript à chaque build.",
      },
      {
        icon: 'Rocket',
        title: 'Déploiement',
        text: "Application déployée sur mon vps via coolify avec docker. aucun serveur applicatif nécessaire : la sauvegarde se fait dans le navigateur et le partage par lien encodé dans l'URL.",
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a permis de concevoir une architecture modulaire en Vue 3 et TypeScript, de séparer la logique métier de l'interface, de manipuler des algorithmes de transformation de modèles (MCD vers MLD vers SQL) et de mettre en place une chaîne de tests et de déploiement complète pour un produit utilisé en conditions réelles.",
      },
    ],
    technologies: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Flow',
      'Tailwind CSS',
      'Vite',
      'Vitest',
      'Playwright',
      'Docker',
      'nginx',
    ],
    features: [
      'Édition de MCD Merise avec cardinalités, identifiants relatifs et héritage',
      'Calcul automatique du MLD et vues ERD et UML',
      'Export SQL multi-SGBD et code ORM (EF Core, Prisma, TypeORM)',
      'Import de CREATE TABLE vers un MCD',
      'Plan de site, carte mentale, diagramme de séquence et API REST (OpenAPI 3)',
      'Sauvegarde automatique, annuler/rétablir, thèmes clair et sombre',
      'Partage par lien sans serveur, export et import du projet en JSON',
    ],
  },
};
