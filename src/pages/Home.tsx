import { useEffect } from "react";
import SiteNav from "@/components/home/SiteNav";
import HeroSection from "@/components/home/HeroSection";
import WorkSection from "@/components/home/WorkSection";
import BackgroundSection from "@/components/home/BackgroundSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Home = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = "Pedro Alves · AI & Automation Specialist";
  }, []);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <HeroSection />
        <WorkSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
