import Link from "next/link";
import type { MouseEventHandler } from "react";
import { Sparkle } from "@/components/ui/Sparkle";
import "./site-header.css";

type WordmarkProps = { href: string; onClick?: MouseEventHandler<HTMLAnchorElement> };

export function Wordmark({ href, onClick }: WordmarkProps) {
  const Anchor = href.startsWith("/") ? Link : "a";
  return (
    <Anchor className="wordmark" href={href} aria-label="Sejal Agarwal, home" onClick={onClick}>
      <Sparkle className="wordmarkSpark" />
      <span>Sejal Agarwal</span>
    </Anchor>
  );
}
