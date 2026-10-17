"use client";

import { useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  threshold?: number;
};

/**
 * Wraps content and sets `data-revealed="true"` once it scrolls into view, so a
 * stylesheet can transition it in. Children stay server-rendered.
 */
export function Reveal({ as: Tag = "div", threshold, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const revealed = useRevealOnScroll(ref, threshold);
  return <Tag ref={ref} data-revealed={revealed} {...props} />;
}
