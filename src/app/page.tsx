import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { myInfo } from "./globalConstants";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <div className="fixed right-20 bottom-10 z-50">
        <AnimatedTooltip items={[myInfo]} />
      </div>
    </div>
  );
};
