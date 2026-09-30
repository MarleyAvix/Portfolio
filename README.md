<div align="center">

# Marley Avix — Portfolio

**Portfolio professionnel réalisé dans le cadre du BTS SIO, option SLAM**

Parcours, projets, veille technologique et support de l'épreuve E5.

[![Site en ligne](https://img.shields.io/badge/Voir_le_site-portfolio.marley--avix.fr-0084ff?style=for-the-badge)](https://portfolio.marley-avix.fr)

![React](https://img.shields.io/badge/React_19-20232a?logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06b6d4?logo=tailwindcss&logoColor=white)
![Lighthouse](https://img.shields.io/badge/Lighthouse-99_%2F_100_%2F_100_%2F_100-0cce6b?logo=lighthouse&logoColor=white)

</div>

---

## Sommaire

- [Aperçu](#aperçu)
- [Points forts](#points-forts)
- [Stack technique](#stack-technique)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts](#scripts)
- [Structure du projet](#structure-du-projet)
- [Ajouter du contenu](#ajouter-du-contenu)
- [Build et SEO](#build-et-seo)
- [Déploiement](#déploiement)
- [Contact](#contact)

## Aperçu

Le site présente mon profil de développeur en reconversion, mon parcours de formation, mes réalisations, ma veille technologique et les éléments demandés pour l'épreuve E5.

| Section | Contenu |
| --- | --- |
| **Accueil** | Présentation, compétences validées |
| **Formation** | Parcours avec pages de détail |
| **Projets** | Fiches détaillées (contexte, technologies, résultats) |
| **Veille** | Articles de veille technologique |
| **E5** | Page dédiée à l'épreuve |
| **Contact** | Coordonnées et liens professionnels |

## Points forts

- **Rapide** : pages chargées à la demande (`React.lazy`), polices non bloquantes, cache long sur les fichiers statiques. Lighthouse desktop : **99 / 100 / 100 / 100**, CLS à 0.
- **Référencé** : chaque page est prérendue en HTML avec son titre, sa description, son canonical, Open Graph et JSON-LD. `sitemap.xml` et `llms.txt` sont générés automatiquement.
- **Accessible** : lien d'évitement, focus géré à chaque changement de page, contrastes AA, animations réduites si demandé. 0 violation avec axe-core.
- **Sécurisé** : en-têtes HTTP (HSTS, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`), note A sur securityheaders.com.
- **Facile à faire évoluer** : un projet = un fichier de données, tout le reste (page, sitemap, SEO) suit automatiquement.

## Stack technique

| Domaine | Outils |
| --- | --- |
| Interface | React 19, React Router 7 |
| Langage | TypeScript |
| Build | Vite 6 |
| Style | Tailwind CSS 4 |
| Animations | Motion |
| Contenu | react-markdown, remark-gfm |
| Icônes | Lucide React, React Icons |
| Hébergement | Coolify (Nginx), Traefik, Let's Encrypt |

## Démarrage rapide

Prérequis : **Node.js 18+** et **npm**.

```bash
git clone https://github.com/MarleyAvix/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Le site est alors disponible sur <http://localhost:3000>.

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement (port 3000) |
| `npm run build` | Build de production **puis** prérendu SEO |
| `npm run preview` | Prévisualise le build en local |
| `npm run lint` | Vérification TypeScript (`tsc --noEmit`) |
| `npm run prerender` | Relance uniquement le prérendu |
| `npm run clean` | Supprime le dossier `dist` |

> Avant chaque push, lancer `npm run lint` puis `npm run build`.

## Structure du projet

```text
.
├── public/            robots.txt, favicon, image Open Graph
├── scripts/
│   └── prerender.mjs  génère les pages HTML, sitemap.xml et llms.txt
├── src/
│   ├── assets/        images (WebP)
│   ├── components/    composants réutilisables
│   ├── data/          contenus : projets, parcours, veille, E5
│   │   └── projects/  un fichier par projet
│   ├── lib/
│   │   └── seo.ts     source unique des métadonnées SEO
│   ├── pages/         pages et pages de détail
│   ├── App.tsx        routes et mise en page
│   └── main.tsx       point d'entrée
├── index.html
└── vite.config.ts
```

## Ajouter du contenu

**Un projet**

1. Créer `src/data/projects/<id>.ts` (exporte `<idCamelCase>Project: Project`).
2. L'ajouter à la liste dans `src/data/projects/index.ts`.

La page de détail, l'entrée du sitemap, `llms.txt` et les métadonnées SEO sont générés automatiquement au build.

**Un article de veille ou une étape du parcours** : modifier `src/data/techwatch.ts` ou `src/data/parcours.ts`.

## Build et SEO

`npm run build` enchaîne deux étapes :

1. `vite build` : compile l'application dans `dist/`.
2. `node scripts/prerender.mjs` : génère une page HTML par route (30 pages aujourd'hui) avec ses métadonnées, un texte lisible sans JavaScript, `sitemap.xml` et `llms.txt`.

Les métadonnées de chaque page viennent d'un seul endroit : `src/lib/seo.ts`.

## Déploiement

Le site est déployé avec **Coolify** : chaque `git push` sur `main` déclenche un build puis un déploiement. Si le build échoue, l'ancienne version reste en ligne.

| Réglage | Valeur |
| --- | --- |
| Build | Railpack, `chmod +x ./node_modules/.bin/* && npm run build` |
| Type de site | SPA, dossier publié `dist` |
| Serveur web | `nginx:alpine` avec configuration personnalisée (en-têtes de sécurité, cache 1 an sur `/assets/`) |
| HTTPS | Traefik + Let's Encrypt |

## Contact

- Site : <https://portfolio.marley-avix.fr>
- LinkedIn : <https://www.linkedin.com/in/marleyavix/>
- GitHub : <https://github.com/marleyavix>

---

<div align="center">
<sub>© Marley Avix — BTS SIO SLAM · Angers</sub>
</div>
