export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'gmail' | 'linkedin' | 'twitter';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}