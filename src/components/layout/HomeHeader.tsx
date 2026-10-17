"use client";

import { useState } from "react";
import { homeNavigation } from "@/data/navigation";
import { NavLink } from "./NavLink";
import { SiteHeader } from "./SiteHeader";
import { Wordmark } from "./Wordmark";

export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <SiteHeader>
      <Wordmark
        href="#top"
        onClick={(event) => {
          event.preventDefault();
          closeMenu();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <button
        className={`menuToggle${menuOpen ? " menuToggleOpen" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navigation${menuOpen ? " navigationOpen" : ""}`} id="site-navigation" aria-label="Main navigation">
        {homeNavigation.map((link) => (
          <NavLink href={link.href} key={link.label} tone={link.tone} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </SiteHeader>
  );
}
