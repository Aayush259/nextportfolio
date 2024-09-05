import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { myInfo } from "./globalConstants";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <Link
        href={"https://github.com/Aayush259"}
        target="_blank"
        className="fixed right-20 bottom-10 z-50">
        <AnimatedTooltip items={[myInfo]} />
      </Link>
    </div>
  );
};
