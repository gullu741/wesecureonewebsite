import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { LogoIcon } from "@/components/logo-icon"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-10 w-10" />
            <span className="inline-block font-extrabold text-2xl tracking-tight">
              <span className="text-foreground">WeSecure</span>
              <span className="text-[#D31124]">One</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/services"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
