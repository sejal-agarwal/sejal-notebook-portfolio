import { Sparkle } from "@/components/ui/Sparkle";

const HEART_PATH =
  "M32 54 C10 38 4 26 4 17 C4 8 11 3 19 3 C25 3 30 6 32 11 C34 6 39 3 45 3 C53 3 60 8 60 17 C60 26 54 38 32 54 Z";

/** Purely decorative stickers around the project board. */
export function BoardDecor() {
  return (
    <>
      <div aria-hidden="true" className="projectDecor projectDecorSparkle">
        <Sparkle className="projectSparkle projectSparkleYellow" />
        <Sparkle className="projectSparkle projectSparklePink" />
      </div>
      <div aria-hidden="true" className="projectDecor projectDecorHeart">
        <svg viewBox="0 0 64 58">
          <path className="heartSticker" d={HEART_PATH} />
          <path className="heartBody" d={HEART_PATH} />
          <path className="heartShine" d="M13 15 C13 11 16 8.5 20 8.5" />
        </svg>
      </div>
      <div aria-hidden="true" className="projectDecor projectDecorPolaroid">
        <span className="projectDecorTape" />
        <svg className="polaroidArt" viewBox="0 0 100 78">
          <rect width="100" height="78" fill="#d9ecf6" />
          <rect width="100" height="12" fill="#fffdf8" />
          <path d="M0 12 H100" stroke="var(--ink)" strokeWidth="1.5" />
          <circle cx="7" cy="6" r="2.2" fill="#f3aabe" stroke="var(--ink)" strokeWidth="1" />
          <circle cx="14" cy="6" r="2.2" fill="#ffe483" stroke="var(--ink)" strokeWidth="1" />
          <circle cx="21" cy="6" r="2.2" fill="#cfead6" stroke="var(--ink)" strokeWidth="1" />
          <rect x="8" y="19" width="40" height="23" rx="3" fill="#fffdf8" stroke="var(--ink)" strokeWidth="1.5" />
          <path d="M14 26 H40 M14 32 H34" stroke="#8a858f" strokeLinecap="round" strokeWidth="2" />
          <rect x="54" y="19" width="38" height="23" rx="3" fill="#fbe0e9" stroke="var(--ink)" strokeWidth="1.5" />
          <path d="M62 37 V31 M70 37 V25 M78 37 V29 M86 37 V27" stroke="var(--ink)" strokeLinecap="round" strokeWidth="3" />
          <rect x="8" y="48" width="84" height="22" rx="3" fill="#cfead6" stroke="var(--ink)" strokeWidth="1.5" />
          <path d="M14 55 H62 M14 62 H48" stroke="var(--ink)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </svg>
        <span className="polaroidCaption">demo day</span>
      </div>
      <div aria-hidden="true" className="projectDecor projectDecorTodo">
        <ul>
          <li className="done">design it</li>
          <li className="done">built it</li>
          <li>take a nap</li>
        </ul>
      </div>
    </>
  );
}
