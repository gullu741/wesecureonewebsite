import { notFound } from "next/navigation"
import Link from "next/link"
import { getPortfolioSlugs, getPortfolioBySlug } from "@/lib/json-portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react"

export async function generateStaticParams() {
  const slugs = await getPortfolioSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const study = await getPortfolioBySlug(resolvedParams.slug)
  if (!study) return { title: "Case Study Not Found" }

  return {
    title: `${study.title} | WeSecureOne`,
    description: study.challenge,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const study = await getPortfolioBySlug(resolvedParams.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{study.industry}</Badge>
          <Badge variant="outline">{study.service}</Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
          {study.clientContext}
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {study.approach}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </section>

          <section className="rounded-2xl bg-primary/10 p-8">
            <h2 className="text-2xl font-bold tracking-tight text-primary">What We Learned</h2>
            <p className="mt-4 text-lg text-primary/80 leading-relaxed italic">
              "{study.whatWeLearned}"
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Key Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {study.outcomes.map((outcome, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">{outcome.value}</span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{outcome.metric}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-background">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Start a Similar Project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
