import ProjectPage from "@/components/ProjectPage";

export default function Project() {
  return (
    <ProjectPage
      title="Compound Exchange"
      image="/project/compound.png"
      description="Compound Exchange is a high-performance stock exchange simulation built entirely in Rust, designed to replicate the core mechanics of real-world trading platforms. It features a multithreaded matching engine capable of handling concurrent order flows with low latency, using a finely tuned limit order book built with atomic operations and thread-safe structures. The system supports real-time order submissions, executions, and cancellations, and was built with a strong emphasis on performance, concurrency, and architectural clarity—serving both as a practical backend project and a deep dive into systems-level programming."
      stack={["Rust","NodeJS","MongoDB","Redis","NextJS"]}
      git=""
      medium="https://medium.com/@satnamm143/the-engine-behind-every-trade-9918baaa9113"
    />
  );
}
