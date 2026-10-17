import { About } from "@/components/home/About";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { PhraseStrip } from "@/components/home/PhraseStrip";
import { Projects } from "@/components/home/Projects";
import { Research } from "@/components/home/Research";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { showBlog } from "@/data/site";
import { PaperPage } from "@/components/ui/PaperPage";

export default function HomePage() {
  return (
    <PaperPage id="top">
      <ScrollToTop />
      <HomeHeader />
      <Hero />
      <PhraseStrip />
      <About />
      <Experience />
      <Research />
      <Projects />
      {showBlog && <BlogPreview />}
      <Contact />
    </PaperPage>
  );
}
