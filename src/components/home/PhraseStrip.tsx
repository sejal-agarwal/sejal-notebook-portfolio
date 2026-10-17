import { Fragment } from "react";
import { Sparkle } from "@/components/ui/Sparkle";
import "./phrase-strip.css";

const PHRASES = [
  "building things, asking questions",
  "always making, always learning",
  "designing for humans",
  "make it, break it, learn from it",
];

/** Scrolling marquee of handwritten phrases; the track is duplicated for a seamless loop. */
export function PhraseStrip() {
  return (
    <div className="phraseStrip" aria-label="Notebook notes">
      <div className="phraseTrack" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span className="phraseSet" key={copy}>
            {PHRASES.map((phrase) => (
              <Fragment key={phrase}>
                <span>{phrase}</span>
                <Sparkle className="phraseSpark" />
              </Fragment>
            ))}
          </span>
        ))}
      </div>
      <p className="visuallyHidden">
        Building things, asking questions. Always making, always learning. Designing for humans. Make it, break it, learn from it.
      </p>
    </div>
  );
}
