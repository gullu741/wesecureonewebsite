import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services } from "@/src/content/services"
import { caseStudies } from "@/src/content/caseStudies"
import testimonials from "@/src/data/testimonials.json"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  const featuredServices = services.slice(0, 6)
  const featuredCaseStudies = caseStudies.slice(0, 3)

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="secondary">
            Secure Product Development & Elite Cyber Defense
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            We Build Secure Products & <span className="text-primary">Defend Your Future</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            WeSecureOne partners with industry leaders to engineer scalable platforms, deliver elite penetration testing, and provide continuous monitoring.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book a Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground">
          TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale md:gap-16">
          {/* Placeholders for logos */}
          <div className="text-xl font-bold">Acme Corp</div>
          <div className="text-xl font-bold">Globex</div>
          <div className="text-xl font-bold">Soylent</div>
          <div className="text-xl font-bold">Initech</div>
          <div className="text-xl font-bold">Umbrella</div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-muted-foreground">Comprehensive solutions for modern security challenges.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.slug} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="link" className="px-0">
                  <Link href={`/services/${service.slug}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
              <p className="mt-4 text-muted-foreground">See how we&apos;ve helped our clients succeed.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/portfolio">View All Case Studies</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <Card key={study.slug} className="overflow-hidden">
                <div className="relative h-48 w-full bg-primary/10">
                  {/* Placeholder for case study image */}
                  <div className="absolute inset-0 flex items-center justify-center text-primary/60">
                    <span className="font-mono text-sm uppercase tracking-widest">{study.industry}</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{study.service}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{study.challenge}</p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href={`/portfolio/${study.slug}`}>
                      Read case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-muted-foreground">A proven process for building secure systems and defending operations.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              1
            </div>
            <h3 className="mb-2 text-xl font-semibold">Architecture & Design</h3>
            <p className="text-muted-foreground">We plan scalable, resilient foundations and conduct threat modeling before a single line of code is written.</p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              2
            </div>
            <h3 className="mb-2 text-xl font-semibold">Secure Engineering</h3>
            <p className="text-muted-foreground">Our full-stack teams build robust products, embedding security best practices directly into the development lifecycle.</p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              3
            </div>
            <h3 className="mb-2 text-xl font-semibold">Refinement & Hardening</h3>
            <p className="text-muted-foreground">We relentlessly test against vulnerabilities through penetration testing and continuous remediation.</p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              4
            </div>
            <h3 className="mb-2 text-xl font-semibold">Continuous Monitoring</h3>
            <p className="text-muted-foreground">Our expert analysts monitor your environment 24/7 to detect and respond to threats in real-time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-white/10 text-white backdrop-blur-sm border-white/20">
                <CardContent className="pt-6">
                  <p className="mb-6 text-lg italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-primary-foreground/80">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4">
        <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground">
            Let&apos;s discuss how our security expertise can help you protect your organization.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
