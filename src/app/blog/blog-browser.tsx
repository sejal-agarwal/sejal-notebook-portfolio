"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { formatDate, type PostMeta } from "@/lib/blog-utils";
import { TagChips } from "../notebook-bits";

export function BlogBrowser({ posts }: { posts: PostMeta[] }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(searchParams.get("tag") ?? "");

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [posts]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (activeTag && !post.tags.includes(activeTag)) return false;
      if (!needle) return true;
      return [post.title, post.summary, ...post.tags].some((text) => text.toLowerCase().includes(needle));
    });
  }, [posts, query, activeTag]);

  function selectTag(tag: string) {
    setActiveTag(tag);
    const url = tag ? `/blog?tag=${encodeURIComponent(tag)}` : "/blog";
    window.history.replaceState(null, "", url);
  }

  return (
    <div className="spiralNotebook">
      <div className="spiralCoils" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="spiralPage">
        <div className="blogSearch" role="search">
          <label htmlFor="blog-search">Search entries</label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search titles, summaries, tags…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
        </div>

        {tags.length > 0 && (
          <div className="tagFilter" role="group" aria-label="Filter by tag">
            <button
              type="button"
              className={`tagButton${activeTag === "" ? " tagButtonActive" : ""}`}
              aria-pressed={activeTag === ""}
              onClick={() => selectTag("")}
            >
              all
            </button>
            {tags.map(([tag, count], index) => (
              <button
                type="button"
                key={tag}
                className={`tagButton tagButton${index % 3}${activeTag === tag ? " tagButtonActive" : ""}`}
                aria-pressed={activeTag === tag}
                onClick={() => selectTag(activeTag === tag ? "" : tag)}
              >
                {tag} <span>{count}</span>
              </button>
            ))}
          </div>
        )}

        <p className="blogCount" aria-live="polite">
          {results.length} {results.length === 1 ? "entry" : "entries"}
          {activeTag && <> tagged “{activeTag}”</>}
        </p>

        {results.length === 0 ? (
          <p className="blogEmpty">Nothing written on that page yet. Try another word or tag.</p>
        ) : (
          <ol className="blogEntries">
            {results.map((post) => (
              <li key={post.slug}>
                <article className="blogEntry">
                  <p className="blogEntryMeta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min read</span>
                  </p>
                  <h2>
                    <Link className="blogEntryLink" href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="blogEntrySummary">{post.summary}</p>
                  <TagChips tags={post.tags} />
                </article>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
