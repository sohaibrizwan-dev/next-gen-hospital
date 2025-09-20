import { Doctor, Service, BlogPost, Testimonial } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    qualifications: ['MD', 'FACC', 'PhD in Cardiovascular Medicine'],
    experience: '15 years',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'cardiology',
    schedule: 'Mon-Fri: 9:00 AM - 5:00 PM',
    bio: 'Dr. Johnson is a leading cardiologist with extensive experience in interventional cardiology and heart disease prevention.'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    qualifications: ['MD', 'PhD in Neuroscience'],
    experience: '12 years',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'neurology',
    schedule: 'Mon-Thu: 8:00 AM - 6:00 PM',
    bio: 'Specializing in neurological disorders and brain health, Dr. Chen uses cutting-edge treatments for optimal patient outcomes.'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    qualifications: ['MD', 'Board Certified in Pediatrics'],
    experience: '10 years',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'pediatrics',
    schedule: 'Tue-Sat: 9:00 AM - 4:00 PM',
    bio: 'Dr. Rodriguez provides comprehensive pediatric care with a focus on preventive medicine and child development.'
  },
  {
    id: '4',
    name: 'Dr. David Forester',
    specialty: 'Eye Surgery',
    qualifications: ['MD', 'Board Certified in Pediatrics'],
    experience: '10 years',
    image: '/images/dr-bond.png',   // ✅ Correct path
    department: 'pediatrics',
    schedule: 'Tue-Sat: 9:00 AM - 4:00 PM',
    bio: 'Dr. Jane Forester provides comprehensive eye surgery with a focus on preventive medicine and child development.'
  }
  
  
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Cardiology',
    description: 'Advanced cardiac care and heart disease treatment',
    icon: 'Heart',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    procedures: ['Angioplasty', 'Bypass Surgery', 'Heart Catheterization', 'Pacemaker Implantation'],
    doctors: ['1'],
    technologies: ['Digital Catheterization Lab', '3D Echocardiography', 'Cardiac MRI']
  },
  {
    id: '2',
    name: 'Neurology',
    description: 'Comprehensive neurological care and brain health services',
    icon: 'Brain',
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
    procedures: ['EEG', 'MRI Brain Scan', 'Stroke Treatment', 'Epilepsy Management'],
    doctors: ['2'],
    technologies: ['Advanced MRI Suite', 'Digital EEG Systems', 'Neurosurgical Navigation']
  },
  {
    id: '3',
    name: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents',
    icon: 'Baby',
    image: 'https://images.pexels.com/photos/3985319/pexels-photo-3985319.jpeg?auto=compress&cs=tinysrgb&w=800',
    procedures: ['Well-child Checkups', 'Immunizations', 'Growth Monitoring', 'Developmental Assessment'],
    doctors: ['3'],
    technologies: ['Pediatric Imaging', 'Child-Friendly Equipment', 'Digital Health Records']
  },
  {
    id: '4',
    name: 'Emergency Care',
    description: '24/7 emergency medical services and trauma care',
    icon: 'Ambulance',
    image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=800',
    procedures: ['Trauma Care', 'Emergency Surgery', 'Critical Care', 'Ambulance Services'],
    doctors: [],
    technologies: ['State-of-the-art ER', 'Mobile ICU Units', 'Advanced Life Support']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Heart Health: Prevention and Early Detection',
    excerpt: 'Learn about the latest advances in heart disease prevention and the importance of regular screenings.',
    content: 'Heart disease remains one of the leading causes of death worldwide...',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    category: 'Cardiology',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['heart-health', 'prevention', 'screening']
  },
  {
    id: '2',
    title: 'Understanding Neurological Disorders',
    excerpt: 'A comprehensive guide to common neurological conditions and their treatments.',
    content: 'Neurological disorders affect millions of people worldwide...',
    author: 'Dr. Michael Chen',
    publishedAt: '2024-01-10',
    category: 'Neurology',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['neurology', 'brain-health', 'treatment']
  },
  {
    id: '3',
    title: 'Understanding Neurological Disorders',
    excerpt: 'A comprehensive guide to common neurological conditions and their treatments.',
    content: 'Neurological disorders affect millions of people worldwide...',
    author: 'Dr. Michael Chen',
    publishedAt: '2024-01-10',
    category: 'Neurology',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['neurology', 'brain-health', 'treatment']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    condition: 'Cardiac Surgery',
    content: 'The cardiac team at this hospital saved my life. Their expertise and compassionate care made all the difference.',
    rating: 5
  },
  {
    id: '2',
    name: 'Maria Garcia',
    condition: 'Pediatric Care',
    content: 'Dr. Rodriguez and her team provided excellent care for my daughter. The staff was incredibly kind and professional.',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Johnson',
    condition: 'Emergency Care',
    content: 'Fast, efficient, and professional emergency care. I am grateful for the quick response and excellent treatment.',
    rating: 5
  }
];