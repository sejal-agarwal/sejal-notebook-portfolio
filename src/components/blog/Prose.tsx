import type { Element } from "hast";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Polaroid } from "./Polaroid";
import "./prose.css";

/** A paragraph that holds nothing but images (and the spaces between them). */
function isImageOnly(node?: Element) {
  const children = node?.children ?? [];
  const images = children.filter((child) => child.type === "element" && child.tagName === "img");
  const others = children.filter(
    (child) => !(child.type === "element" && child.tagName === "img") && !(child.type === "text" && !child.value.trim()),
  );
  return images.length > 0 && others.length === 0;
}

/** Renders a post's markdown body with the notebook typography. Images become polaroids. */
export function Prose({ children }: { children: string }) {
  return (
    <div className="prose">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // images on their own line(s) become a row of polaroids instead of a paragraph
          p: ({ node, children }) => (isImageOnly(node) ? <div className="polaroids">{children}</div> : <p>{children}</p>),
          img: ({ src, alt, title }) =>
            typeof src === "string" ? <Polaroid src={src} alt={alt ?? ""} caption={title} /> : null,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
