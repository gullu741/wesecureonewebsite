import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getPostSlugs } from "@/lib/json-content"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { format } from "date-fns"
import Markdown from "react-markdown"

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const resolvedParams = await params
    const post = await getPostBySlug(resolvedParams.slug)
    if (!post) throw new Error("Not found")
    return {
      title: `${post.title} | WeSecureOne Blog`,
      description: post.description,
    }
  } catch (e) {
    return { title: "Post Not Found" }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  let post
  try {
    const resolvedParams = await params
    post = await getPostBySlug(resolvedParams.slug)
    if (!post) notFound()
  } catch (e) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 -ml-4 text-muted-foreground">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {post.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b pb-8">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <article className="prose prose-emerald dark:prose-blue dark:prose-invert mt-12 max-w-none lg:prose-lg">
          <Markdown>{post.content}</Markdown>
        </article>

        <div className="mt-16 border-t pt-8">
          <div className="rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="text-2xl font-bold">Enjoyed this article?</h3>
            <p className="mt-2 text-muted-foreground">Subscribe to our newsletter for more insights.</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
