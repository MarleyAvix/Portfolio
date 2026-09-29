import { projects } from '../data/projects';
import { parcoursItems } from '../data/parcours';
import { techWatchItems } from '../data/techwatch';

/**
 * Source unique des métadonnées SEO du site.
 * Utilisé à l'exécution (titre de l'onglet) ET au build (scripts/prerender.mjs :
 * pages HTML par route, sitemap.xml, llms.txt).
 * Toute nouvelle page ou tout nouveau projet ajouté aux données est repris automatiquement.
 */
export const SITE_URL = 'https://portfolio.marley-avix.fr';
export const SITE_NAME = 'Marley Avix';

export interface PageSection {
  title: string;
  text: string;
}

export interface PageMeta {
  /** Chemin avec slash final, ex. "/projects/fairview-rp/" */
  path: string;
  title: string;
  description: string;
  /** Titre principal (h1) du contenu pré-rendu */
  heading: string;
  /** Contenu texte pour les robots qui n'exécutent pas le JavaScript */
  intro?: string;
  sections?: PageSection[];
  priority: number;
}

/** Retire le Markdown et les espaces superflus. */
export const plain = (text = ''): string =>
  text
    .replace(/\r\n/g, '\n')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]+/g, '')
    .replace(/^\s*(?:[-+]|\d+\.)\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

/** Coupe proprement à ~155 caractères (longueur idéale d'une meta description). */
export const short = (text: string, max = 155): string => {
  const t = plain(text);
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
};

const withSlash = (p: string) => (p.endsWith('/') ? p : p + '/');

const HOME_DESCRIPTION =
  "Portfolio de Marley Avix, développeur d'applications en BTS SIO option SLAM à MyDigitalSchool Angers, en alternance au Conseil départemental de la Mayenne. Projets, veille technologique et épreuve E5.";

const staticPages: PageMeta[] = [
  {
    path: '/',
    title: "Marley Avix – Développeur d'applications (BTS SIO SLAM) | Portfolio",
    description: HOME_DESCRIPTION,
    heading: "Marley Avix – Développeur d'applications (BTS SIO option SLAM)",
    intro: HOME_DESCRIPTION,
    priority: 1.0,
  },
  {
    path: '/about/',
    title: 'À propos – Marley Avix, développeur en reconversion | Portfolio',
    description:
      "Autodidacte en reconversion, Marley Avix allie 15 ans d'expérience multisectorielle et BTS SIO SLAM pour transformer des besoins métiers en solutions logicielles.",
    heading: 'À propos de Marley Avix',
    priority: 0.8,
  },
  {
    path: '/formation/',
    title: 'Formation et parcours – Marley Avix | Portfolio',
    description:
      "Parcours de Marley Avix : BTS SIO option SLAM à MyDigitalSchool Angers, alternance au Conseil départemental de la Mayenne, certifications et formations.",
    heading: 'Formation et parcours',
    priority: 0.8,
  },
  {
    path: '/projects/',
    title: 'Réalisations et projets – Marley Avix | Portfolio',
    description:
      "Projets scolaires, professionnels et personnels de Marley Avix : anonymisation de base de données, sites web, déploiement Coolify, infrastructure virtuelle sécurisée.",
    heading: 'Réalisations et projets',
    priority: 0.9,
  },
  {
    path: '/e5/',
    title: 'Tableau de synthèse E5 – BTS SIO SLAM | Marley Avix',
    description:
      "Tableau de synthèse de l'épreuve E5 du BTS SIO SLAM : compétences du référentiel validées et projets associés de Marley Avix.",
    heading: 'Tableau de synthèse E5',
    priority: 0.7,
  },
  {
    path: '/tech/',
    title: 'Veille technologique – Marley Avix | Portfolio',
    description:
      "Veille technologique de Marley Avix : web, TypeScript, WebP, infrastructure et outils de développement, avec analyses et synthèses.",
    heading: 'Veille technologique',
    priority: 0.7,
  },
  {
    path: '/contact/',
    title: 'Contact – Marley Avix | Portfolio',
    description:
      'Contacter Marley Avix, développeur d\'applications à Angers : email, LinkedIn et GitHub.',
    heading: 'Me contacter',
    intro: 'Email : marleyavix@outlook.fr — LinkedIn : https://www.linkedin.com/in/marleyavix/ — GitHub : https://github.com/marleyavix',
    priority: 0.6,
  },
  {
    path: '/mentions-legales/',
    title: 'Mentions légales | Marley Avix – Portfolio',
    description: 'Mentions légales du portfolio de Marley Avix.',
    heading: 'Mentions légales',
    priority: 0.1,
  },
];

const projectPages: PageMeta[] = projects.map((p) => ({
  path: `/projects/${p.id}/`,
  title: `${p.title} – Projet | Marley Avix`,
  description: short(p.longDescription || p.description),
  heading: p.title,
  intro: plain(p.longDescription || p.description),
  sections: (p.details?.content ?? []).map((c) => ({ title: c.title, text: plain(c.text) })),
  priority: 0.8,
}));

const parcoursPages: PageMeta[] = parcoursItems.map((i) => ({
  path: `/formation/${i.id}/`,
  title: `${i.title} – ${i.institution} | Marley Avix`,
  description: short(i.description),
  heading: `${i.title} – ${i.institution}`,
  intro: plain(i.details?.overview || i.description),
  sections: i.details?.highlights?.length
    ? [{ title: 'Points clés', text: i.details.highlights.map(plain).join(' · ') }]
    : [],
  priority: 0.6,
}));

const techPages: PageMeta[] = techWatchItems.map((t) => ({
  path: `/tech/${t.id}/`,
  title: `${t.title} – Veille | Marley Avix`,
  description: short(t.excerpt),
  heading: t.title,
  intro: plain(t.details?.longDescription || t.excerpt),
  sections: (t.details?.content ?? []).map((c) => ({ title: c.title, text: plain(c.text) })),
  priority: 0.5,
}));

export const allPages: PageMeta[] = [...staticPages, ...projectPages, ...parcoursPages, ...techPages];

/** Métadonnées d'une URL (avec ou sans slash final). Accueil par défaut si inconnue. */
export const getPageMeta = (pathname: string): PageMeta => {
  const p = withSlash(pathname || '/');
  return allPages.find((page) => page.path === p) ?? staticPages[0];
};
