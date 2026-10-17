import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./prose.css";

/** Renders a post's markdown body with the notebook typography. */
export function Prose({ children }: { children: string }) {
  return (
    <div className="prose">
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </div>
  );
}
