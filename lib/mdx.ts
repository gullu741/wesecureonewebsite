import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

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

export function getPostSlugs() {
  return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const words = content.split(/\s+/g).length;
  const minutes = Math.ceil(words / 200);
  const readingTime = `${minutes} min read`;

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags || [],
    content,
    readingTime,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
