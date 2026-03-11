"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
  website: z.string().max(0, "Spam detected").optional(), // Honeypot
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      serviceInterest: "",
      budgetRange: "",
      timeline: "",
      message: "",
      consent: false,
      website: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)
      form.reset()
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Let's Build Something Great
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Whether you need a full-scale digital transformation or a specific technical solution, our team is ready to help.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {isSuccess ? (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Thank you for reaching out!</CardTitle>
                <CardDescription className="text-primary/80">
                  We've received your message and will be in touch shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                  Send another message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Honeypot field */}
              <div className="hidden">
                <Label htmlFor="website">Website</Label>
                <Input id="website" {...form.register("website")} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" {...form.register("fullName")} placeholder="Jane Doe" />
                  {form.formState.errors.fullName && (
                    <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input id="email" type="email" {...form.register("email")} placeholder="jane@company.com" />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" {...form.register("company")} placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Job Title</Label>
                  <Input id="role" {...form.register("role")} placeholder="CTO" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" {...form.register("phone")} placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceInterest">Service of Interest *</Label>
                  <Select onValueChange={(val) => form.setValue("serviceInterest", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-automation">AI & Automation</SelectItem>
                      <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                      <SelectItem value="data-engineering">Data Engineering</SelectItem>
                      <SelectItem value="product-strategy">Product Strategy</SelectItem>
                      <SelectItem value="web-platform">Web & Platform Engineering</SelectItem>
                      <SelectItem value="security-compliance">Security & Compliance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.serviceInterest && (
                    <p className="text-sm text-destructive">{form.formState.errors.serviceInterest.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Estimated Budget</Label>
                  <Select onValueChange={(val) => form.setValue("budgetRange", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<50k">Less than $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                      <SelectItem value="250k+">$250k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select onValueChange={(val) => form.setValue("timeline", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6+months">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="Tell us about your goals, challenges, and what you're looking to achieve."
                  className="min-h-[150px]"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={form.watch("consent")}
                  onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the privacy policy *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    We will never share your information with third parties.
                  </p>
                </div>
              </div>
              {form.formState.errors.consent && (
                <p className="text-sm text-destructive">{form.formState.errors.consent.message}</p>
              )}

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <Card className="bg-muted/50 border-none">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">hello@wesecureone.example</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech City, TC 90210
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-none">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex gap-3">
                  <span className="font-bold text-white">1.</span>
                  <span>We'll review your request within 24 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white">2.</span>
                  <span>We'll schedule a 30-minute discovery call.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white">3.</span>
                  <span>We'll provide a tailored proposal and timeline.</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
