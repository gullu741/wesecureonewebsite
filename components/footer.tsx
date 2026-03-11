import Link from "next/link"
import { LogoIcon } from "@/components/logo-icon"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold flex items-center gap-2 tracking-tight">
              <LogoIcon className="h-10 w-10" />
              <span>
                <span className="text-foreground">WeSecure</span>
                <span className="text-[#D31124]">One</span>
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Offensive Security, MDR, and Compliance — Delivered.
            </p>
            <p className="text-sm text-muted-foreground">
              123 Innovation Drive<br />
              Tech City, TC 90210
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/managed-detection-and-response" className="hover:text-foreground">Managed Detection & Response</Link></li>
              <li><Link href="/services/penetration-testing" className="hover:text-foreground">Penetration Testing</Link></li>
              <li><Link href="/services/cloud-security" className="hover:text-foreground">Cloud Security</Link></li>
              <li><Link href="/services" className="hover:text-foreground">All Services</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WeSecureOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
