import { useEffect } from "react";
import SiteNav from "@/components/home/SiteNav";
import HeroSection from "@/components/home/HeroSection";
import WorkSection from "@/components/home/WorkSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {

  useEffect(() => {
    document.title = "Pedro Alves · Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <HeroSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
