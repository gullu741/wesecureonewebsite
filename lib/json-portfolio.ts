import portfolios from '@/src/data/portfolio.json';

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

export async function getPortfolioSlugs(): Promise<string[]> {
    return portfolios.map((portfolio) => portfolio.slug);
}

export async function getPortfolioBySlug(slug: string): Promise<CaseStudy | null> {
    const p = portfolios.find((item) => item.slug === slug);
    return p ? (p as CaseStudy) : null;
}

export async function getAllPortfolios(): Promise<CaseStudy[]> {
    return (portfolios as CaseStudy[]).sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getAllPortfoliosSync(): CaseStudy[] {
    return (portfolios as CaseStudy[]).sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
