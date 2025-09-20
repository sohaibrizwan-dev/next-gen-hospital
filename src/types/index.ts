export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  experience: string;
  image: string;
  department: string;
  schedule: string;
  bio: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  procedures: string[];
  doctors: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  content: string;
  rating: number;
}