// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getBlogBySlug } from "@/lib/blogs";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = await params;
  const post = await getBlogBySlug(slug.slug);

  return {
    title: `${post.title} | Mehtalogy`,
    description: post.summary || post.title,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params;
  const post = await getBlogBySlug(slug.slug);

  if (!post) return notFound();
  const tags = post.tags ?? [];

  return (
    <main className="container mx-auto px-6 prose dark:prose-invert max-w-3xl">
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="text-muted text-sm mt-2">
        Published on {new Date(post.date).toLocaleDateString()}
        {post.updated &&
          ` • Updated ${new Date(post.updated).toLocaleDateString()}`}
      </p>

      {tags.length > 0 && (
        <div className="flex gap-2 mt-4">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs highlight rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <article
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
