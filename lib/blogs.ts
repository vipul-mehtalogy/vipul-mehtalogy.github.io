// lib/blogs.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import {BlogMeta} from "@/data/types"



export interface BlogPost extends BlogMeta {
    content: string; // HTML
}

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs(): BlogMeta[] {    
    const dirs = fs.readdirSync(BLOG_DIR);

    const blogs = dirs.map((slug) => {
        const filePath = path.join(BLOG_DIR, slug, "index.md");
        const file = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(file);

        return {
            title: data.title,
            date: data.date,
            updated: data.updated,
            tags: data.tags || [],
            summary: data.summary || "",
            slug,
        } as BlogMeta;
    });

    // Latest first
    return blogs.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogBySlug(slug: string){
    const filePath = path.join(BLOG_DIR, slug, "index.md");
    const file = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(file);

    return {
        title: data.title,
        date: data.date,
        updated: data.updated,
        tags: data.tags || [],
        summary: data.summary || "",
        slug,
        content: await marked.parse(content),
    };
}

export function getAllSlugs(): string[] {
    return fs.readdirSync(BLOG_DIR);
}
