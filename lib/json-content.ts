import blogs from '@/src/data/blogs.json';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
    readingTime: string;
}

export async function getPostSlugs(): Promise<string[]> {
    return blogs.map((blog) => blog.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const blog = blogs.find((b) => b.slug === slug);
    return blog ? (blog as BlogPost) : null;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const sortedBlogs = [...blogs].sort((a, b) => {
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
    });
    return sortedBlogs as BlogPost[];
}
