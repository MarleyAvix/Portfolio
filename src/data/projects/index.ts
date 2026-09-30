import { anonymisationBaseDeDonneesProject } from './anonymisation-base-de-donnees';
import { recetteOnlyOfficeProject } from './recette-only-office';
import { creationSupportVideoProject } from './creation-support-video';
import { redactionCourrierJasperSoftProject } from './redaction-courrier-jasper-soft';
import { fairviewRpProject } from './fairview-rp';
import { outilSupportInterneProject } from './outil-support-interne';
import { infrastructureVirtuelleSecuriseeE6Project } from './infrastructure-virtuelle-securisee-e6';
import { moeviaVoyageProject } from './moevia-voyage';
import { deploiementCoolifyVpsProject } from './deploiement-coolify-vps';
import type { Project } from './types';

export type { Project, ProjectCategory } from './types';

/** Ordre d'affichage des projets sur le site. */
export const projects: Project[] = [
  anonymisationBaseDeDonneesProject,
  recetteOnlyOfficeProject,
  creationSupportVideoProject,
  redactionCourrierJasperSoftProject,
  fairviewRpProject,
  outilSupportInterneProject,
  infrastructureVirtuelleSecuriseeE6Project,
  moeviaVoyageProject,
  deploiementCoolifyVpsProject,
];
