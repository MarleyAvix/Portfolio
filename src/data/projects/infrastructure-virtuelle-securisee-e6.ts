import type { Project } from './types';

/*INFRA E6*/
export const infrastructureVirtuelleSecuriseeE6Project: Project = {
  id: 'infrastructure-virtuelle-securisee-e6',
  title: "Conception et déploiement d'une infrastructure Open-Source sécurisée",
  description:
    "Création d'une infrastructure d'entreprise virtualisée sous Proxmox VE, intégrant un découpage réseau strict, une gestion centralisée des identités et la conteneurisation d'applications.",
  longDescription:
    "Ce projet d'infrastructure sécurisée s'appuie exclusivement sur des solutions Open-Source pour répondre aux exigences modernes de sécurité et de souveraineté numérique. Déployée sur un hyperviseur Proxmox VE, l'infrastructure isole les flux via un cloisonnement réseau rigoureux (LAN, Server, DMZ), sécurise les accès distants via WireGuard, et centralise l'authentification et les habilitations grâce au couplage de FreeIPA et Keycloak.",
  image: 'https://placehold.co/600x400?text=Infrastructure+Proxmox+VE',
  category: 'Ecole',
  tags: ['Proxmox', 'Linux', 'Infra et Sécurité', 'Open-Source'],
  live: '',
  github: '',
  featured: false,
  details: {
    content: [
      {
        icon: 'Lightbulb',
        title: 'Le défi et la philosophie',
        text: "Le défi consistait à bâtir une infrastructure d'entreprise résiliente, modulaire et hautement sécurisée, en appliquant le principe du moindre privilège. Le choix d'une philosophie 100 % open source garantit la transparence du code, l'absence de vendor lock-in (dépendance exclusive à un fournisseur) et le respect de la souveraineté des données.",
      },
      {
        icon: 'Network',
        title: 'Architecture réseau et interconnexion',
        text: "Pour étanchéifier les environnements, un découpage en zones (VLANs) a été mis en place :\n\n- **LAN Client** : Pour les postes utilisateurs.\n- **LAN Server** : Zone interne isolée accueillant les contrôleurs et bases de données.\n- **DMZ (Zone Démilitarisée)** : Pour les serveurs exposés à l'extérieur.\n\nL'accès d'administration à distance est sécurisé par un tunnel VPN WireGuard chiffré, performant et à faible surface d'attaque.",
      },
      {
        icon: 'Server',
        title: 'Systèmes de base et gestion des identités',
        text: "Le cœur de l'infrastructure repose sur le déploiement de serveurs d'entreprise Rocky Linux. La gestion des utilisateurs et des machines est centralisée via FreeIPA (implémentant LDAP/Kerberos, DNS et PKI).\n\nPour la brique applicative, Keycloak a été adossé à FreeIPA pour fournir une solution moderne d'Identity and Access Management (IAM), permettant le Single Sign-On (SSO) et le chiffrement des sessions utilisateurs.",
      },
      {
        icon: 'Box',
        title: 'Conteneurisation et micro-services',
        text: "Toujours dans cette optique open-source et sécuritaire, le déploiement des applications métiers se fait par conteneurisation sous Podman. Contrairement à Docker, Podman fonctionne en mode rootless (sans démon privilégié), réduisant drastiquement les risques d'élévation de privilèges en cas de compromission d'un conteneur.",
      },
      {
        icon: 'FileText',
        title: 'Documentation technique',
        text: "Conformément aux exigences de l'épreuve E6, l'intégralité des procédures d'installation, les fichiers de configuration (règles de pare-feu, conteneurs Podman) et la cartographie réseau ont fait l'objet d'une documentation technique rigoureuse pour garantir la reproductibilité et la maintenabilité de l'infrastructure.",
      },
      {
        icon: 'Brain',
        title: "Ce que j'ai appris",
        text: "Ce projet m'a apporté une vision globale de la gestion d'infrastructure moderne. J'ai renforcé mes compétences en administration système Linux avancée, en routage/pare-feu et en gestion des identités à l'échelle d'un réseau d'entreprise.\n\nCe projet m'a permis de valider les compétences suivantes :\n- Protéger les données à caractère personnel (RGPD)\n- Vérifier le respect des règles d'utilisation des ressources numériques\n- Gérer des sauvegardes et assurer la continuité de service\n- Évaluer et maintenir la sécurité des accès et des systèmes\n- Documenter les architectures et les procédures de déploiement",
      },
    ],
    technologies: ['Proxmox VE', 'Rocky Linux', 'WireGuard', 'FreeIPA', 'Keycloak', 'Podman'],
    features: [
      "Hypervision et virtualisation d'entreprise",
      'Cloisonnement réseau strict (LAN / Server / DMZ)',
      'Accès distant sécurisé par VPN WireGuard',
      'Gestion centralisée des identités (LDAP/Kerberos) et SSO',
      'Conteneurisation sécurisée (Rootless Podman)',
      "Rédaction de la documentation d'architecture et d'exploitation",
    ],
    validatedSkills: ['bloc3-1', 'bloc3-2', 'bloc3-3', 'bloc3-4'],
  },
};
