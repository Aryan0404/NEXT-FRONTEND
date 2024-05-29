import Link from "next/link";

import { cn } from "../utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <div className="h-auto  md:h-[40rem] w-full flex items-center flex-col justify-center mx-auto py-10 md:py-0 rounded-md relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red" />
      <div>
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <div className="mt-4">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900  text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default HeroSection;