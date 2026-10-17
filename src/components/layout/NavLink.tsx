import Link from "next/link";
import type { MouseEventHandler } from "react";
import type { NavTone } from "@/data/navigation";
import "./site-header.css";

type NavLinkProps = {
  href: string;
  tone: NavTone;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

/** Pill-shaped nav link. Hash links stay plain anchors; paths use next/link. */
export function NavLink({ href, tone, className = "", onClick, children }: NavLinkProps) {
  const Anchor = href.startsWith("/") ? Link : "a";
  return (
    <Anchor className={`navLink ${className}`.trim()} data-tone={tone} href={href} onClick={onClick}>
      {children}
    </Anchor>
  );
}
