import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts, toMeta } from "@/lib/posts";
import { Sparkle, UnderlinedPhrase } from "../notebook-bits";
import { BlogBrowser } from "./blog-browser";
import { BlogHeader } from "./blog-header";

export const metadata: Metadata = {
  title: "Blog | Sejal Agarwal",
  description: "Notes on software, HCI research, and things I'm learning along the way.",
};

export default function BlogPage() {
  const posts = getAllPosts().map(toMeta);

  return (
    <main className="paper">
      <div className="binderRings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <BlogHeader />
      <section className="blogPageSection" aria-labelledby="blog-page-title">
        <p className="chapterLabel">
          <Sparkle className="chapterSpark" />
          <span>the notebook</span>
        </p>
        <h1 className="blogPageTitle" id="blog-page-title">
          All <UnderlinedPhrase>entries</UnderlinedPhrase>
        </h1>
        <Suspense fallback={null}>
          <BlogBrowser posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}
