"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/src/content/services"
import { ArrowRight, CheckCircle2, Code2, Building2, ShieldCheck, Wrench } from "lucide-react"


export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We partner with organizations to solve complex security challenges, build resilient architectures, and protect against advanced cyber threats.
        </p>
      </div>

      {(() => {
        const CATEGORY_ORDER = [
          "Development",
          "Industry Solutions",
          "Consulting & Strategy",
          "Implementation & Support",
        ]

        const CATEGORY_ICONS: Record<string, any> = {
          "Development": Code2,
          "Industry Solutions": Building2,
          "Consulting & Strategy": ShieldCheck,
          "Implementation & Support": Wrench,
        }

        const grouped = CATEGORY_ORDER.reduce<Record<string, typeof services>>(
          (acc, cat) => {
            acc[cat] = services.filter((s) => s.category === cat)
            return acc
          },
          {}
        )

        return CATEGORY_ORDER.map((cat) => {
          const catServices = grouped[cat]
          const Icon = CATEGORY_ICONS[cat]
          if (!catServices || catServices.length === 0) return null

          return (
            <section key={cat} className="mb-20 last:mb-0">
              <div className="mb-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-border/60"></div>
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="h-6 w-6 text-primary/60 md:h-8 md:w-8" />}
                  <h2 className="whitespace-nowrap text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground/80 sm:text-2xl md:text-3xl">
                    {cat}
                  </h2>
                </div>
                <div className="h-px flex-1 bg-border/60"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {catServices.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    {/* Decorative Background Glow */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
                    
                    <Card className="relative flex h-full flex-col overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                      {/* Top Accent Bar */}
                      <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
                      
                      <CardHeader className="relative pb-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                            {service.shortName}
                          </div>
                          <div className="opacity-20 transition-opacity duration-300 group-hover:opacity-100">
                            {Icon && <Icon className="h-5 w-5 text-primary" />}
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base leading-relaxed text-muted-foreground line-clamp-2">
                          {service.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex flex-1 flex-col">
                        <div className="mb-8 space-y-3">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/50">
                            Key Deliverables
                          </p>
                          <ul className="space-y-2.5">
                            {service.deliverables.slice(0, 3).map((deliverable, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                                  <CheckCircle2 className="h-2.5 w-2.5 text-primary" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground/80 transition-colors group-hover:text-foreground">
                                  {deliverable}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-auto">
                          <Button asChild className="w-full group/btn overflow-hidden" variant="ghost">
                            <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                               <span>Learn More</span>
                               <motion.div
                                 className="transition-transform duration-300"
                                 whileHover={{ x: 5 }}
                               >
                                <ArrowRight className="h-4 w-4 text-primary" />
                               </motion.div>
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          )
        })
      })()}

      <div className="mt-24 rounded-3xl bg-secondary px-6 py-16 text-center text-secondary-foreground sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Not sure where to start?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Schedule a free consultation to discuss your specific needs and how we can help.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
