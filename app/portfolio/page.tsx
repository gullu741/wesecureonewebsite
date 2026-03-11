import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPortfolios } from "@/lib/json-portfolio"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies & Portfolio | WeSecureOne",
  description: "Explore our successful cybersecurity case studies. See how we've helped leading organizations with ransomware recovery, penetration testing, and AWS security.",
  openGraph: {
    title: "Case Studies & Portfolio | WeSecureOne",
    description: "Read our deep-dive case studies covering enterprise incident response, SOC2 compliance, and proactive penetration testing engagements.",
  }
}

export default async function PortfolioPage() {
  const caseStudies = await getAllPortfolios()

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
        {caseStudies.map((study) => (
          <Card key={study.slug} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative h-48 w-full bg-primary/10">
              <div className="absolute inset-0 flex items-center justify-center text-primary/60">
                <span className="font-mono text-sm uppercase tracking-widest">{study.industry}</span>
              </div>
            </div>
            <CardHeader>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{study.service}</Badge>
              </div>
              <CardTitle className="line-clamp-2 text-xl">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-4">
              <p className="line-clamp-3 text-sm text-muted-foreground">{study.challenge}</p>
              <Button asChild variant="outline" className="mt-auto w-full">
                <Link href={`/portfolio/${study.slug}`}>
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
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
