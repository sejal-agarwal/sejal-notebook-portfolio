# Sejal's notebook portfolio

A Next.js (App Router) portfolio styled like a paper notebook. Blog posts are markdown files in `content/blog/`.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Project structure

```
content/blog/          markdown posts (frontmatter: title, date, summary, tags, draft)
public/                images and paper PDFs
src/
  app/                 routes only: layout.tsx, page.tsx (home), blog/, blog/[slug]/
  components/
    ui/                reusable building blocks: PaperPage, Section, SectionHeading,
                       SpiralNotebook, TagChips, PillLink, Reveal, UnderlinedPhrase, Sparkle, icons
    layout/            SiteHeader, HomeHeader, Wordmark, NavLink
    home/              one component per home-page section (Hero, About, Experience, ...)
    blog/              blog-specific components (PostList, PostArticle, BlogBrowser, Prose, ...)
  data/                site content as typed data (experience, studies, projects, contacts, navigation)
  hooks/               useScrolled, useRevealOnScroll
  lib/                 posts.ts (reads markdown), post-types.ts, format-date.ts, tones.ts
  styles/              tokens.css (colors, type scale) and base.css (reset, body, h1)
```

## Conventions

- **Content lives in `src/data/`**, not in components. To add a job, project, or paper, edit the matching file.
- **Each component owns its stylesheet**, next to it (`Hero.tsx` imports `hero.css`). Class names are global, so they're prefixed by component (`hero*`, `study*`, `project*`).
- **Shared look comes from tokens.** Colors and the type scale are in `styles/tokens.css`; sections tune the shared heading with `--chapter-accent`, `--heading-gap` and `--heading-gap-mobile`.
- **Color variants use `data-tone` / `data-color`** attributes (`pink | blue | green`, see `lib/tones.ts`).
- **Server components by default.** Only pieces that need state or scroll/observer logic are client components (`HomeHeader`, `ExperienceTimeline`, `StudyFolder`, `ProjectBoard`, `Reveal`, `BlogBrowser`, `BlogHeader`).
