import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JourneyPicker from "@/components/guide/JourneyPicker";
import TableOfContents from "@/components/guide/TableOfContents";
import GuideSection from "@/components/guide/GuideSection";
import PromptGallery from "@/components/guide/PromptGallery";
import PromptGenerator from "@/components/guide/PromptGenerator";
import TimelineCristina from "@/components/guide/TimelineCristina";
import FinalCTA from "@/components/guide/FinalCTA";
import { SECTIONS } from "@/content/guide";
import { useJourney, shouldShow } from "@/content/journey-store";

const Index = () => {
  const [filter] = useJourney();

  const intro = SECTIONS.find((s) => s.slug === "intro");
  const before = SECTIONS.filter((s) => s.number !== null && s.number <= 2);
  const after = SECTIONS.filter((s) => s.number !== null && s.number > 2);

  return (
    <div className="min-h-screen">
      <Navigation />
      <TableOfContents />

      <main>
        <Hero />

        {intro && <GuideSection section={intro} index={0} />}
        {before
          .filter((s) => shouldShow(s.path, filter))
          .map((s, i) => (
            <GuideSection key={s.slug} section={s} index={i + 1} />
          ))}

        <JourneyPicker />

        {after
          .filter((s) => shouldShow(s.path, filter))
          .map((s, i) => {
            const out = [
              <GuideSection key={s.slug} section={s} index={i + 3} />,
            ];
            // Insert special blocks at the right anchor sections
            if (s.slug === "prompts-prontos") {
              out.push(<PromptGallery key="gallery" />);
              out.push(<PromptGenerator key="generator" />);
            }
            if (s.slug === "caso-cristina") {
              out.push(<TimelineCristina key="timeline" />);
            }
            return out;
          })}

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
