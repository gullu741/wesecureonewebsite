import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | WeSecureOne',
  description: 'Get in touch with WeSecureOne to schedule a consultation, request a penetration test, or to discuss managed detection and response solutions.',
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: 'Contact Us | WeSecureOne',
    description: 'Get in touch with WeSecureOne to schedule a cyber defense consultation.',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
