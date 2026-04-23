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
import PartHeader from "@/components/guide/PartHeader";
import { SECTIONS } from "@/content/guide";
import { useJourney, shouldShow } from "@/content/journey-store";

const Index = () => {
  const [filter] = useJourney();

  const intro = SECTIONS.find((s) => s.slug === "intro");
  const partI = SECTIONS.filter((s) => s.number !== null && s.number >= 1 && s.number <= 8);
  const partII = SECTIONS.filter((s) => s.number !== null && s.number >= 9 && s.number <= 14);
  const partIII = SECTIONS.filter((s) => s.number !== null && s.number >= 15);

  const renderSection = (s: typeof SECTIONS[number], index: number) => {
    const out = [<GuideSection key={s.slug} section={s} index={index} />];
    if (s.slug === "prompts-prontos") {
      out.push(<PromptGallery key="gallery" />);
      out.push(<PromptGenerator key="generator" />);
    }
    if (s.slug === "caso-cristina") {
      out.push(<TimelineCristina key="timeline" />);
    }
    return out;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <TableOfContents />

      <main>
        <Hero />

        {intro && <GuideSection section={intro} index={0} />}

        {/* PARTE I — TEORIA */}
        <PartHeader part="I" />
        {partI
          .filter((s) => shouldShow(s.path, filter))
          .map((s, i) => renderSection(s, i + 1))}

        {/* PARTE II — PRÁTICA */}
        <PartHeader part="II" />
        <JourneyPicker />
        {partII
          .filter((s) => shouldShow(s.path, filter))
          .map((s, i) => renderSection(s, i + 9))}

        {/* PARTE III — DEPOIS DO BUILD */}
        <PartHeader part="III" />
        {partIII
          .filter((s) => shouldShow(s.path, filter))
          .map((s, i) => renderSection(s, i + 15))}

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
