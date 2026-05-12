export interface HeroData {
  location: string;
  established: string;
  category: string;
  title: string[];
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface PhilosophyPoint {
  id: number;
  title: string;
  description: string;
}

export interface SectorData {
  id: number;
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface CapabilityData {
  number: string;
  title: string;
  description: string;
}

export interface ProcessData {
  step: string;
  title: string;
  description: string;
}

export interface ManifestoData {
  id: number;
  statement: string;
}

export interface StatData {
  number: string;
  label: string;
  description: string;
}

export interface CaseStudyData {
  title: string;
  category: string;
  challenge: string;
  strategy: string;
  outcome: string;
}

export interface WhySociyoData {
  title: string;
  description: string;
}

export interface ArticleData {
  title: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}