"use client";

import { useEffect, useRef, useState } from "react";
import { BoardDecor } from "./BoardDecor";

/** Corkboard that pins its notes and pops in its decorations once scrolled into view. */
export function ProjectBoard({ children }: { children: React.ReactNode }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`projectBoard${visible ? " projectBoardVisible" : ""}`} ref={boardRef}>
      <div className="projectNotes">{children}</div>
      <BoardDecor />
    </div>
  );
}
