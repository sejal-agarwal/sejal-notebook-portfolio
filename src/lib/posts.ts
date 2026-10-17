import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post, PostMeta } from "./post-types";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function toIsoDate(value: unknown) {
  // YAML parses an unquoted `2026-10-12` into a Date (at UTC midnight)
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

function readPost(file: string): Post | null {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
  if (data.draft === true) return null;

  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    date: toIsoDate(data.date),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag).trim().toLowerCase()) : [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

/** All published posts, newest first. Files with `draft: true` are skipped. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

/** Strips the markdown body so only light metadata is sent to client components. */
export function toMeta(post: Post): PostMeta {
  const meta: Partial<Post> = { ...post };
  delete meta.content;
  return meta as PostMeta;
}
