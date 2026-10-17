"use client";

import { useScrolled } from "@/hooks/useScrolled";
import "./site-header.css";

/** Sticky top bar that gains a frosted background once the page scrolls. */
export function SiteHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  const scrolled = useScrolled();
  const classes = ["header", className, scrolled && "headerScrolled"].filter(Boolean).join(" ");
  return <header className={classes}>{children}</header>;
}
