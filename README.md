# Portfolio BTS SIO SLAM

Portfolio personnel realise dans le cadre de mon BTS SIO, option SLAM.

Ce projet a ete developpe avec React, TypeScript et Vite afin de proposer une application rapide, modulaire et facile a faire evoluer. Il centralise mon parcours, mes projets, ma veille technologique ainsi que les elements utiles a la presentation de l'epreuve E5.

## Apercu

Le site est organise autour de plusieurs sections principales :

- accueil et presentation generale
- parcours de formation avec pages de detail
- projets avec fiches detaillees
- veille technologique avec articles/pages de detail
- page de contact
- page dediee a l'epreuve E5
- mentions legales

## Fonctionnalites

- navigation fluide entre les pages avec React Router
- architecture en composants reutilisables
- pages de detail pour les projets, le parcours et la veille
- interface moderne avec animations et transitions
- base TypeScript pour mieux structurer les donnees et le code
- separation claire entre composants, pages et donnees

## Stack technique

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Motion
- Lucide React et React Icons

## Installation

### Prerequis

- Node.js 18 ou version superieure recommande
- npm

### Etapes

```bash
npm install
```

## Lancement du projet

### Demarrer en local

```bash
npm run dev
```

Le projet est ensuite accessible sur :

```text
http://localhost:3000
```

### Generer la version de production

```bash
npm run build
```

### Previsualiser le build

```bash
npm run preview
```

### Verification TypeScript

```bash
npm run lint
```

Note : dans ce projet, la commande `lint` lance une verification TypeScript (`tsc --noEmit`).

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | lance le serveur de developpement Vite sur le port 3000 |
| `npm run build` | cree le build de production |
| `npm run preview` | previsualise localement le build |
| `npm run lint` | verifie le typage TypeScript |
| `npm run clean` | supprime le dossier `dist` |

## Structure du projet

```text
src/
	components/   composants reutilisables de l'interface
	data/         donnees des projets, du parcours, de la veille et de l'E5
	pages/        pages principales et pages de detail
	App.tsx       configuration des routes
	main.tsx      point d'entree de l'application
```

## Objectif du projet

L'objectif de ce portfolio est de presenter de maniere claire et professionnelle :

- mon profil
- mon parcours de formation
- mes realisations techniques
- ma veille technologique
- les competences mobilisees pendant mon BTS SIO SLAM

## Contact

Pour toute question, retour ou signalement de bug, vous pouvez me contacter ici :

- LinkedIn : <https://www.linkedin.com/in/marleyavix>
- GitHub : <https://github.com/marleyavix>

## Ameliorations envisagees

- ajouter des captures d'ecran du site
- documenter plus en detail chaque projet presente
- ajouter une section de deploiement
- preciser les competences associees a chaque realisation


