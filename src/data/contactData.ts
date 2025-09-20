// Contact information configuration
// Easy to update contact details across the application

import { Phone, Mail, MapPin, Clock, LucideIcon } from 'lucide-react'

// TypeScript interfaces
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  subtitle?: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    full: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    full: string;
  };
  mapUrl: string;
}

// Company information
export const companyInfo: CompanyInfo = {
  name: "Stoneks",
  phone: "+48 123 456 789",
  email: "kontakt@stoneks.info",
  address: {
    street: "ul. Kamienna 15",
    city: "Warszawa",
    postalCode: "00-001",
    full: "ul. Kamienna 15\n00-001 Warszawa"
  },
  hours: {
    weekdays: "8:00-16:00",
    saturday: "9:00-13:00", 
    sunday: "zamknięte",
    full: "Pon-Pt: 8:00-16:00\nSob: 9:00-13:00"
  },
  mapUrl: "https://maps.google.com/maps?width=600&height=400&hl=pl&q=brzozowa 10, 97-425&t=&z=14&ie=UTF8&iwloc=B&output=embed"
};

// Contact information for display
export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: 'Telefon',
    content: companyInfo.phone,
    subtitle: `Pon-Pt: ${companyInfo.hours.weekdays}`
  },
  {
    icon: Mail,
    title: 'Email',
    content: companyInfo.email,
    subtitle: 'Odpowiadamy w 24h'
  },
  {
    icon: MapPin,
    title: 'Adres',
    content: companyInfo.address.full,
    subtitle: 'Zapraszamy do naszego showroomu'
  },
  {
    icon: Clock,
    title: 'Godziny otwarcia',
    content: companyInfo.hours.full,
    subtitle: `Niedziela: ${companyInfo.hours.sunday}`
  }
];

// Helper functions
export const getContactInfoByType = (type: 'phone' | 'email' | 'address' | 'hours'): ContactInfo | undefined => {
  const typeMap = {
    phone: 'Telefon',
    email: 'Email', 
    address: 'Adres',
    hours: 'Godziny otwarcia'
  };
  
  return contactInfo.find(info => info.title === typeMap[type]);
};

export const getPhoneNumber = (): string => companyInfo.phone;
export const getEmailAddress = (): string => companyInfo.email;
export const getFullAddress = (): string => companyInfo.address.full;
export const getMapUrl = (): string => companyInfo.mapUrl;
