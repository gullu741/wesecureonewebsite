import { notFound } from "next/navigation"
import Link from "next/link"
import { services } from "@/src/content/services"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react"

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = services.find((s) => s.slug === resolvedParams.slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | WeSecureOne`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = services.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </Button>
        <Badge className="mb-4" variant="secondary">Service Offering</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
          {service.description}
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-bold tracking-tight">Problems We Solve</h2>
            <ul className="mt-6 space-y-4">
              {service.problemsSolved.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {service.process.map((step) => (
                <Card key={step.step} className="bg-muted/50 border-none">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="rounded-lg border p-6">
                  <h3 className="flex items-center gap-3 text-lg font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Deliverables</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t pt-6">
                <p className="text-sm font-medium text-muted-foreground">Typical Timeline</p>
                <p className="mt-1 text-lg font-semibold">{service.sampleTimeline}</p>
              </div>
              <div className="mt-8">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
