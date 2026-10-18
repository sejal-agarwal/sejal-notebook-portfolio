"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { studies } from "@/data/studies";
import { StudySheet } from "./StudySheet";

/**
 * Research studies as a manila folder. On desktop the tabs pick which sheet shows;
 * on phones the sheets sit in a swipeable row with dots underneath.
 */
export function StudyFolder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  /** Distance between one sheet's left edge and the next, so scroll position maps to an index. */
  function sheetStep(track: HTMLDivElement) {
    const [first, second] = track.children as HTMLCollectionOf<HTMLElement>;
    return second.offsetLeft - first.offsetLeft;
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / sheetStep(track));
    setActiveIndex(Math.min(Math.max(index, 0), studies.length - 1));
  }

  function scrollToSheet(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * sheetStep(track), behavior: "smooth" });
  }

  return (
    <Reveal className="studyFolder">
      <div className="studyTabs" role="tablist" aria-label="Research studies">
        {studies.map((item, index) => (
          <button
            aria-controls={`study-panel-${index}`}
            aria-selected={activeIndex === index}
            className={`studyTab${activeIndex === index ? " studyTabActive" : ""}`}
            id={`study-tab-${index}`}
            key={item.tab}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {item.tab}
          </button>
        ))}
      </div>
      <div className="studyDrawer">
        <div className="studyTrack" onScroll={handleScroll} ref={trackRef}>
          {studies.map((study, index) => (
            <StudySheet active={activeIndex === index} index={index} key={study.tab} study={study} />
          ))}
        </div>
        <div className="studyDots">
          {studies.map((study, index) => (
            <button
              aria-current={activeIndex === index}
              aria-label={`Show study ${index + 1} of ${studies.length}: ${study.tab}`}
              className="studyDot"
              key={study.tab}
              onClick={() => scrollToSheet(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
