// Global type definitions
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Portfolio specific types
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  resume?: string;
  title: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: 'Proficient' | 'Familiar';
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Cloud' | 'AI' | 'Other';
  logo?: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Contractual' | 'Freelance';
  responsibilities: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  year: string;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Portfolio {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects?: Project[];
}