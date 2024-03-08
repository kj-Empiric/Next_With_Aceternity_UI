import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-6 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-52 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-5 font-normal text-base md:text-xl text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. whether you're beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button>Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
