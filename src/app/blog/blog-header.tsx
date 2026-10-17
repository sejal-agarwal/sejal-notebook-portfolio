"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sparkle } from "../notebook-bits";

export function BlogHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onBlogIndex = usePathname() === "/blog";

  useEffect(() => {
    function updateScrollState() {
      setHasScrolled(window.scrollY > 24);
    }
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`header blogHeader${hasScrolled ? " headerScrolled" : ""}`}>
      <Link className="wordmark" href="/" aria-label="Sejal Agarwal, home">
        <Sparkle className="wordmarkSpark" />
        <span>Sejal Agarwal</span>
      </Link>
      <nav className="blogHeaderLinks" aria-label="Blog navigation">
        <Link className="navLink navAbout" href="/">
          Home
        </Link>
        {!onBlogIndex && (
          <Link className="navLink navHello" href="/blog">
            All entries
          </Link>
        )}
      </nav>
    </header>
  );
}
