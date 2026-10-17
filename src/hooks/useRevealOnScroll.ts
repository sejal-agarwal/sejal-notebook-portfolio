import { useEffect, useState, type RefObject } from "react";

/**
 * Becomes true (and stays true) once the element's top edge scrolls above
 * `threshold` × the viewport height.
 */
export function useRevealOnScroll(ref: RefObject<Element | null>, threshold = 0.7) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    function check() {
      const element = ref.current;
      if (!element) return;
      if (element.getBoundingClientRect().top < window.innerHeight * threshold) {
        setRevealed(true);
        cleanup();
      }
    }
    function cleanup() {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return cleanup;
  }, [ref, threshold]);

  return revealed;
}
