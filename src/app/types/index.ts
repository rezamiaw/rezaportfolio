// Common types for the portfolio project
import { IconType } from 'react-icons';

export interface SocialLink {
  href: string;
  icon: IconType;
  ariaLabel: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  skills: string[];
  github?: string;
  demo?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  avatar?: string;
  resume: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

// Component props types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export interface LazyLoadProps {
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
  className?: string;
  once?: boolean;
}

export interface PerformanceMetrics {
  renderTime: number;
  componentCount: number;
  memoryUsage: number;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// SEO types
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
} 