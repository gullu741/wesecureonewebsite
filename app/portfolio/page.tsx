"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPortfoliosSync } from "@/lib/json-portfolio"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Landmark, 
  Activity, 
  ShoppingCart, 
  Cpu, 
  Factory, 
  Truck, 
  Globe, 
  ShieldCheck,
  Zap
} from "lucide-react"

const INDUSTRY_ICONS: Record<string, any> = {
  "Finance": Landmark,
  "Finance / Fintech": Zap,
  "Healthcare": Activity,
  "Retail & E-commerce": ShoppingCart,
  "Technology / SaaS": Cpu,
  "Manufacturing": Factory,
  "Logistics": Truck,
  "Government": Globe,
}


export default function PortfolioPage() {
  const caseStudies = getAllPortfoliosSync();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Our Work
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Discover how we&apos;ve helped leading organizations overcome complex challenges and achieve their strategic goals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, i) => {
          const Icon = INDUSTRY_ICONS[study.industry] || ShieldCheck;
          return (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 blur transition duration-500 group-hover:opacity-100" />
              
              <Card className="relative flex h-full flex-col overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                {/* Client Logo Header */}
                <div className="relative flex h-40 w-full items-center justify-center overflow-hidden bg-muted/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  
                  {/* Styled Logo Container */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-xl ring-1 ring-border/50 transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-2xl bg-primary/5" />
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Industry: {study.industry}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <div className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {study.service}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {study.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="mt-auto flex flex-col gap-5 pt-0">
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                    {study.challenge}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="text-[10px] font-medium text-muted-foreground/50">
                      {new Date(study.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    <Button asChild variant="ghost" className="h-8 px-0 text-xs font-bold uppercase tracking-widest text-primary hover:bg-transparent hover:text-primary/80">
                      <Link href={`/portfolio/${study.slug}`} className="flex items-center gap-2">
                        Case Study <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-24 rounded-3xl bg-secondary px-6 py-16 text-center text-secondary-foreground sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to be our next success story?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-foreground/80">
          Let&apos;s discuss how our security expertise can help you protect your organization.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </div >
  )
}
