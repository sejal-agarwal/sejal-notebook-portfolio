"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [aboutBodyVisible, setAboutBodyVisible] = useState(false);
  const [aboutTagsVisible, setAboutTagsVisible] = useState(false);
  const [aboutNoteVisible, setAboutNoteVisible] = useState(false);

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
      revealWhenInView(document.querySelector(".aboutTags"), () => setAboutTagsVisible(true), 0.93);
      revealWhenInView(document.querySelector(".aboutNote"), () => setAboutNoteVisible(true));
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
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
          <div
            className={`aboutTags${aboutTagsVisible ? " aboutTagsVisible" : ""}`}
            aria-label="A few things I work on"
          >
            <span className="aboutTag aboutTagBlue">Waterloo, ON</span>
            <span className="aboutTag aboutTagGreen">2+ years industry experience</span>
            <span className="aboutTag aboutTagLilac">Human-AI Interaction</span>
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
    </main>
  );
}
