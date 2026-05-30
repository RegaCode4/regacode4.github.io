export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  category: 'Fullstack' | 'Frontend' | 'Mobile' | 'DevOps';
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  achievements: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 0-100
    iconName: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}
