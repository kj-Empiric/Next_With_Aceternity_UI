"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Discover Your Sound Sanctuary
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-4xl">
      Unleash the power of music across a spectrum of genres - from soulful jazz to heart-pounding rock, and everything in between. Dive into our carefully curated playlists that cater to every mood, ensuring there's always a melody to match your moment.
      </p>
    </div>
  );
}
