import type { ProjectIconName } from '../../lib/projectIcons';

export type ProjectCategory = 'Ecole' | 'Entreprise' | 'Perso';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  live: string;
  github: string;
  featured?: boolean;
  details?: {
    detailImage?: string;
    content?: {
      icon?: ProjectIconName;
      title: string;
      text: string;
      images?: string[];
    }[];
    technologies?: string[];
    features?: string[];
    screenshots?: string[];
    validatedSkills?: string[];
  };
}
