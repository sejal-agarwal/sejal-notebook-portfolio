export type Study = {
  tab: string;
  name: string;
  venue?: string;
  stamp?: string;
  href: string;
  /** One or two sentences; shown instead of question/method/finding when briefStudies is on. */
  brief: string;
  question: string;
  method: string;
  finding: string;
};

export const studies: Study[] = [
  {
    tab: "Thinking Inside the Box",
    name: "Thinking Inside the Box: Building UIs with Question-Guided Inputs",
    venue: "Graphics Interface 2026 · first-author paper",
    stamp: "Published!",
    href: "https://dl.acm.org/doi/10.1145/3831423.3831467",
    brief:
      "We tested whether answering guided questions helps people write better first prompts for building UIs with GenAI. It led to fewer revisions and more deliberate planning, and most participants preferred it.",
    question:
      "Can guided questions, instead of a blank chat box, help people write better first prompts when building UIs with GenAI?",
    method:
      "A question-guided chatbot vs. free-form prompting in a within-subjects study: 12 participants, two UI-building tasks each.",
    finding:
      "Guided prompting led to fewer revisions and more deliberate planning, but took longer. 8 of 12 participants preferred it.",
  },
  {
    tab: "Scroll or Stroll",
    name: "Scroll or Stroll: Scrollytelling vs. Free Exploration",
    href: "/scroll-or-stroll.pdf",
    brief:
      "A 2×2 within-subjects study with 8 participants comparing scrollytelling with free exploration for understanding data stories. Accuracy was the same either way, but preferences split: scrollytelling for learning and context, free exploration for control and quick lookup.",
    question:
      "Do scrollytelling and free exploration change how well readers understand data stories?",
    method:
      "A 2×2 within-subjects study: 8 participants, two Pew Research articles, measuring comprehension, usability and workload.",
    finding:
      "Accuracy was the same either way. Preferences split: scrollytelling for context, free exploration for control.",
  },
  {
    tab: "Prefill-Only Optimizations",
    name: "Prefill-Only Optimizations for Disaggregated vLLM",
    href: "/prefill-only-optimizations.pdf",
    brief:
      "We tested PrefillOnly-style optimizations, hybrid prefilling and JCT-aware scheduling, for prefill–decode disaggregation in vLLM. They lost to the baseline at every load, with 0.34–0.75× the throughput, clashing with vLLM's memory, scheduling and compilation assumptions.",
    question:
      "Can PrefillOnly-style tricks (hybrid prefilling, JCT-aware scheduling) speed up prefill–decode disaggregation in vLLM?",
    method:
      "Applied to vLLM's prefill path and benchmarked against the standard disaggregated baseline.",
    finding:
      "They lost to the baseline at every load (0.34–0.75× throughput), clashing with vLLM's memory, scheduling and compilation assumptions.",
  },
];
