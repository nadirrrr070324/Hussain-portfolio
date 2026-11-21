export interface Project {
  id: string;
  cassette: number;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  inspectLabel: string;
  badge: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'gmail' | 'linkedin' | 'twitter' | 'x' | 'globe' | 'map-pin';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}