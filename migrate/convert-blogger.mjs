/**
 * Blogger XML → Markdown Converter (ESM Version)
 * ----------------------------------------------
 * Works with Next.js / Node ESM ("type": "module").
 */

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { parseStringPromise } from "xml2js";
import TurndownService from "turndown";
import slugify from "slugify";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Markdown converter
const turndown = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  codeBlockStyle: "fenced"
});

// Paths
const INPUT_FILE = path.join(__dirname, "./", "Blogger", "Blogs", "Mehtalogy", "feed.atom");
const OUTPUT_DIR = path.join(__dirname, "..", "content", "blogs");

console.log(INPUT_FILE);

fs.ensureDirSync(OUTPUT_DIR);

// Date formatter
function formatDate(dateStr) {
  return new Date(dateStr).toISOString().split("T")[0];
}

async function loadXML() {
  const xmlData = await fs.readFile(INPUT_FILE, "utf-8");
  return parseStringPromise(xmlData);
}

async function convert() {
  console.log("⏳ Parsing Blogger XML...");

  const xml = await loadXML();
  const entries = xml.feed?.entry || [];
  let postCount = 0;

  for (const entry of entries) {
    // 1) Skip non-post entries (COMMENTS, etc.)
    // Note: xml2js map makes names like 'blogger:type' available as entry['blogger:type'] (array)
    const bloggerType = entry['blogger:type']?.[0] || entry['blogger:type'];
    if (bloggerType && String(bloggerType).toUpperCase() !== "POST") {
      // not a blog post — skip
      continue;
    }

    // 2) Extract categories safely (optional use)
    const categories = getCategories(entry); // array of tag terms or []

    // 3) Title
    const title = entry.title?.[0]?._ ?? entry.title?.[0] ?? "Untitled";

    // 4) Content: xml2js sometimes stores the HTML as entry.content[0]._ or entry.content[0]
    const rawContentNode = entry.content?.[0];
    const contentHTML = rawContentNode?._ ?? rawContentNode ?? "";

    // 5) Dates
    const published = entry.published?.[0] || "";
    const updated = entry.updated?.[0] || published || "";

    // Skip drafts / empty content
    if (!contentHTML || !String(contentHTML).trim()) continue;

    // 6) Slug & Markdown conversion
    const slug = slugify(String(title), { lower: true, strict: true }) || `post-${Date.now()}`;
    const markdownBody = turndown.turndown(String(contentHTML));

    // 7) Build frontmatter (use categories as tags)
    const fmTags = categories.length ? JSON.stringify(categories) : "[]";
    const frontmatter = `---
title: "${String(title).replace(/"/g, "'")}"
slug: "${slug}"
date: "${formatDate(published)}"
updated: "${formatDate(updated)}"
tags: ${fmTags}
summary: ""
---
`;

    const finalMarkdown = frontmatter + "\n" + markdownBody.trim() + "\n";

    // 8) Write file
    const blogDir = path.join(OUTPUT_DIR, slug);
    const filePath = path.join(blogDir, "index.md");

    await fs.ensureDir(blogDir);
    await fs.writeFile(filePath, finalMarkdown, "utf-8");

    postCount++;
    console.log(`✓ Created: ${slug}/index.md`);
  }

  console.log(`\n🎉 Migration completed! ${postCount} Markdown posts generated.`);
}

function getCategories(entry) {
  if (!entry.category) return [];

  return entry.category
    .map(cat => cat.$?.term)
    .filter(x => x && x.trim() !== "");
}

convert().catch(err => console.error("❌ Error:", err));
