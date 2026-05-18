import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { TextPack } from "@/shared/types/home.types";

type Props = {
  text: TextPack;
  onGetStarted: () => void;
  onLearnMore: () => void;
};

export function HeroSection({ text, onGetStarted, onLearnMore }: Props) {
  return (
    <section className="space-y-5">
      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
        {text.heroBadge}
      </Badge>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          {text.heroTitle}{" "}
          <span className="text-emerald-700">{text.heroHighlight}</span>
        </h2>
        <p className="max-w-2xl leading-relaxed text-neutral-600">
          {text.heroDesc}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          size="lg"
          className="bg-emerald-700 text-white hover:bg-emerald-800"
          onClick={onGetStarted}
        >
          {text.primary}
        </Button>

        <Button size="lg" variant="outline" onClick={onLearnMore}>
          {text.secondary}
        </Button>
      </div>
    </section>
  );
}
