"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({
  title,
  image,
  description,
  stack,
  git,
  medium,
}: {
  title: string;
  image: string;
  description: string;
  stack: string[];
  git: string;
  medium: string;
}) {
  return (
    <div className="py-16 px-6 md:px-20 bg-[#0a0a0a] text-white font-sans">
      <h1 className="text-5xl md:text-7xl font-[Merriweather] font-bold mb-12">
        {title}
      </h1>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={700}
          height={100}
          className="rounded-xl border border-gray-700 shadow-md max-w-full"
        />

        <div className="flex-1 text-lg leading-relaxed">
          <p className="mb-6 text-[#5a5757]">{description}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <Link
              href={git}
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              GitHub
            </Link>
            {medium.length>0?<Link
              href={medium}
              target="_blank"
              className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Read on Medium
            </Link>:""}
          </div>
        </div>
      </div>
    </div>
  );
}
