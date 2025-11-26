export const dynamic = "force-static";

import { getAllBlogs } from "@/lib/blogs";
import type { Blog } from "@/app/Data/types";


export default async function sitemap() {
  const blogs = getAllBlogs();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // --- Blogs URLs ---
  const blogsUrls = blogs.map((b: Blog) => ({
    url: `${baseUrl}/blogs/${(b.slug)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // --- Static pages ---
  const staticUrls = [
    "",
    "/about",
    "/blogs",
    "/case-studies/cloud-migration",
    "/case-studies/food-traceability",
    "/case-studies/mining-plant-advisory",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // --- Combine all ---
  return [...staticUrls, ...blogsUrls];
}