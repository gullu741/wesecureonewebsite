"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { LogoIcon } from "@/components/logo-icon"
import { ServicesMenu } from "@/components/services-menu"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-10 w-10" />
            <span className="inline-block font-extrabold text-2xl tracking-tight">
              <span className="text-foreground">WeSecure</span>
              <span style={{ color: "var(--brand-red)" }}>One</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <ServicesMenu />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Us
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden rounded-md p-1.5 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4">
          <div className="flex flex-col gap-1">
            <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-primary hover:bg-muted"
            >
              View All Services →
            </Link>
            <div className="my-2 border-t" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
