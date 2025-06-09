// components/SkillsCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

const skills = [
  { name: "Rust", icon: "/icons/Rust.png" },
  { name: "Typescript", icon: "/icons/TypeScript.png" },
  { name: "Javascript", icon: "/icons/JavaScript.png" },
  { name: "C", icon: "/icons/C.png" },
  { name: "Python", icon: "/icons/Python.png" },
  { name: "NodeJS", icon: "/icons/Node.js.png" },
  { name: "ReactJS", icon: "/icons/React.png" },
  { name: "NextJS", icon: "/icons/Next.js.png" },
  { name: "MongoDB", icon: "/icons/MongoDB.png" },
  { name: "Redis", icon: "/icons/Redis.png" },
  { name: "PostgresSQL", icon: "/icons/PostgreSSQL.png" },
  { name: "Docker", icon: "/icons/Docker.png" },
  { name: "Jenkins", icon: "/icons/Jenkins.png" },
  { name: "Ansible", icon: "/icons/Ansible.png" },
  { name: "AWS", icon: "/icons/AWS.png" },
  { name: "Kubernetes", icon: "/icons/Kubernetes.png" },
  { name: "Vagrant", icon: "/icons/HashiCorp Vagrant.png" },

  // Add more as needed
];

export default function SkillsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };

    const interval = setInterval(autoplay, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full mt-20" ref={emblaRef}>
      <div className="flex gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="min-w-[120px] flex flex-col items-center justify-center"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={100}
              className="mb-2"
            />
            <span className="text-sm font-medium text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
