import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Import project images
import projectZine1 from "@/assets/project-zine-1.jpg";
import projectZine2 from "@/assets/project-zine-2.jpg";
import projectVerve1 from "@/assets/project-verve-1.jpg";
import projectVerve2 from "@/assets/project-verve-2.jpg";
import projectSpotify1 from "@/assets/project-spotify-1.jpg";
import projectSpotify2 from "@/assets/project-spotify-2.jpg";
import projectFigma1 from "@/assets/project-figma-1.jpg";

const projects = [
  {
    title: "FORM",
    subtitle: "Print, Exhibit",
    date: "January 2018",
    description: "FORM was created in collaboration with fellow graphic design students. An exploration in zine-making, editorial design, and collaborative creative processes that pushed the boundaries of traditional print media.",
    images: [projectZine1, projectZine2],
    link: "/projects/form",
  },
  {
    title: "Verve",
    subtitle: "Design Director",
    date: "2024–Present",
    description: "Reimagining creative collaboration. As part of Verve's founding design team, I helped craft a next-generation collaborative design platform from the ground up, shaping a tool now trusted by teams worldwide.",
    images: [projectVerve1, projectVerve2],
    link: "/projects/verve",
  },
  {
    title: "Spotify",
    subtitle: "Staff Designer",
    date: "2020–2024",
    description: "Leading design initiatives across the music streaming experience. Focused on personalization, discovery, and creating moments of delight for millions of listeners worldwide.",
    images: [projectSpotify1, projectSpotify2],
    link: "/projects/spotify",
  },
  {
    title: "Figma",
    subtitle: "Senior Designer",
    date: "2016–2020",
    description: "Helped shape the future of design collaboration. Worked on core product features, design systems, and developer experience that empowered designers globally.",
    images: [projectFigma1, projectVerve2],
    link: "/projects/figma",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Featured Projects */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            date={project.date}
            description={project.description}
            images={project.images}
            link={project.link}
            index={index}
          />
        ))}
        
        <ExperienceSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
