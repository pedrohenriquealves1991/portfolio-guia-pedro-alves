import ProjectPageLayout from "@/components/ProjectPageLayout";
import projectZine1 from "@/assets/project-zine-1.jpg";
import projectZine2 from "@/assets/project-zine-2.jpg";

const ProjectForm = () => {
  return (
    <ProjectPageLayout
      title="FORM"
      subtitle="An experimental zine exploring the intersection of typography, texture, and tactile design in an increasingly digital world."
      role="Print, Exhibit"
      date="January 2018"
      externalLink={{ label: "View Exhibition Archive", url: "#" }}
      images={[projectZine1, projectZine2]}
      highlights={[
        { label: "Duration", value: "3 months" },
        { label: "Team Size", value: "4 designers" },
        { label: "Print Run", value: "500 copies" },
        { label: "Exhibitions", value: "3 venues" },
      ]}
      description={[
        "FORM was born from a collective desire to step away from screens and reconnect with the physical medium. Created in collaboration with three fellow graphic design students, this zine became a love letter to print—its imperfections, its textures, and its undeniable presence.",
        "We challenged ourselves to work with constraints: limited colors, recycled paper stock, and hand-bound finishing. Each spread was designed to be experienced through touch as much as sight, incorporating debossing, die-cuts, and textured inserts.",
        "The project explored themes of impermanence and memory, using typography as both communication and art. We drew inspiration from Brutalist architecture, Japanese wabi-sabi philosophy, and the Fluxus art movement.",
        "FORM was exhibited at the Rhode Island School of Design's annual show, the Boston Print Biennial, and a pop-up gallery in Brooklyn. It sold out its initial print run and was featured in Print Magazine's 'New Visual Artists' edition.",
      ]}
      skills={[
        "Editorial Design",
        "Typography",
        "Print Production",
        "Bookbinding",
        "Art Direction",
        "Adobe InDesign",
        "Risograph Printing",
        "Paper Selection",
      ]}
    />
  );
};

export default ProjectForm;
