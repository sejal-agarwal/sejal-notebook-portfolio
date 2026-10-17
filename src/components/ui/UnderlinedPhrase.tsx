import "./underlined-phrase.css";

const WAVES = [
  "M 2 9 C 14 4 24 4 36 9 C 48 14 58 14 70 9 C 82 4 94 4 106 9 C 118 14 130 14 142 9 C 154 4 166 4 178 9 C 186 12 192 11 198 9",
  "M 2 9 C 14 1 24 1 36 9 C 48 17 58 17 70 9 C 82 1 94 1 106 9 C 118 17 130 17 142 9 C 154 1 166 1 178 9 C 186 15 192 13 198 9",
  "M 2 9 C 14 7 24 7 36 9 C 48 11 58 11 70 9 C 82 7 94 7 106 9 C 118 11 130 11 142 9 C 154 7 166 7 178 9 C 186 9 192 9 198 9",
];

const WAVE_KEYFRAMES = [WAVES[0], WAVES[1], WAVES[2], WAVES[1], WAVES[0]].join(";");

/** Text with the hand-drawn pink squiggle that animates underneath. */
export function UnderlinedPhrase({ children }: { children: React.ReactNode }) {
  return (
    <span className="underlinedPhrase">
      {children}
      <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
        <path className="underlineWavePath" d={WAVES[0]}>
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
            values={WAVE_KEYFRAMES}
          />
        </path>
      </svg>
    </span>
  );
}
