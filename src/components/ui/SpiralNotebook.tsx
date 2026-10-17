import type { ElementType } from "react";
import { Reveal } from "./Reveal";
import "./spiral-notebook.css";

type SpiralNotebookProps = {
  /** Number of wire coils down the left edge. */
  coils: number;
  /** Element used for the lined page, e.g. "article" for a blog post. */
  pageAs?: ElementType;
  pageClassName?: string;
  children: React.ReactNode;
};

export function SpiralNotebook({ coils, pageAs: Page = "div", pageClassName = "", children }: SpiralNotebookProps) {
  return (
    <Reveal className="spiralNotebook">
      <div className="spiralCoils" aria-hidden="true">
        {Array.from({ length: coils }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <Page className={`spiralPage ${pageClassName}`.trim()}>{children}</Page>
    </Reveal>
  );
}
