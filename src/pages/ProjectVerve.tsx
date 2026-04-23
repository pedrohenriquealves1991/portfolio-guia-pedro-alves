import ProjectPageLayout from "@/components/ProjectPageLayout";
import projectVerve1 from "@/assets/project-verve-1.jpg";
import projectVerve2 from "@/assets/project-verve-2.jpg";

const ProjectVerve = () => {
  return (
    <ProjectPageLayout
      title="Verve"
      subtitle="Reimagining creative collaboration. Building the next-generation design platform that empowers teams to ideate, prototype, and ship together."
      role="Design Director"
      date="2024–Present"
      externalLink={{ label: "verve.design", url: "https://verve.design" }}
      images={[projectVerve1, projectVerve2]}
      highlights={[
        { label: "Role", value: "Founding Team" },
        { label: "Users", value: "50K+ beta" },
        { label: "Team", value: "12 people" },
        { label: "Funding", value: "Series A" },
      ]}
      description={[
        "As Design Director at Verve, I joined the founding team to help build a design tool that rethinks how creative teams collaborate. Our mission: make the messy, beautiful process of design work visible and shareable.",
        "I led the product design from zero to one, establishing the foundational interaction patterns, component library, and visual language. The challenge was creating something powerful enough for professionals yet approachable for newcomers—a balance we obsessed over in every decision.",
        "Key contributions include designing the real-time collaboration system, building the adaptive component architecture, and creating the 'design handoff' experience that developers actually enjoy using. We also pioneered AI-assisted design suggestions that feel helpful rather than intrusive.",
        "Verve launched its public beta to overwhelming response, with 50,000 teams signing up in the first month. We've been featured in TechCrunch, FastCompany, and praised by design leaders at companies like Airbnb, Stripe, and Linear.",
      ]}
      skills={[
        "Product Strategy",
        "Design Systems",
        "Figma",
        "Prototyping",
        "User Research",
        "Team Leadership",
        "Design Ops",
        "React",
        "Framer Motion",
      ]}
    />
  );
};

export default ProjectVerve;
