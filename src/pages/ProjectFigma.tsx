import ProjectPageLayout from "@/components/ProjectPageLayout";
import projectFigma1 from "@/assets/project-figma-1.jpg";
import projectVerve2 from "@/assets/project-verve-2.jpg";

const ProjectFigma = () => {
  return (
    <ProjectPageLayout
      title="Figma"
      subtitle="Helping shape the future of design collaboration. Working on core product features, design systems, and developer experience that empowered designers globally."
      role="Senior Designer"
      date="2016–2020"
      externalLink={{ label: "figma.com", url: "https://figma.com" }}
      images={[projectFigma1, projectVerve2]}
      highlights={[
        { label: "Joined At", value: "40 employees" },
        { label: "Left At", value: "300+ employees" },
        { label: "Focus", value: "Editor Core" },
        { label: "Growth", value: "10x ARR" },
      ]}
      description={[
        "I joined Figma when it was still convincing the design world that browser-based tools could be powerful. Being part of that journey—from skepticism to industry standard—was the defining experience of my early career.",
        "My primary focus was the core editor experience: the tools, panels, and interactions that designers use thousands of times per day. I designed the auto-layout feature that became essential to every design workflow, working closely with engineering to find the right balance between power and simplicity.",
        "I also led the design of Figma's first component and design system features, establishing the patterns that would eventually become the foundation for how millions of designers organize their work. Getting the information architecture right for something that complex was the hardest design problem I've ever tackled.",
        "Beyond product, I helped establish Figma's design culture—running critique sessions, mentoring junior designers, and contributing to the brand evolution. Watching the company grow from 40 to 300 people taught me how to scale design practices while maintaining craft.",
      ]}
      skills={[
        "Product Design",
        "Interaction Design",
        "Design Systems",
        "Prototyping",
        "User Research",
        "Technical Design",
        "Team Building",
        "Design Culture",
      ]}
    />
  );
};

export default ProjectFigma;
