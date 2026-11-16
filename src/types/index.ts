export type ServiceId = 
  | 'videosurveillance'
  | 'anti-intrusion'
  | 'serrures-intelligentes'
  | 'bureautique'
  | 'bornes-recharge';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  equipmentExamples: string[];
  targetAudience: string[];
  imageUrl: string;
  imageAlt: string;
  iconName: string;
}

export interface InterventionDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  challenges: string[];
  solutions: string[];
}

export interface ContactFormData {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  establishmentType: string;
  projectDescription: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}
