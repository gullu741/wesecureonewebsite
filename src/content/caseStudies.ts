export interface CaseStudy {
  slug: string;
  title: string;
  clientContext: string;
  challenge: string;
  approach: string;
  solution: string;
  techStack: string[];
  outcomes: { metric: string; value: string }[];
  whatWeLearned: string;
  industry: string;
  service: string;
  date: string;
}

import portfolioData from '../data/portfolio.json';

export const caseStudies: CaseStudy[] = portfolioData;

