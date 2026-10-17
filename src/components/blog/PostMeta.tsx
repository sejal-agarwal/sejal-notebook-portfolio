import { formatDate } from "@/lib/format-date";
import type { PostMeta as PostMetaData } from "@/lib/post-types";
import "./post-meta.css";

export function PostMeta({ post }: { post: Pick<PostMetaData, "date" | "readingMinutes"> }) {
  return (
    <p className="postMeta">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}
