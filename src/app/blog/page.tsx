import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogBrowser } from "@/components/blog/BlogBrowser";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { PaperPage } from "@/components/ui/PaperPage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { getAllPosts, toMeta } from "@/lib/posts";
import "./blog-page.css";

export const metadata: Metadata = {
  title: "Blog | Sejal Agarwal",
  description: "Notes on software, HCI research, and things I'm learning along the way.",
};

export default function BlogPage() {
  const posts = getAllPosts().map(toMeta);

  return (
    <PaperPage>
      <BlogHeader />
      <Section className="blogPageSection" aria-labelledby="blog-page-title">
        <SectionHeading as="h1" chapter="the notebook" id="blog-page-title">
          All <UnderlinedPhrase>entries</UnderlinedPhrase>
        </SectionHeading>
        <Suspense fallback={null}>
          <BlogBrowser posts={posts} />
        </Suspense>
      </Section>
    </PaperPage>
  );
}
