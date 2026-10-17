import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";
import "./section.css";

type SectionHeadingProps = {
  /** Handwritten label above the title, e.g. "chapter two". */
  chapter: string;
  id: string;
  /** Use "h1" on pages where this is the page title. */
  as?: "h1" | "h2";
  children: React.ReactNode;
};

/** Chapter label + title; both fade in once scrolled into view. */
export function SectionHeading({ chapter, id, as: Title = "h2", children }: SectionHeadingProps) {
  return (
    <Reveal className="sectionHeading">
      <p className="chapterLabel">
        <Sparkle className="chapterSpark" />
        <span>{chapter}</span>
      </p>
      <Title className="sectionTitle" id={id}>
        {children}
      </Title>
    </Reveal>
  );
}
