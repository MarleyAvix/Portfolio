import {
  Lightbulb,
  CheckCircle2,
  Rocket,
  Brain,
  Code,
  FolderKanban,
  Palette,
  Database,
  ShieldCheck,
  Server,
  Users,
  Key,
  Lock,
  Network,
  Cloud,
  Terminal,
  Bug,
  ClipboardCheck,
  Box,
  FileText,
  type LucideIcon,
} from 'lucide-react';

const projectIconRegistry = {
  Lightbulb: { Icon: Lightbulb, className: 'text-amber-400' },
  CheckCircle2: { Icon: CheckCircle2, className: 'text-emerald-400' },
  Rocket: { Icon: Rocket, className: 'text-brand-blue' },
  Brain: { Icon: Brain, className: 'text-purple-400' },
  Code: { Icon: Code, className: 'text-green-400' },
  FolderKanban: { Icon: FolderKanban, className: 'text-red-400' },
  Palette: { Icon: Palette, className: 'text-pink-400' },
  Database: { Icon: Database, className: 'text-blue-400' },
  ShieldCheck: { Icon: ShieldCheck, className: 'text-green-400' },
  Server: { Icon: Server, className: 'text-gray-400' },
  Users: { Icon: Users, className: 'text-indigo-400' },
  Key: { Icon: Key, className: 'text-orange-400' },
  Lock: { Icon: Lock, className: 'text-red-400' },
  Network: { Icon: Network, className: 'text-teal-400' },
  Cloud: { Icon: Cloud, className: 'text-cyan-400' },
  Terminal: { Icon: Terminal, className: 'text-gray-400' },
  Bug: { Icon: Bug, className: 'text-red-400' },
  ClipboardCheck: { Icon: ClipboardCheck, className: 'text-green-400' },
  Box: { Icon: Box, className: 'text-orange-400' },
  FileText: { Icon: FileText, className: 'text-slate-400' },
} satisfies Record<string, { Icon: LucideIcon; className: string }>;

export type ProjectIconName = keyof typeof projectIconRegistry;

export const ProjectIcon = ({ name }: { name?: ProjectIconName }) => {
  if (!name) return null;

  const entry = projectIconRegistry[name];
  if (!entry) return null;

  const { Icon, className } = entry;
  return <Icon className={className} />;
};
