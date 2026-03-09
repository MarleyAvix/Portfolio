export interface Skill {
  name: string;
  isValidated: boolean;
}

export interface E5Activity {
  id: string;
  title: string;
  skills: Skill[];
  isValidated: boolean;
}

export const e5Activities: E5Activity[] = [
  {
    id: "bloc1-1",
    title: "Gérer le patrimoine informatique",
    skills: [
      { name: "Recenser et identifier les ressources numériques", isValidated: true },
      { name: "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique", isValidated: true },
      { name: "Mettre en place et vérifier les niveaux d'habilitation associés à un service", isValidated: false },
      { name: "Vérifier les conditions de la continuité d'un service informatique", isValidated: false },
      { name: "Gérer des sauvegardes", isValidated: true },
      { name: "Vérifier le respect des règles d'utilisation des ressources numériques", isValidated: false },
      { name: "Archiver et purger des données", isValidated: false }
    ],
    isValidated: true
  },
  {
    id: "bloc1-2",
    title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    skills: [
      { name: "Collecter, suivre et orienter des demandes", isValidated: true },
      { name: "Traiter des incidents ou des anomalies à partir de demandes d'assistance", isValidated: true },
      { name: "Traiter des demandes d'évolution", isValidated: true },
      { name: "Faire évoluer une documentation technique", isValidated: true },
      { name: "Faire évoluer une base de connaissances", isValidated: false }
    ],
    isValidated: true
  },
  {
    id: "bloc1-3",
    title: "Développer la présence en ligne de l'organisation",
    skills: [
      { name: "Participer à la valorisation de l'image de l'organisation sur les médias numériques", isValidated: false },
      { name: "Référencer les services en ligne de l'organisation et mesurer leur visibilité", isValidated: false },
      { name: "Participer à l'évolution d'un site Web exploitant les données de l'organisation", isValidated: false }
    ],
    isValidated: false
  },
  {
    id: "bloc1-4",
    title: "Travailler en mode projet",
    skills: [
      { name: "Analyser les objectifs et les modalités d'organisation d'un projet", isValidated: false },
      { name: "Planifier les activités", isValidated: false },
      { name: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts", isValidated: false }
    ],
    isValidated: false
  },
  {
    id: "bloc1-5",
    title: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      { name: "Réaliser les tests d'intégration et d'acceptation d'un service", isValidated: false },
      { name: "Déployer un service", isValidated: false },
      { name: "Accompagner les utilisateurs dans la mise en place d'un nouveau service", isValidated: false }
    ],
    isValidated: false
  },
  {
    id: "bloc1-6",
    title: "Organiser son développement professionnel",
    skills: [
      { name: "Mettre en place son environnement d'apprentissage personnel", isValidated: false },
      { name: "Mettre en œuvre des outils et stratégies de veille informationnelle", isValidated: false },
      { name: "Gérer son identité professionnelle", isValidated: false },
      { name: "Développer son projet professionnel", isValidated: false }
    ],
    isValidated: false
  }
];