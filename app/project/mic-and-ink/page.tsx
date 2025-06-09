import ProjectPage from "@/components/ProjectPage";

export default function Project() {
  return (
    <ProjectPage
      title="Mic & Ink"
      image="/project/MicAndInk.png"
      description="The podcast website I developed serves as a central hub for a podcast host to share episodes, write accompanying blog posts, and link to external platforms. It features a clean, responsive design that highlights both audio and written content, allowing visitors to listen to podcast episodes directly on the site while also reading in-depth articles or show notes. Each episode is presented with detailed descriptions and embedded media, and the blog section supports dynamic content publishing. The website is built with a focus on content accessibility, seamless navigation, and audience engagement, making it a versatile platform for podcast promotion and community building."
      stack={["NodeJS","MongoDB","ReactJS","Redux"]}
      git="https://github.com/satnam2609/MERN-podcast-website"
      medium=""
    />
  );
}
