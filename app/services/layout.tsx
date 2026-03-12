export const metadata = {
  title: "Cybersecurity Services | WeSecureOne",
  description: "Comprehensive offensive security, penetration testing, continuous monitoring (MDR), and compliance solutions. Protect your infrastructure with WeSecureOne.",
  openGraph: {
    title: "Cybersecurity Services | WeSecureOne",
    description: "Explore our expert offensive security, MDR, and compliance advisory services tailored for enterprise architecture.",
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
