import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WeSecureOne | Elite Cybersecurity Solutions',
    template: '%s | WeSecureOne'
  },
  description: 'WeSecureOne provides offensive security, penetrating testing, managed detection and response (MDR), incident response, and compliance advisory for enterprise organizations.',
  keywords: ['Cybersecurity', 'Penetration Testing', 'MDR', 'Incident Response', 'SOC2 Compliance', 'HIPAA Compliance', 'Offensive Security', 'Cloud Security'],
  authors: [{ name: 'WeSecureOne' }],
  creator: 'WeSecureOne',
  publisher: 'WeSecureOne',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wesecureone.example.com/',
    title: 'WeSecureOne | Elite Cybersecurity Solutions',
    description: 'Offensive Security, MDR, and Compliance — Delivered. Protect your enterprise from modern cyber threats with our expert team.',
    siteName: 'WeSecureOne',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeSecureOne | Elite Cybersecurity Solutions',
    description: 'Offensive Security, MDR, and Compliance — Delivered. Protect your enterprise from modern cyber threats with our expert team.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased flex flex-col`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
