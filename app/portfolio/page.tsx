import { Metadata } from "next"
import { getAllPortfoliosSync } from "@/lib/json-portfolio"
import PortfolioClient from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio | Case Studies in Security Excellence",
  description: "Review our security case studies and see how we've helped global organizations overcome complex cyber challenges and achieve compliance.",
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioPage() {
  const portfolios = getAllPortfoliosSync()
  return <PortfolioClient portfolios={portfolios} />
}
