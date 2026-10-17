"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/layout/NavLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Wordmark } from "@/components/layout/Wordmark";
import "./blog-header.css";

export function BlogHeader() {
  const onBlogIndex = usePathname() === "/blog";

  return (
    <SiteHeader className="blogHeader">
      <Wordmark href="/" />
      <nav className="blogHeaderLinks" aria-label="Blog navigation">
        <NavLink href="/" tone="blue">
          Home
        </NavLink>
        {!onBlogIndex && (
          <NavLink className="blogHeaderAllEntries" href="/blog" tone="yellow">
            All entries
          </NavLink>
        )}
      </nav>
    </SiteHeader>
  );
}
