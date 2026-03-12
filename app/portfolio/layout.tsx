export const metadata = {
  title: "Case Studies & Portfolio | WeSecureOne",
  description: "Explore our successful cybersecurity case studies. See how we've helped leading organizations with ransomware recovery, penetration testing, and AWS security.",
  openGraph: {
    title: "Case Studies & Portfolio | WeSecureOne",
    description: "Read our deep-dive case studies covering enterprise incident response, SOC2 compliance, and proactive penetration testing engagements.",
  }
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
