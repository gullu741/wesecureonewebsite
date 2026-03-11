import Link from "next/link"
import { getAllPosts } from "@/lib/json-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata = {
  title: "Blog | WeSecureOne",
  description: "Insights, tutorials, and news from our team of experts.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Insights & Ideas
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Explore our latest thoughts on threat intelligence, compliance, and the future of cyber defense.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="line-clamp-2 text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="mt-2 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="line-clamp-3 mb-6 text-muted-foreground">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-primary hover:text-primary/80">
                Read Article <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
