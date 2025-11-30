// app/blogs/page.tsx
import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

import Breadcrumb from "@/components/BreadcrumbItem";
export const metadata = {
  title: "Tech Blogs | MEHTALOGY LABS",
  description: "Technical blogs on Cloud, Integration, IIoT, Architecture, DevOps, and Software Engineering by MEHTALOGY LABS.",
};

export default function BlogListPage() {
  const blogs = getAllBlogs();

  return (
    <main className="container mx-auto px-6 ">
{/* import Breadcrumb from "@/components/BreadcrumbItem"; */}
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blogs" }]} />
      <h1 className="text-4xl font-bold mb-10">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blogs/${b.slug}`}
            className="block p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold">{b.title}</h2>
            <p className="text-sm text-muted mt-1">
              {new Date(b.date).toLocaleDateString()}
            </p>

            {b.summary && (
              <p className="mt-3 text-muted-foreground">{b.summary}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {b.tags?.map((t: string) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded highlight"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
