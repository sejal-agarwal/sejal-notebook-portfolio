"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "#about", className: "navAbout" },
  { label: "Work", href: "#work", className: "navWork" },
  { label: "Research", href: "#research", className: "navResearch" },
  { label: "Projects", href: "#projects", className: "navProjects" },
  { label: "Blog", href: "#blog", className: "navBlog" },
];

const underlinePaths = [
  "M 2 9 C 14 4 24 4 36 9 C 48 14 58 14 70 9 C 82 4 94 4 106 9 C 118 14 130 14 142 9 C 154 4 166 4 178 9 C 186 12 192 11 198 9",
  "M 2 9 C 14 1 24 1 36 9 C 48 17 58 17 70 9 C 82 1 94 1 106 9 C 118 17 130 17 142 9 C 154 1 166 1 178 9 C 186 15 192 13 198 9",
  "M 2 9 C 14 7 24 7 36 9 C 48 11 58 11 70 9 C 82 7 94 7 106 9 C 118 11 130 11 142 9 C 154 7 166 7 178 9 C 186 9 192 9 198 9",
];

const experiences = [
  {
    company: "Autodesk",
    role: "Research Intern, Agentic Canvas Interactions",
    dates: "Sep – Dec 2026 · Toronto, ON",
    color: "pink",
    summary:
      "Designing and building interactive canvas prototypes that explore direct-manipulation interfaces for real-time agentic workflows, in close collaboration with research, design, and engineering.",
    skills: ["Next.js", "Three.js", "HCI Research", "Agentic Workflows"],
  },
  {
    company: "Outschool",
    role: "Software Engineer Intern",
    dates: "Jan – Apr, Sep – Dec 2024 · San Francisco, CA",
    color: "blue",
    summary:
      "Shipped A/B-tested UI/UX experiments across key customer workflows that increased new-buyer sign-ups by 25%, guided by experimentation telemetry and close work with product and data teams.",
    skills: ["React", "TypeScript", "A/B testing"],
  },
  {
    company: "Open Ocean Robotics",
    role: "Software Engineer Co-op",
    dates: "May – Aug 2023 · Victoria, BC",
    color: "green",
    summary:
      "Migrated 40% of a large web codebase (about 60,000 lines) from JavaScript to TypeScript and built a live-feed image carousel that cut streaming costs by 20%.",
    skills: ["React", "TypeScript", "Responsive web apps"],
  },
  {
    company: "Respondent",
    role: "Software Engineer Intern",
    dates: "Sep – Dec 2022 · New York, NY",
    color: "pink",
    summary:
      "Refactored about 20% of an Angular application, shipping 5 new user-facing features and expanding Jest test coverage to make the platform more stable and maintainable.",
    skills: ["Angular", "Jest", "Frontend"],
  },
  {
    company: "19Labs",
    role: "Full-Stack Developer Co-op",
    dates: "Jan – Apr 2022 · San Mateo, CA",
    color: "blue",
    summary:
      "Led a platform-wide user migration for the GALE telehealth platform, consolidating 7 permission roles into 4, and integrated Bluetooth medical devices to stream live patient health metrics.",
    skills: ["Full-stack", "Databases", "UX", "Kotlin"],
  },
  {
    company: "Highway Three Solutions",
    role: "Junior Technical Analyst",
    dates: "May – Aug 2021 · Victoria, BC",
    color: "green",
    summary:
      "Researched and tested Atlassian Server-to-Cloud migration journeys, partnering across engineering, consulting, and marketing to turn the findings into technical blog posts.",
    skills: ["Atlassian apps", "Cloud Migration", "Technical Writing"],
  },
];

const studies = [
  {
    tab: "Thinking Inside the Box",
    name: "Thinking Inside the Box: Building UIs with Question-Guided Inputs",
    venue: "Graphics Interface 2026 · first-author paper",
    stamp: "Published!",
    pdf: "/thinking-inside-the-box.pdf",
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
    pdf: "/scroll-or-stroll.pdf",
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
    pdf: "/prefill-only-optimizations.pdf",
    question:
      "Can PrefillOnly-style tricks, hybrid prefilling and JCT-aware scheduling, speed up prefill–decode disaggregation in vLLM?",
    method:
      "We used vLLM's prefill path and benchmarked them against the standard disaggregated baseline.",
    finding:
      "They lost to the baseline at every load, with 0.34–0.75× the throughput. They clash with vLLM's memory, scheduling and compilation assumptions.",
  },
];

const projects = [
  {
    title: "Otter",
    description:
      "A RAG-powered study workspace and instructor dashboard built with Next.js, PostgreSQL, and REST APIs, featuring role-based experiences, anonymized usage analytics, and automated weekly summaries.",
    href: "https://github.com/sejal-agarwal/otter",
    color: "blue",
    skills: ["Next.js", "PostgreSQL", "REST APIs", "RAG"],
  },
  {
    title: "Martletplace",
    description:
      "A full-stack community marketplace for UVic students, designed and shipped by a 14-person engineering team that I led as technical project lead.",
    href: "https://github.com/UVicMartletplace/martletplace",
    color: "green",
    skills: ["Full-stack", "Team of 14", "Technical lead"],
  },
];

const heartPath =
  "M32 54 C10 38 4 26 4 17 C4 8 11 3 19 3 C25 3 30 6 32 11 C34 6 39 3 45 3 C53 3 60 8 60 17 C60 26 54 38 32 54 Z";

function PushPin() {
  return <span aria-hidden="true" className="projectPin" />;
}

function ProjectBoard() {
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
      { threshold: 0.25 },
    );
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`projectBoard${visible ? " projectBoardVisible" : ""}`} ref={boardRef}>
      <div className="projectNotes">
        {projects.map((project) => (
          <article className={`projectNote projectNote${project.color}`} key={project.title}>
            <PushPin />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="experienceSkills" aria-label="Technologies">
              {project.skills.map((skill, skillIndex) => (
                <li className={`experienceSkill experienceSkill${skillIndex % 3}`} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <a className="studyLink" href={project.href} rel="noreferrer" target="_blank">
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
      <div aria-hidden="true" className="projectDecor projectDecorSparkle">
        <Sparkle className="projectSparkle projectSparkleYellow" />
        <Sparkle className="projectSparkle projectSparklePink" />
      </div>
      <div aria-hidden="true" className="projectDecor projectDecorHeart">
        <svg viewBox="0 0 64 58">
          <path className="heartSticker" d={heartPath} />
          <path className="heartBody" d={heartPath} />
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
    </div>
  );
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden="true">
      <path
        d="M18 2.5 C19.8 12.1 23.9 16.2 33.5 18 C23.9 19.8 19.8 23.9 18 33.5 C16.2 23.9 12.1 19.8 2.5 18 C12.1 16.2 16.2 12.1 18 2.5 Z"
        fill="currentColor"
        stroke="var(--ink)"
        strokeLinejoin="round"
        strokeWidth="1.8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStudy, setActiveStudy] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [aboutBodyVisible, setAboutBodyVisible] = useState(false);
  const [aboutNoteVisible, setAboutNoteVisible] = useState(false);
  const [revealedExperiences, setRevealedExperiences] = useState<number[]>([]);
  const [activeExperiences, setActiveExperiences] = useState<number[]>([]);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const revealedElements = new Set<Element>();

    function revealWhenInView(element: Element | null, onReveal: () => void, threshold = 0.85) {
      if (!element || revealedElements.has(element)) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * threshold) {
        revealedElements.add(element);
        onReveal();
      }
    }

    function updateScrollState() {
      setHasScrolled(window.scrollY > 24);

      revealWhenInView(aboutSection, () => setAboutVisible(true), 0.85);
      revealWhenInView(document.querySelector(".aboutBody"), () => setAboutBodyVisible(true));
      revealWhenInView(document.querySelector(".aboutNote"), () => setAboutNoteVisible(true));
      const timeline = document.querySelector<HTMLOListElement>(".experienceTimeline");
      const activeExperienceIndexes: number[] = [];
      const newlyRevealedIndexes: number[] = [];
      const experienceItems = [...document.querySelectorAll(".experienceItem")];
      const activationLine = window.innerHeight * 0.85;
      const cardCenters = experienceItems.map((element) => {
        const card = element.querySelector(".experienceCard");
        if (!card) return Number.POSITIVE_INFINITY;
        const rect = card.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });
      experienceItems.forEach((element, index) => {
        const card = element.querySelector(".experienceCard");
        if (!card) return;
        if (cardCenters[index] >= activationLine) return;
        activeExperienceIndexes.push(index);
        if (revealedElements.has(element)) return;
        revealedElements.add(element);
        newlyRevealedIndexes.push(index);
      });
      if (timeline && cardCenters.length > 0) {
        const timelineRect = timeline.getBoundingClientRect();
        const firstCard = experienceItems[0].querySelector(".experienceCard");
        const lastCard = experienceItems[experienceItems.length - 1].querySelector(".experienceCard");
        if (firstCard && lastCard) {
          const firstRect = firstCard.getBoundingClientRect();
          const lastRect = lastCard.getBoundingClientRect();
          const firstCenter = firstRect.top + firstRect.height / 2 - timelineRect.top;
          const lastCenter = lastRect.top + lastRect.height / 2 - timelineRect.top;
          const lineLength = Math.max(lastCenter - firstCenter, 0);
          const progress = lineLength === 0
            ? 0
            : Math.max(0, Math.min(1, (activationLine - cardCenters[0]) / lineLength));
          timeline.style.setProperty("--timeline-start", `${firstCenter}px`);
          timeline.style.setProperty("--timeline-length", `${lineLength}px`);
          timeline.style.setProperty("--timeline-progress", `${progress}`);
        }
      }
      setRevealedExperiences((revealed) => {
        const newlyVisible = newlyRevealedIndexes.filter((index) => !revealed.includes(index));
        return newlyVisible.length ? [...revealed, ...newlyVisible] : revealed;
      });
      setActiveExperiences((active) => (
        active.length === activeExperienceIndexes.length &&
        active.every((index, position) => index === activeExperienceIndexes[position])
          ? active
          : activeExperienceIndexes
      ));
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="paper" id="top">
      <div className="binderRings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className={`header${hasScrolled ? " headerScrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Sejal Agarwal, home" onClick={closeMenu}>
          <Sparkle className="wordmarkSpark" />
          <span>Sejal Agarwal</span>
        </a>

        <button
          className={`menuToggle${menuOpen ? " menuToggleOpen" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navigation${menuOpen ? " navigationOpen" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              className={`navLink ${link.className}`}
              href={link.href}
              key={link.label}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a className="navLink navHello" href="mailto:hello@example.com" onClick={closeMenu}>
            Say hi
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <p className="eyebrow">Hi there, I&apos;m Sejal!</p>
          <h1 id="hero-title">
            a UI/UX engineer
            <br />
            building thoughtful
            {" "}
            <span className="underlinedPhrase">
              digital experiences.
              <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
                <path className="underlineWavePath" d={underlinePaths[0]}>
                  <animate
                    attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                    values={[underlinePaths[0], underlinePaths[1], underlinePaths[2], underlinePaths[1], underlinePaths[0]].join(";")}
                  />
                </path>
              </svg>
            </span>
          </h1>
          <p className="intro">
            Welcome to my little corner of the internet! Here you&apos;ll find a collection of my software engineering work, HCI research, and various things I&apos;ve been tinkering away at. I also write about what I&apos;m learning, exploring, and thinking about when building human-centered technology.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#work">
              Ready my blog <span aria-hidden="true">→</span>
            </a>
            <a className="button buttonSecondary" href="#log">
              Contact me
            </a>
          </div>
        </div>

        <div className="heroArt" aria-label="A Polaroid photo of Sejal on a pinned notebook page">
          <Sparkle className="artSpark artSparkOne" />
          <svg className="paperPlaneScene" viewBox="0 0 160 120" aria-hidden="true">
            <g transform="translate(120 20)">
              <g transform="translate(-12 -12) scale(1.65)">
                <path
                  d="M 1.5 9 L 22.5 1 L 15.5 22 L 11 13.5 Z M 11 13.5 L 22.5 1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </g>
          </svg>
          <div className="tape" aria-hidden="true" />
          <div className="portraitCard">
            <div className="portraitWindow">
              <Image
                className="portraitPhoto"
                src="/sejal.jpg"
                alt="Sejal smiling beside flower boxes on a city street"
                fill
                sizes="(max-width: 900px) 80vw, 26vw"
                preload
              />
            </div>
          </div>
          <aside className="stickyNote">
            research intern,
            agentic canvas experiences @ Autodesk
          </aside>
        </div>
      </section>

      <div className="phraseStrip" aria-label="Notebook notes">
        <div className="phraseTrack" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span className="phraseSet" key={copy}>
              <span>building things, asking questions</span>
              <Sparkle className="phraseSpark" />
              <span>always making, always learning</span>
              <Sparkle className="phraseSpark" />
              <span>designing for humans</span>
              <Sparkle className="phraseSpark" />
              <span>make it, break it, learn from it</span>
              <Sparkle className="phraseSpark" />
            </span>
          ))}
        </div>
        <p className="visuallyHidden">
          Building things, asking questions. Always making, always learning. Designing for humans. Make it, break it, learn from it.
        </p>
      </div>

      <section
        className={`aboutSection${aboutVisible ? " aboutSectionVisible" : ""}`}
        id="about"
        aria-labelledby="about-title"
      >
        <div className="aboutCopy">
          <p className="chapterLabel">
            <Sparkle className="chapterSpark" />
            <span>chapter one</span>
          </p>
          <h2 className="aboutTitle" id="about-title">
            About{" "}
            <span className="underlinedPhrase">
              me
              <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
                <path className="underlineWavePath" d={underlinePaths[0]}>
                  <animate
                    attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                    values={[underlinePaths[0], underlinePaths[1], underlinePaths[2], underlinePaths[1], underlinePaths[0]].join(";")}
                  />
                </path>
              </svg>
            </span>
          </h2>
          <div className={`aboutBody${aboutBodyVisible ? " aboutBodyVisible" : ""}`}>
            <p>
              I&apos;m a Computer Science Master&apos;s student at the University of Waterloo,
              where I conduct research at the intersection of Human-Computer Interaction, artificial intelligence, and education. Before that,
              I studied Software Engineering at the University of Victoria. Through my studies and
              internships, I&apos;ve become passionate about creating pixel-perfect designs that feel
              intuitive, thoughtful, and fun to use.
            </p>
            <p>I like moving between design, code, and the
              questions that make a project worth building. This notebook is where I collect the work, HCI research, and little experiments I make
              along the way.</p>

          </div>
        </div>

        <aside
          className={`aboutNote${aboutNoteVisible ? " aboutNoteVisible" : ""}`}
          aria-labelledby="about-note-title"
        >
          <div className="aboutNoteLayout">
            <div className="aboutNoteCopy">
              <h3 id="about-note-title">currently learning about...</h3>
              <ul>
                <li>agentic coding workflows</li>
                <li>human-centered design</li>
                <li>UI/UX best practices</li>
              </ul>
              <svg className="noteUnderline" viewBox="0 0 140 18" aria-hidden="true">
                <path d="M3 10 C18 3 27 16 44 9 S72 5 87 10 S114 14 137 7" />
              </svg>
            </div>
            <Image
              className="aboutSticker"
              src="/about-flower-sticker.png"
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
              sizes="(max-width: 600px) 76px, 100px"
            />
          </div>
        </aside>
      </section>

      <section className="experienceSection" id="work" aria-labelledby="experience-title">
        <p className="chapterLabel">
          <Sparkle className="chapterSpark" />
          <span>chapter two</span>
        </p>
        <h2 className="experienceTitle" id="experience-title">
          Work{" "}
          <span className="underlinedPhrase">
            experience
            <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
              <path className="underlineWavePath" d={underlinePaths[0]}>
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.25;0.5;0.75;1"
                  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                  values={[underlinePaths[0], underlinePaths[1], underlinePaths[2], underlinePaths[1], underlinePaths[0]].join(";")}
                />
              </path>
            </svg>
          </span>
        </h2>
        <ol className={`experienceTimeline${revealedExperiences.length > 0 ? " experienceTimelineVisible" : ""}`}>
          {experiences.map((experience, index) => (
            <li
              className={`experienceItem${revealedExperiences.includes(index) ? " experienceItemVisible" : ""}`}
              key={experience.company}
            >
              <span
                className={`experienceMarker experienceMarker${experience.color}${activeExperiences.includes(index) ? " experienceMarkerActive" : ""}`}
                aria-hidden="true"
              />
              <article className={`experienceCard experienceCard${experience.color}`}>
                <time className="experienceDates">{experience.dates}</time>
                <h3>{experience.company}</h3>
                <p className="experienceRole">{experience.role}</p>
                <p className="experienceSummary">{experience.summary}</p>
                <ul className="experienceSkills" aria-label="Skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <li className={`experienceSkill experienceSkill${skillIndex % 3}`} key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>
      <section className="researchSection" id="research" aria-labelledby="research-title">
        <p className="chapterLabel">
          <Sparkle className="chapterSpark" />
          <span>chapter three</span>
        </p>
        <h2 className="researchTitle" id="research-title">
          Research{" "}
          <span className="underlinedPhrase">
            notes
            <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
              <path className="underlineWavePath" d={underlinePaths[0]}>
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.25;0.5;0.75;1"
                  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                  values={[underlinePaths[0], underlinePaths[1], underlinePaths[2], underlinePaths[1], underlinePaths[0]].join(";")}
                />
              </path>
            </svg>
          </span>
        </h2>
        <div className="studyFolder">
          <div className="studyTabs" role="tablist" aria-label="Research studies">
            {studies.map((study, index) => (
              <button
                aria-controls="study-panel"
                aria-selected={activeStudy === index}
                className={`studyTab${activeStudy === index ? " studyTabActive" : ""}`}
                id={`study-tab-${index}`}
                key={index}
                onClick={() => setActiveStudy(index)}
                role="tab"
                type="button"
              >
                {study.tab}
              </button>
            ))}
          </div>
          <div className="studyDrawer">
            <article
              aria-labelledby={`study-tab-${activeStudy}`}
              className="studySheet"
              id="study-panel"
              key={activeStudy}
              role="tabpanel"
            >
              <svg className="studyClip" viewBox="0 0 24 60" aria-hidden="true">
                <path
                  d="M17 20 V46 a6 6 0 0 1 -12 0 V12 a8 8 0 0 1 16 0 V44"
                  fill="none"
                  stroke="var(--ink)"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
              <h3>{studies[activeStudy].name}</h3>
              {studies[activeStudy].venue && <p className="studyVenue">{studies[activeStudy].venue}</p>}
              <dl className="studyNotes">
                <div>
                  <dt>The question</dt>
                  <dd>{studies[activeStudy].question}</dd>
                </div>
                <div>
                  <dt>The study</dt>
                  <dd>{studies[activeStudy].method}</dd>
                </div>
                <div>
                  <dt>The finding</dt>
                  <dd>{studies[activeStudy].finding}</dd>
                </div>
              </dl>
              <div className="studyFooter">
                <a className="studyLink" href={studies[activeStudy].pdf} rel="noreferrer" target="_blank">
                  Read the paper <span aria-hidden="true">→</span>
                </a>
                {studies[activeStudy].stamp && <span className="studyStamp">{studies[activeStudy].stamp}</span>}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="projectsSection" id="projects" aria-labelledby="projects-title">
        <p className="chapterLabel">
          <Sparkle className="chapterSpark" />
          <span>chapter four</span>
        </p>
        <h2 className="projectsTitle" id="projects-title">
          Project{" "}
          <span className="underlinedPhrase">
            board
            <svg className="underlineWave" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
              <path className="underlineWavePath" d={underlinePaths[0]}>
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.25;0.5;0.75;1"
                  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                  values={[underlinePaths[0], underlinePaths[1], underlinePaths[2], underlinePaths[1], underlinePaths[0]].join(";")}
                />
              </path>
            </svg>
          </span>
        </h2>
        <ProjectBoard />
      </section>
    </main>
  );
}
