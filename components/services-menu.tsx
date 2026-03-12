"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import { services } from "@/src/content/services"

const CATEGORY_ORDER = [
  "Development",
  "Industry Solutions",
  "Consulting & Strategy",
  "Implementation & Support",
]

const CATEGORY_ICONS: Record<string, string> = {
  "Development": "⚙️",
  "Industry Solutions": "🏢",
  "Consulting & Strategy": "🛡️",
  "Implementation & Support": "🔧",
}

export function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof services>>(
    (acc, cat) => {
      acc[cat] = services.filter((s) => s.category === cat)
      return acc
    },
    {}
  )

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`fixed left-1/2 top-16 z-50 w-[960px] max-w-[98vw] -translate-x-1/2 rounded-xl border bg-background/98 shadow-2xl backdrop-blur transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {/* Arrow indicator */}
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t bg-background" />

        <div className="grid grid-cols-4 gap-0 p-4">
          {CATEGORY_ORDER.map((cat, idx) => (
            <div
              key={cat}
              className={`flex flex-col gap-1 px-3 py-2 ${
                idx < CATEGORY_ORDER.length - 1
                  ? "border-r border-border/50"
                  : ""
              }`}
            >
              {/* Column header */}
              <div className="mb-2 flex items-center gap-2 border-b border-border/40 pb-2">
                <span className="text-lg">{CATEGORY_ICONS[cat]}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {cat}
                </span>
              </div>

              {/* Service items */}
              <div className="flex flex-col gap-0.5">
                {grouped[cat]?.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="group rounded-md px-2 py-1.5 transition-colors hover:bg-primary/8"
                  >
                    <div className="text-sm font-medium text-foreground group-hover:text-primary">
                      {service.title}
                    </div>
                    <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {service.shortDescription}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between rounded-b-xl border-t bg-muted/30 px-6 py-3">
          <span className="text-xs text-muted-foreground">
            {services.length} professional services
          </span>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
