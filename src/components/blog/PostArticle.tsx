import Link from "next/link";
import "@/components/ui/section.css";
import { SpiralNotebook } from "@/components/ui/SpiralNotebook";
import { TagChips } from "@/components/ui/TagChips";
import type { Post } from "@/lib/post-types";
import { PostMeta } from "./PostMeta";
import { Prose } from "./Prose";
import "./post.css";

export function PostArticle({ post }: { post: Post }) {
  return (
    <div className="postWrap pageSection">
      <Link className="backLink" href="/blog">
        <span aria-hidden="true">←</span> <span className="backLinkText">All entries</span>
      </Link>
      <SpiralNotebook coils={22} pageAs="article" pageClassName="postPage">
        <header className="postHeader">
          <PostMeta post={post} />
          <h1>{post.title}</h1>
          {post.tags.length > 0 && (
            <TagChips tags={post.tags} hrefFor={(tag) => `/blog?tag=${encodeURIComponent(tag)}`} />
          )}
        </header>
        <Prose>{post.content}</Prose>
      </SpiralNotebook>
    </div>
  );
}
