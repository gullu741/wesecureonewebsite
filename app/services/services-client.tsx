"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Service } from "@/src/content/services"
import * as Icons from "lucide-react"

const CATEGORIES = ["All", "Consulting & Strategy", "Development", "Implementation & Support", "Industry Solutions"]

export default function ServicesClient({ services }: { services: Service[] }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return services
    return services.filter((s) => s.category === activeCategory)
  }, [services, activeCategory])
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-muted-foreground"
        >
          We partner with organizations to solve complex security challenges, build resilient architectures, and protect against advanced cyber threats.
        </motion.p>
      </div>

      <div className="mb-12 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
          // Dynamic icon resolution
          const iconName = service.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
          // @ts-ignore
          const Icon = (Icons as any)[iconName] || Icons.ShieldCheck
          
          return (
            <motion.div
              layout
              key={service.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group relative"
            >
              <Card className="relative flex h-full flex-col overflow-hidden border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <div className="h-1.5 w-full bg-primary/10 transition-colors group-hover:bg-primary" />
                <CardHeader className="relative pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {service.shortName}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <div className="flex-1 px-6 pb-6">
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border/50 bg-muted/5 p-6 transition-colors group-hover:bg-primary/5">
                  <Button asChild variant="ghost" className="w-full justify-between group-hover:text-primary">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
