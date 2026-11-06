import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TagChips } from "@/components/ui/TagChips";
import type { PostMeta as PostMetaData } from "@/lib/post-types";
import { PostMeta } from "./PostMeta";
import "./post-list.css";

type PostListProps = {
  posts: PostMetaData[];
  /** Heading level for each entry title, so it nests under the section heading. */
  headingLevel?: "h2" | "h3";
  /** How far down the viewport (0-1) an entry's top edge must be before it fades in. */
  revealThreshold?: number;
};

export function PostList({ posts, headingLevel: Heading = "h2", revealThreshold }: PostListProps) {
  return (
    <ol className="postList">
      {posts.map((post) => (
        <Reveal as="li" key={post.slug} threshold={revealThreshold}>
          <article className="postCard">
            <PostMeta post={post} />
            <Heading>
              <Link className="postCardLink" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </Heading>
            <p className="postCardSummary">{post.summary}</p>
            <TagChips tags={post.tags} />
          </article>
        </Reveal>
      ))}
    </ol>
  );
}

export function PostListEmpty({ children }: { children: React.ReactNode }) {
  return <p className="postListEmpty">{children}</p>;
}
