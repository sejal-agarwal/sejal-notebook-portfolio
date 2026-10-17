import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/blog-utils";
import { getAllPosts, getPost } from "@/lib/posts";
import { BlogHeader } from "../blog-header";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Sejal Agarwal`, description: post.summary };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="paper">
      <div className="binderRings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <BlogHeader />
      <div className="postWrap">
        <Link className="backLink" href="/blog">
          <span aria-hidden="true">←</span> <span className="backLinkText">All entries</span>
        </Link>
        <div className="spiralNotebook">
          <div className="spiralCoils" aria-hidden="true">
            {Array.from({ length: 22 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <article className="spiralPage postPage">
            <header className="postHeader">
              <p className="blogEntryMeta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min read</span>
              </p>
              <h1>{post.title}</h1>
              {post.tags.length > 0 && (
                <ul className="experienceSkills" aria-label="Tags">
                  {post.tags.map((tag, index) => (
                    <li key={tag}>
                      <Link
                        className={`experienceSkill experienceSkill${index % 3} tagLink`}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </header>
            <div className="prose">
              <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
