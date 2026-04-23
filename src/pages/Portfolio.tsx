import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioTimeline from "@/components/portfolio/PortfolioTimeline";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import PortfolioStack from "@/components/portfolio/PortfolioStack";
import { useLanguage } from "@/i18n/LanguageContext";

const Portfolio = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      lang === "pt"
        ? "Pedro Alves · Portfólio"
        : "Pedro Alves · Portfolio";
    return () => {
      document.title = prevTitle;
    };
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <PortfolioTimeline />
        <PortfolioProjects />
        <PortfolioStack />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
