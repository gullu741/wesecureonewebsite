export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problemsSolved: string[];
  deliverables: string[];
  process: { step: number; title: string; description: string }[];
  sampleTimeline: string;
  faqs: { question: string; answer: string }[];
}

import servicesData from '../data/services.json';

export const services: Service[] = servicesData;

