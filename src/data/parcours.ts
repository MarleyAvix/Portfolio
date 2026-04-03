export type ParcoursSection = 'formation' | 'experience' | 'certification' | 'diploma';

export type ParcoursIconName = 'graduation-cap' | 'briefcase-business' | 'award';

export interface ParcoursItem {
  id: string;
  section: ParcoursSection;
  title: string;
  institution: string;
  date: string;
  description: string;
  icon: ParcoursIconName;
  tags: string[];
  details: {
    overview: string;
    highlights?: string[];
  };
}

export const parcoursSectionLabels: Record<ParcoursSection, string> = {
  formation: 'Formation',
  experience: 'Expérience',
  certification: 'Certifications',
  diploma: 'Diplômes',
};

export const parcoursItems: ParcoursItem[] = [
  {
    id: 'formation-developpement-web-udemy',
    section: 'formation',
    title: 'Formation en développement web',
    institution: 'Udemy',
    date: '2013',
    description: 'Spécialisation en développement web.',
    icon: 'graduation-cap',
    tags: ['Développement web', 'Autodidaxie', 'Fondamentaux'],
    details: {
      overview:
        "Cette formation m'a permis de consolider mes bases en développement web et de structurer un apprentissage commencé en autodidacte.\n\nElle a renforcé ma compréhension des fondamentaux nécessaires pour construire des interfaces web et progresser vers des projets plus complets.",
      highlights: [
        'Approfondissement des bases du développement web',
        'Structuration de mon apprentissage technique',
        'Montée en autonomie sur les premiers projets',
      ],
    },
  },
  {
    id: 'bts-sio-mydigitalschool',
    section: 'formation',
    title: 'BTS SIO',
    institution: 'My Digital School - Angers',
    date: '2025 - 2027',
    description: 'Option solutions logicielles et applications métiers.',
    icon: 'graduation-cap',
    tags: ['BTS SIO', 'SLAM', 'Alternance'],
    details: {
      overview:
        "Le BTS SIO s'inscrit dans la continuité de mon projet de reconversion vers l'informatique.\n\nCette formation me permet de renforcer mes compétences en développement, en conception logicielle et en compréhension des besoins métiers dans un cadre professionnalisant.",
      highlights: [
        'Approche professionnalisante du développement logiciel',
        'Lien direct entre formation et alternance',
        'Montée en compétences sur les applications métiers',
      ],
    },
  },
  {
    id: 'alternant-developpeur-cd53',
    section: 'experience',
    title: 'Alternant développeur',
    institution: 'Conseil départemental de la Mayenne',
    date: '2025 - 2027',
    description: "Développement et participation à des projets applicatifs dans le cadre de mon alternance.",
    icon: 'briefcase-business',
    tags: ['Alternance', 'Développement', 'Projets applicatifs'],
    details: {
      overview:
        "Cette expérience me permet d'évoluer sur des projets applicatifs concrets au sein d'un environnement professionnel.\n\nJ'y développe ma capacité à comprendre les besoins, à collaborer avec les équipes et à contribuer à des solutions utiles au quotidien.",
      highlights: [
        'Participation à des projets applicatifs',
        'Travail en équipe dans un contexte métier réel',
        'Application concrète des compétences acquises en formation',
      ],
    },
  },
  {
    id: 'mooc-rgpd-cnil',
    section: 'certification',
    title: 'MOOC RGPD',
    institution: 'CNIL',
    date: '2025',
    description: 'Certification en protection des données personnelles.',
    icon: 'award',
    tags: ['RGPD', 'CNIL', 'Données personnelles'],
    details: {
      overview:
        "Cette certification m'a permis d'approfondir les principes essentiels liés à la protection des données personnelles.\n\nElle renforce ma vigilance sur les enjeux réglementaires et les bonnes pratiques à intégrer dans les projets numériques.",
      highlights: [
        'Compréhension des principes du RGPD',
        'Sensibilisation aux enjeux de conformité',
        'Renforcement des bonnes pratiques de protection des données',
      ],
    },
  },
  {
    id: 'bep-menuiserie-agencement',
    section: 'diploma',
    title: "Brevet d'etudes professionnelles menuiserie agencement",
    institution: 'Lycée Professionnel Beaumont - Redon',
    date: '2012',
    description: 'Spécialisé en menuiserie et agencement.',
    icon: 'graduation-cap',
    tags: ['Menuiserie', 'Agencement', 'Diplôme'],
    details: {
      overview:
        "Ce diplôme a marqué une première étape structurante de mon parcours.\n\nIl m'a permis de développer de la rigueur, le sens du détail et une culture du travail bien fait, des qualités que je réinvestis aujourd'hui dans l'informatique.",
      highlights: [
        'Acquisition de méthodes de travail rigoureuses',
        'Développement du sens du détail',
        'Première expérience de formation professionnalisante',
      ],
    },
  },
  {
    id: 'bac-pro-menuiserie-agencement',
    section: 'diploma',
    title: 'Baccalauréat professionnel menuiserie agencement',
    institution: 'Lycée Professionnel Beaumont - Redon',
    date: '2013',
    description: 'Spécialisé en menuiserie et agencement.',
    icon: 'graduation-cap',
    tags: ['Baccalauréat professionnel', 'Menuiserie', 'Agencement'],
    details: {
      overview:
        "Ce baccalauréat professionnel a consolidé mon parcours initial dans un environnement technique et exigeant.\n\nIl m'a apporté des bases solides en organisation, en autonomie et en compréhension des contraintes liées à un métier concret.",
      highlights: [
        "Consolidation d'un parcours technique",
        "Développement de l'autonomie",
        "Renforcement de la capacité d'adaptation",
      ],
    },
  },
];

export const parcoursBySection = {
  formation: parcoursItems.filter(item => item.section === 'formation'),
  experience: parcoursItems.filter(item => item.section === 'experience'),
  certification: parcoursItems.filter(item => item.section === 'certification'),
  diploma: parcoursItems.filter(item => item.section === 'diploma'),
};