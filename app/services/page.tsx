import { Metadata } from "next"
import { services } from "@/src/content/services"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "Services | Elite Cybersecurity Solutions",
  description: "Explore our range of professional cybersecurity services, including Penetration Testing, MDR, Cloud Security, and Compliance Advisory.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return <ServicesClient services={services} />
}
