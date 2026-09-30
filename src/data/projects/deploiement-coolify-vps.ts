import type { Project } from './types';
import coolifyVps from '../../assets/coolifyVps.webp';

/*COOLIFY */
export const deploiementCoolifyVpsProject: Project = {
  id: 'deploiement-coolify-vps',
  title: 'Plateforme de Déploiement PaaS (Coolify sur VPS)',
  description:
    "Déploiement et sécurisation d'un PaaS auto-hébergé avec Coolify sur VPS pour automatiser et centraliser l'hébergement d'applications web.",
  longDescription:
    "Mise en place complète d'une infrastructure d'hébergement autonome basée sur Coolify et Docker sur un VPS Linux. La plateforme permet d'orchestrer, sécuriser et automatiser le déploiement continu (CI/CD) de sites et d'API avec gestion SSL dynamique.",
  image: coolifyVps, // Variable d'import de ton visuel/dashboard
  category: 'Perso',
  tags: ['DevOps', 'Docker', 'Linux', 'SysAdmin', 'CI/CD'],
  live: '', // URL de ton dashboard Coolify ou vide
  github: '',
  featured: false,
  details: {
    content: [
      {
        icon: 'Server',
        title: 'La Problématique',
        text: "Éviter les coûts croissants et les limitations des plateformes PaaS cloud propriétaires (Vercel, Render, Heroku) tout en conservant une expérience de déploiement fluide ('git push') pour centraliser l'ensemble de mes applications et bases de données sur une infrastructure dédiée.",
      },
      {
        icon: 'Terminal',
        title: 'Configuration & Déploiement',
        text: "Provisionnement du VPS sous Linux, durcissement de la sécurité système (règles pare-feu UFW, restriction d'accès SSH par clés), installation de l'environnement d'exécution Docker et déploiement du moteur Coolify comme orchestrateur centralisé.",
      },
      {
        icon: 'Rocket',
        title: 'Automatisation & Gestion Réseau',
        text: "Configuration du reverse proxy dynamique (Traefik) avec génération et renouvellement automatique des certificats SSL Let's Encrypt. Mise en place de webhooks GitHub pour activer le déploiement continu à chaque mise à jour de code.",
      },
      {
        icon: 'Brain',
        title: 'Compétences acquises',
        text: "Maîtrise de l'administration système Linux en environnement de production, gestion fine de l'isolation par conteneurs Docker, routage réseau/DNS et mise en place d'un pipeline de livraison continue robuste.",
      },
    ],
    technologies: [
      'Coolify',
      'Linux (Ubuntu/Debian)',
      'Docker',
      'Traefik',
      'UFW / Iptables',
      'Bash',
      "Let's Encrypt",
      'Git',
    ],
    features: [
      "Déploiement automatisé d'applications via webhooks Git (Push-to-Deploy)",
      'Provisionnement et gestion de bases de données conteneurisées (PostgreSQL, MySQL, Redis)',
      'Génération et renouvellement automatique des certificats SSL/TLS',
      'Reverse proxy intégré avec routage de sous-domaines à la volée',
      'Tableau de bord de monitoring des ressources système (CPU, RAM, stockage)',
      "Gestion centralisée et sécurisée des variables d'environnement applicatives",
    ],
    validatedSkills: [
      'Déployer, configurer et administrer un serveur Linux distant',
      "Mettre en œuvre et orchestrer des conteneurs d'applications avec Docker",
      'Concevoir et automatiser une chaîne de déploiement continu (CI/CD)',
      'Configurer la sécurité réseau, les pare-feu et les certificats de chiffrement',
      'Superviser les métriques système et assurer le maintien en conditions opérationnelles',
    ],
  },
};
