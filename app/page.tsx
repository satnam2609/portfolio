"use client";

import ProjectDetail from "@/components/Project";
import SkillsCarousel from "@/components/SkillCarousel";

export default function Home() {
  return (
    <div className="w-full px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-28 items-center lg:min-h-screen">
        <div className="lg:col-span-4 font-[Merriweather] text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center lg:text-left space-y-2">
          <p>Hi, I'm Satnam,</p>
          <p>a Full Stack Web</p>
          <p>Developer</p>
        </div>
      </div>

      <div className="min-h-screen mt-15">
        <p className="font-[Merriweather] text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center lg:text-left">
          Recent works
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
          <ProjectDetail
            title="Compound Exchange"
            description="A high-performance stock exchange simulation built in Rust,
              featuring a multithreaded matching engine, concurrent order book,
              and real-time message processing for order submissions,
              executions, and cancellations."
            slug="compound-exchange"
          />
          <ProjectDetail
            title="Inventory system"
            description="A robust inventory and invoice management system with analytics dashboard, business role support, and purchase order generation."
            slug="inventory-system"
          />
          <ProjectDetail
            title="Mic & Ink"
            description="A podcast publishing website with support for blog posts, article linking, and external media embedding."
            slug="mic-and-ink"
          />
        </div>
      </div>

      <div className="mt-20 mb-10">
        <p className="font-[Merriweather] text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center lg:text-left">
          Expertise
        </p>
        <SkillsCarousel />
      </div>
    </div>
  );
}
