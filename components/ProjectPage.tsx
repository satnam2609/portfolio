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
    <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#0a0a0a] text-white font-sans">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Merriweather] font-bold mb-10 leading-tight tracking-tight">
        {title}
      </h1>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={700}
          height={400}
          className="rounded-2xl border border-gray-700 shadow-lg w-full max-w-xl mx-auto lg:mx-0"
        />

        <div className="flex-1 text-base sm:text-lg md:text-xl leading-relaxed">
          <p className="mb-6 text-gray-400">{description}</p>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium shadow"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href={git}
              target="_blank"
              className="bg-white text-black px-5 py-2.5 rounded-md font-semibold hover:bg-gray-200 transition-all"
            >
              GitHub
            </Link>
            {medium.length > 0 && (
              <Link
                href={medium}
                target="_blank"
                className="border border-white px-5 py-2.5 rounded-md font-semibold hover:bg-white hover:text-black transition-all"
              >
                Read on Medium
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
