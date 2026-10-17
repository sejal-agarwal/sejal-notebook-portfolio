"use client";

import { useEffect } from "react";

/**
 * Starts the page at the top on load and reload instead of restoring the old
 * scroll position. Links with a #hash (e.g. /#blog) still land on their section.
 */
export function ScrollToTop() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
