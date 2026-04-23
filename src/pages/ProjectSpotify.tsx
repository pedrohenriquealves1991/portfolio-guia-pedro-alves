import ProjectPageLayout from "@/components/ProjectPageLayout";
import projectSpotify1 from "@/assets/project-spotify-1.jpg";
import projectSpotify2 from "@/assets/project-spotify-2.jpg";

const ProjectSpotify = () => {
  return (
    <ProjectPageLayout
      title="Spotify"
      subtitle="Leading design initiatives across the music streaming experience, focused on personalization, discovery, and creating moments of delight for millions of listeners."
      role="Staff Designer"
      date="2020–2024"
      externalLink={{ label: "spotify.com", url: "https://spotify.com" }}
      images={[projectSpotify1, projectSpotify2]}
      highlights={[
        { label: "Users Impacted", value: "500M+" },
        { label: "Features Shipped", value: "12 major" },
        { label: "Team", value: "Premium XP" },
        { label: "Promotion", value: "IC5 → IC6" },
      ]}
      description={[
        "At Spotify, I was part of the Premium Experience team, focusing on features that make the listening experience more personal, more social, and more delightful. Music is emotional, and our design needed to honor that.",
        "I led the redesign of the 'Your Library' experience, transforming it from a simple list into a dynamic, personalized space that adapts to how you listen. The project increased daily library engagement by 34% and became the foundation for the new navigation system.",
        "My most challenging project was 'Blend'—the feature that creates shared playlists between friends based on their combined tastes. Designing the algorithm visualization, the sharing mechanics, and the 'taste match' score required balancing delight with clarity. It became one of Spotify's most-shared features.",
        "I also contributed to Spotify Wrapped 2022 and 2023, designing key interactive moments that were shared billions of times. The constraints of creating something that feels personal at scale taught me more about design systems than any other project.",
      ]}
      skills={[
        "Mobile Design",
        "Design Systems",
        "Prototyping",
        "Motion Design",
        "A/B Testing",
        "User Research",
        "Cross-platform",
        "Figma",
        "Principle",
      ]}
    />
  );
};

export default ProjectSpotify;
