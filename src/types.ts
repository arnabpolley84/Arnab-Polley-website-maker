export type ProjectCategory =
  | 'All'
  | 'E-Commerce'
  | 'Healthcare'
  | 'Professional Services'
  | 'Home Services'
  | 'Retail'
  | 'Travel'
  | 'Fitness'
  | 'Custom Applications'
  | 'APIs & Integrations'
  | 'Other';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  industry: string;
  clientSummary: string; // Layer 1: Client-friendly business explanation
  workCompleted: string[]; // What I built / solved
  technologies: string[]; // Layer 2: Technical pills
  platform?: string;
  liveUrl?: string;
  devUrl?: string;
  adminUrl?: string;
  featured?: boolean;
  imageCategory: string; // Used for aesthetic category imagery
  imageUrl: string;
  keyHighlight?: string;
}

export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaTarget: string;
  secondaryCtaText: string;
  secondaryCtaTarget: string;
  imageUrl: string;
  imageAlt: string;
  highlightTag: string;
}

export interface StatItem {
  number: string;
  label: string;
  detail: string;
}

export interface CapabilityCard {
  id: string;
  title: string;
  category: string;
  description: string;
  clientBenefit: string;
  iconName: string;
  examples: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  status: 'Completed' | 'In Progress';
  iconType?: string;
}

export interface EducationRecord {
  degree: string;
  institution: string;
  universityBoard: string;
  year: string;
  score: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  iconName: string;
  projectCount: string;
}
