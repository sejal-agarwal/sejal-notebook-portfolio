/** The three accent colors shared by chips, cards, markers and links. */
export type Tone = "pink" | "blue" | "green";

const TONES: Tone[] = ["pink", "blue", "green"];

/** Cycles pink → blue → green, so neighbouring items get different colors. */
export function toneAt(index: number): Tone {
  return TONES[index % TONES.length];
}
