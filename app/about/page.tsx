import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Users, Target, Zap } from "lucide-react"

export const metadata = {
  title: "About Us | WeSecureOne",
  description: "Learn more about our mission, values, and the elite team behind WeSecureOne's industry-leading cybersecurity, MDR, and compliance solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | WeSecureOne",
    description: "Learn more about our mission, values, and the elite team behind WeSecureOne.",
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          About WeSecureOne
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We are a team of elite cybersecurity engineers, threat hunters, and compliance experts dedicated to protecting organizations from advanced cyber threats.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              To empower businesses with robust, proactive, and intelligent cybersecurity solutions that protect their assets and reputation. We believe that security should be a business enabler, not a roadblock.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">We strive for the highest quality in everything we do, from code to communication.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-secondary-foreground">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Collaboration</h3>
                  <p className="text-muted-foreground">We partner closely with our clients, acting as an extension of their team.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Vigilance</h3>
                  <p className="text-muted-foreground">We stay ahead of the curve, constantly monitoring the threat landscape and adapting our defenses.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="bg-muted/50 border-none">
            <CardHeader>
              <CardTitle className="text-2xl">Our Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">Zero Trust Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">Assume Breach Mentality</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">Defense in Depth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">Continuous Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">Compliance by Design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership Team</h2>
          <p className="mt-4 text-muted-foreground">The experts guiding our vision and strategy.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "Sarah Jenkins", role: "CEO & Chief Information Security Officer", initials: "SJ" },
            { name: "David Chen", role: "Head of Offensive Security", initials: "DC" },
            { name: "Elena Rodriguez", role: "Director of Compliance", initials: "ER" }
          ].map((leader, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {leader.initials}
                </div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24 rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Join Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          We&apos;re always looking for talented individuals who share our passion for technology and innovation.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/contact">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
