"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  ShieldCheck,
  Landmark,
  Activity,
  ShoppingCart,
  Cpu,
  Factory,
  Truck,
  Globe,
  Zap
} from "lucide-react"
import { CaseStudy } from "@/lib/json-portfolio"

const IndustryIcon = ({ industry, className }: { industry: string, className?: string }) => {
  const ind = industry.toLowerCase()
  if (ind.includes('finance')) return <Landmark className={className} />
  if (ind.includes('health')) return <Activity className={className} />
  if (ind.includes('retail') || ind.includes('commerce')) return <ShoppingCart className={className} />
  if (ind.includes('tech') || ind.includes('saas')) return <Cpu className={className} />
  if (ind.includes('manufac')) return <Factory className={className} />
  if (ind.includes('logis')) return <Truck className={className} />
  if (ind.includes('gov')) return <Globe className={className} />
  return <ShieldCheck className={className} />
}

export default function PortfolioClient({ portfolios }: { portfolios: CaseStudy[] }) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-muted-foreground"
        >
          Our track record of securing industry leaders across finance, healthcare, technology, and beyond.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((study, index) => {
          return (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Card className="relative flex h-full flex-col overflow-hidden border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <div className="relative flex h-40 w-full items-center justify-center overflow-hidden bg-muted/10">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-2xl ring-1 ring-border/50 transition-transform duration-500 group-hover:scale-105">
                    <IndustryIcon industry={study.industry} className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {study.service}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {study.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pb-6">
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </CardContent>

                <div className="border-t border-border/50 bg-muted/5 p-4 transition-colors group-hover:bg-primary/5">
                  <Button asChild variant="ghost" className="w-full justify-between group-hover:text-primary">
                    <Link href={`/portfolio/${study.slug}`}>
                      View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
