"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { SpiralNotebook } from "@/components/ui/SpiralNotebook";
import type { PostMeta } from "@/lib/post-types";
import { toneAt } from "@/lib/tones";
import { PostList, PostListEmpty } from "./PostList";
import "./blog-browser.css";

/** Searchable, tag-filterable list of every post, inside a spiral notebook. */
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
    <SpiralNotebook coils={18}>
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
              className={`tagButton${activeTag === tag ? " tagButtonActive" : ""}`}
              data-tone={toneAt(index)}
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
        <PostListEmpty>Nothing written on that page yet. Try another word or tag.</PostListEmpty>
      ) : (
        <PostList posts={results} />
      )}
    </SpiralNotebook>
  );
}
