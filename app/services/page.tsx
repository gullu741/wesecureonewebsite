import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/src/content/services"
import { ArrowRight, CheckCircle2, Code2, Building2, ShieldCheck, Wrench } from "lucide-react"

export const metadata = {
  title: "Cybersecurity Services | WeSecureOne",
  description: "Comprehensive offensive security, penetration testing, continuous monitoring (MDR), and compliance solutions. Protect your infrastructure with WeSecureOne.",
  openGraph: {
    title: "Cybersecurity Services | WeSecureOne",
    description: "Explore our expert offensive security, MDR, and compliance advisory services tailored for enterprise architecture.",
  }
}

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
                {catServices.map((service) => (
                  <Card key={service.slug} className="flex flex-col border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {service.shortName}
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-base line-clamp-2">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                        {service.deliverables.slice(0, 3).map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="line-clamp-1">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full" variant="outline">
                        <Link href={`/services/${service.slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
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
