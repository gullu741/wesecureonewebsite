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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-ransomware-recovery',
    title: 'Rapid Ransomware Recovery for Financial Services',
    clientContext: 'A regional bank hit by a sophisticated ransomware attack that encrypted core databases.',
    challenge: 'The bank faced complete operational paralysis and potential regulatory fines if data was not restored quickly.',
    approach: 'Deployed our DFIR team to contain the infection, negotiate (if necessary), and safely restore from offline backups.',
    solution: 'Isolated infected segments, eradicated the malware, and rebuilt the network architecture with zero-trust principles.',
    techStack: ['CrowdStrike', 'Splunk', 'Veeam', 'Palo Alto Networks'],
    outcomes: [
      { metric: 'Downtime', value: '< 48 Hours' },
      { metric: 'Data Loss', value: '0%' },
      { metric: 'Ransom Paid', value: '$0' }
    ],
    whatWeLearned: 'Immutable backups are the ultimate fail-safe against modern ransomware variants.',
    industry: 'Finance',
    service: 'Incident Response'
  },
  {
    slug: 'healthcare-hipaa-compliance',
    title: 'Achieving HIPAA Compliance for HealthTech Startup',
    clientContext: 'A fast-growing telemedicine platform needing to prove security to enterprise hospital clients.',
    challenge: 'Lacked formal security policies, access controls, and a clear path to HIPAA compliance.',
    approach: 'Conducted a comprehensive gap analysis and built a prioritized remediation roadmap.',
    solution: 'Implemented role-based access control, encrypted data at rest/transit, and drafted all required security policies.',
    techStack: ['AWS KMS', 'Okta', 'Vanta', 'Datadog'],
    outcomes: [
      { metric: 'Compliance Achieved', value: 'HIPAA & SOC2' },
      { metric: 'Enterprise Deals Closed', value: '+300%' },
      { metric: 'Audit Time Reduced', value: '50%' }
    ],
    whatWeLearned: 'Automating compliance evidence collection early saves hundreds of hours during the audit phase.',
    industry: 'Healthcare',
    service: 'Compliance Advisory'
  },
  {
    slug: 'retail-penetration-test',
    title: 'Securing E-Commerce Infrastructure Before Black Friday',
    clientContext: 'A national retailer expecting record-breaking traffic during the holiday season.',
    challenge: 'Needed assurance that their newly updated web platform could withstand targeted cyber attacks.',
    approach: 'Performed a grey-box penetration test simulating a motivated external attacker.',
    solution: 'Discovered and helped patch critical SQL injection and broken authentication vulnerabilities.',
    techStack: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'Custom Scripts'],
    outcomes: [
      { metric: 'Critical Findings', value: '3 (Patched)' },
      { metric: 'Holiday Downtime', value: '0 Minutes' },
      { metric: 'Customer Data Breached', value: '0 Records' }
    ],
    whatWeLearned: 'Even modern frameworks can be vulnerable if custom authentication logic is implemented incorrectly.',
    industry: 'Retail',
    service: 'Penetration Testing'
  },
  {
    slug: 'saas-cloud-security',
    title: 'Cloud Security Architecture for Global SaaS',
    clientContext: 'A B2B software company scaling rapidly on AWS but struggling with misconfigurations.',
    challenge: 'Overly permissive IAM roles and public S3 buckets were creating massive security risks.',
    approach: 'Audited the AWS environment and implemented a least-privilege access model.',
    solution: 'Deployed Cloud Security Posture Management (CSPM) tools and automated remediation for common misconfigurations.',
    techStack: ['AWS IAM', 'Wiz', 'Terraform', 'AWS GuardDuty'],
    outcomes: [
      { metric: 'High-Risk Misconfigs', value: 'Reduced by 95%' },
      { metric: 'IAM Roles Scoped Down', value: '400+' },
      { metric: 'Security Visibility', value: '100% Coverage' }
    ],
    whatWeLearned: 'Infrastructure as Code (IaC) must be scanned for security flaws before deployment, not after.',
    industry: 'Technology',
    service: 'Cloud Security'
  },
  {
    slug: 'manufacturing-mdr',
    title: '24/7 Threat Detection for Global Manufacturer',
    clientContext: 'A manufacturing firm with a complex IT/OT environment and limited internal security staff.',
    challenge: 'Unable to monitor alerts 24/7, leading to delayed responses to potential threats.',
    solution: 'Onboarded the client to our MDR platform, providing 24/7 monitoring and automated threat containment.',
    approach: 'Integrated their existing firewalls and endpoints into our SIEM and established baseline behaviors.',
    techStack: ['Microsoft Sentinel', 'Defender for Endpoint', 'Fortinet'],
    outcomes: [
      { metric: 'Mean Time to Detect (MTTD)', value: '< 5 Mins' },
      { metric: 'Mean Time to Respond (MTTR)', value: '< 15 Mins' },
      { metric: 'False Positives', value: 'Reduced by 80%' }
    ],
    whatWeLearned: 'Bridging the gap between IT and OT security requires specialized sensor deployment and tuning.',
    industry: 'Manufacturing',
    service: 'Managed Detection & Response'
  },
  {
    slug: 'logistics-vulnerability-management',
    title: 'Enterprise Vulnerability Management Program',
    clientContext: 'A global logistics company with over 50,000 endpoints across 30 countries.',
    challenge: 'Struggling to prioritize patching efforts, leaving critical systems exposed for months.',
    approach: 'Implemented a risk-based vulnerability management program focused on exploitability.',
    solution: 'Deployed continuous scanning agents and integrated findings with their IT ticketing system for automated tracking.',
    techStack: ['Tenable', 'ServiceNow', 'Kenna Security'],
    outcomes: [
      { metric: 'Critical Patch Time', value: 'From 45 to 7 Days' },
      { metric: 'Asset Visibility', value: 'Increased to 98%' },
      { metric: 'Overall Risk Score', value: 'Reduced by 60%' }
    ],
    whatWeLearned: 'Context is everything. A critical CVSS score doesn\'t matter if the asset is completely isolated.',
    industry: 'Logistics',
    service: 'Vulnerability Management'
  }
];
