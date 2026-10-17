export type Study = {
  tab: string;
  name: string;
  venue?: string;
  stamp?: string;
  href: string;
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
    question:
      "Can answering guided questions, instead of facing a blank chat box, help people write better first prompts when building UIs with GenAI?",
    method:
      "We compared a question-guided chatbot, and compared it with free-form prompting in a within-subjects study: 12 participants, two UI-building tasks each.",
    finding:
      "Question-guided chatbot led to significantly fewer revisions and more deliberate planning, at the cost of increased time. 8 of 12 participants preferred it.",
  },
  {
    tab: "Scroll or Stroll",
    name: "Scroll or Stroll: Scrollytelling vs. Free Exploration",
    href: "/scroll-or-stroll.pdf",
    question:
      "Do scrollytelling and free exploration change how well readers understand data stories, and how quickly they find answers?",
    method:
      "A 2×2 within-subjects experiment with 8 participants and two matched Pew Research articles, measuring comprehension, usability (SUS) and workload (NASA-TLX).",
    finding:
      "Accuracy was the same either way, and preferences split evenly: scrollytelling for learning and context, free exploration for control and quick lookup.",
  },
  {
    tab: "Prefill-Only Optimizations",
    name: "Prefill-Only Optimizations for Disaggregated vLLM",
    href: "/prefill-only-optimizations.pdf",
    question:
      "Can PrefillOnly-style tricks, hybrid prefilling and JCT-aware scheduling, speed up prefill–decode disaggregation in vLLM?",
    method:
      "We used vLLM's prefill path and benchmarked them against the standard disaggregated baseline.",
    finding:
      "They lost to the baseline at every load, with 0.34–0.75× the throughput. They clash with vLLM's memory, scheduling and compilation assumptions.",
  },
];
