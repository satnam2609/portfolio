"use client";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ProjectDetail({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const router = useRouter();

  return (
    <div className="bg-white/5 px-5 py-9 flex flex-col items-start gap-10 rounded-3xl">
      <div className="flex flex-col items-start gap-2">
        <p className="text-4xl text-bold font-[Merriweather]">{title}</p>

        <p className="text-[#a09191]">2024/ Development</p>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm">{description}</p>

        <Button onClick={() => router.push("project/" + slug)}>
          <NorthEastIcon className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
