import { useEffect } from "react";
import SiteNav from "@/components/home/SiteNav";
import HeroSection from "@/components/home/HeroSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import BackgroundSection from "@/components/home/BackgroundSection";
import WritingSection from "@/components/home/WritingSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Home = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title =
      lang === "pt"
        ? "Pedro Alves · Qualidade e regulatório de dispositivos médicos · fluxos com IA"
        : "Pedro Alves · Medical device quality & regulatory · AI workflows";
  }, [lang]);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <HeroSection />
        <WorkSection />
        <ProcessSection />
        <BackgroundSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
