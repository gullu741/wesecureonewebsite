import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/src/content/services"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Services | WeSecureOne",
  description: "Comprehensive offensive security, continuous monitoring, and compliance solutions.",
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="mt-2 text-base">{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                {service.deliverables.slice(0, 3).map((deliverable, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href={`/services/${service.slug}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

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
