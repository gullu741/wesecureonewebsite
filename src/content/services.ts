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

export const services: Service[] = [
  {
    slug: 'managed-detection-and-response',
    title: 'Managed Detection & Response (MDR)',
    shortDescription: '24/7 continuous monitoring, threat hunting, and incident response.',
    description: 'Our MDR service provides round-the-clock security monitoring and advanced threat detection to identify and neutralize cyber threats before they impact your business.',
    problemsSolved: ['Lack of 24/7 security monitoring', 'Alert fatigue', 'Slow incident response times'],
    deliverables: ['24/7 SOC monitoring', 'Proactive threat hunting', 'Incident response playbooks'],
    process: [
      { step: 1, title: 'Onboarding', description: 'Deploy sensors and integrate log sources.' },
      { step: 2, title: 'Baselining', description: 'Establish normal network behavior.' },
      { step: 3, title: 'Active Monitoring', description: 'Continuous threat detection and response.' }
    ],
    sampleTimeline: 'Ongoing (2-4 weeks onboarding)',
    faqs: [
      { question: 'Do you support our existing tools?', answer: 'Yes, our platform integrates with most major EDR, firewall, and cloud providers.' }
    ]
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortDescription: 'Identify and exploit vulnerabilities before attackers do.',
    description: 'Our ethical hackers simulate real-world cyber attacks to uncover weaknesses in your networks, applications, and physical security.',
    problemsSolved: ['Hidden security vulnerabilities', 'Compliance requirements', 'Unverified security controls'],
    deliverables: ['Detailed vulnerability report', 'Executive summary', 'Remediation guidance'],
    process: [
      { step: 1, title: 'Scoping', description: 'Define the rules of engagement and targets.' },
      { step: 2, title: 'Execution', description: 'Perform the simulated attacks.' },
      { step: 3, title: 'Reporting', description: 'Deliver findings and remediation steps.' }
    ],
    sampleTimeline: '2-4 weeks',
    faqs: [
      { question: 'Will this disrupt our operations?', answer: 'No, we carefully scope and execute tests to avoid operational impact.' }
    ]
  },
  {
    slug: 'vulnerability-management',
    title: 'Vulnerability Management',
    shortDescription: 'Continuous identification and prioritization of security flaws.',
    description: 'We help you stay ahead of emerging threats by continuously scanning your environment, prioritizing vulnerabilities based on risk, and guiding remediation efforts.',
    problemsSolved: ['Unpatched systems', 'Zero-day exploits', 'Lack of visibility into asset risks'],
    deliverables: ['Continuous vulnerability scanning', 'Risk-prioritized reports', 'Patch management strategy'],
    process: [
      { step: 1, title: 'Discovery', description: 'Identify all assets on the network.' },
      { step: 2, title: 'Scanning', description: 'Run automated vulnerability scans.' },
      { step: 3, title: 'Prioritization', description: 'Rank vulnerabilities by risk and impact.' }
    ],
    sampleTimeline: 'Ongoing',
    faqs: [
      { question: 'How often do you scan?', answer: 'We offer continuous, daily, or weekly scanning based on your needs.' }
    ]
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security Architecture',
    shortDescription: 'Secure your AWS, Azure, and GCP environments.',
    description: 'Ensure your cloud infrastructure is built securely from the ground up, with proper identity management, network segmentation, and data protection.',
    problemsSolved: ['Cloud misconfigurations', 'Unauthorized access', 'Data leaks in the cloud'],
    deliverables: ['Cloud security assessment', 'Architecture design', 'Implementation of security controls'],
    process: [
      { step: 1, title: 'Assessment', description: 'Review current cloud configurations.' },
      { step: 2, title: 'Design', description: 'Architect a secure cloud environment.' },
      { step: 3, title: 'Implementation', description: 'Deploy security controls and policies.' }
    ],
    sampleTimeline: '4-8 weeks',
    faqs: [
      { question: 'Do you support multi-cloud environments?', answer: 'Yes, we have expertise across AWS, Azure, and Google Cloud.' }
    ]
  },
  {
    slug: 'incident-response',
    title: 'Digital Forensics & Incident Response',
    shortDescription: 'Rapid response to contain and recover from cyber attacks.',
    description: 'When a breach occurs, our DFIR team acts quickly to contain the threat, investigate the root cause, and restore your operations securely.',
    problemsSolved: ['Active cyber attacks', 'Ransomware infections', 'Data breaches'],
    deliverables: ['Incident containment', 'Forensic investigation report', 'Post-incident recovery plan'],
    process: [
      { step: 1, title: 'Containment', description: 'Stop the attack from spreading.' },
      { step: 2, title: 'Investigation', description: 'Determine the root cause and extent of the breach.' },
      { step: 3, title: 'Recovery', description: 'Restore systems and improve defenses.' }
    ],
    sampleTimeline: 'Immediate (Emergency Response)',
    faqs: [
      { question: 'Are you available 24/7 for emergencies?', answer: 'Yes, our incident response hotline is available 24/7/365.' }
    ]
  },
  {
    slug: 'compliance-advisory',
    title: 'Security & Compliance Advisory',
    shortDescription: 'Navigate complex regulatory landscapes (SOC2, HIPAA, PCI-DSS).',
    description: 'We guide organizations through the complexities of industry regulations, helping you achieve and maintain compliance while improving your overall security posture.',
    problemsSolved: ['Failing compliance audits', 'Lack of security policies', 'Third-party risk management'],
    deliverables: ['Gap analysis', 'Policy creation', 'Audit preparation'],
    process: [
      { step: 1, title: 'Gap Analysis', description: 'Identify areas of non-compliance.' },
      { step: 2, title: 'Remediation', description: 'Implement required controls and policies.' },
      { step: 3, title: 'Audit Support', description: 'Assist during the formal audit process.' }
    ],
    sampleTimeline: '8-12 weeks',
    faqs: [
      { question: 'Can you guarantee we will pass our audit?', answer: 'While we cannot guarantee an auditors decision, our clients have a 100% success rate after following our remediation plans.' }
    ]
  }
];
