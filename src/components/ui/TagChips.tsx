import Link from "next/link";
import { toneAt } from "@/lib/tones";
import "./tag-chips.css";

type TagChipsProps = {
  tags: string[];
  label?: string;
  /** When given, each chip becomes a link to this URL. */
  hrefFor?: (tag: string) => string;
};

export function TagChips({ tags, label = "Tags", hrefFor }: TagChipsProps) {
  return (
    <ul className="tagChips" aria-label={label}>
      {tags.map((tag, index) =>
        hrefFor ? (
          <li key={tag}>
            <Link className="tagChip tagChipLink" data-tone={toneAt(index)} href={hrefFor(tag)}>
              {tag}
            </Link>
          </li>
        ) : (
          <li className="tagChip" data-tone={toneAt(index)} key={tag}>
            {tag}
          </li>
        ),
      )}
    </ul>
  );
}
