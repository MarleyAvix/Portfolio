export interface E5Activity {
  id: string;
  title: string;
  skills: string[];
}

export const e5Activities: E5Activity[] = [
  {
    id: "bloc1-1",
    title: "Gérer le patrimoine informatique",
    skills: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
      "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
      "Vérifier les conditions de la continuité d'un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation des ressources numériques",
      "Archiver et purger des données"
    ]
  },
  {
    id: "bloc1-2",
    title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    skills: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des incidents ou des anomalies à partir de demandes d'assistance",
      "Traiter des demandes d'évolution",
      "Faire évoluer une documentation technique",
      "Faire évoluer une base de connaissances"
    ]
  },
  {
    id: "bloc1-3",
    title: "Développer la présence en ligne de l'organisation",
    skills: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques",
      "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation"
    ]
  },
  {
    id: "bloc1-4",
    title: "Travailler en mode projet",
    skills: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts"
    ]
  },
  {
    id: "bloc1-5",
    title: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un nouveau service"
    ]
  },
  {
    id: "bloc1-6",
    title: "Organiser son développement professionnel",
    skills: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel"
    ]
  }
];