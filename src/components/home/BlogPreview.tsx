import { PostList, PostListEmpty } from "@/components/blog/PostList";
import { PillLink } from "@/components/ui/PillLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpiralNotebook } from "@/components/ui/SpiralNotebook";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { getAllPosts, toMeta } from "@/lib/posts";
import "./blog-preview.css";

const PREVIEW_COUNT = 3;

export function BlogPreview() {
  const posts = getAllPosts().slice(0, PREVIEW_COUNT).map(toMeta);

  return (
    <Section className="blogSection" id="blog" aria-labelledby="blog-title">
      <SectionHeading chapter="chapter five" id="blog-title">
        From the <UnderlinedPhrase>notebook</UnderlinedPhrase>
      </SectionHeading>
      <SpiralNotebook coils={14}>
        {posts.length === 0 ? (
          <PostListEmpty>Fresh page — the first entry is coming soon.</PostListEmpty>
        ) : (
          <PostList posts={posts} headingLevel="h3" />
        )}
        <div className="spiralFooter">
          <PillLink href="/blog">Browse all entries &amp; tags</PillLink>
        </div>
      </SpiralNotebook>
    </Section>
  );
}
