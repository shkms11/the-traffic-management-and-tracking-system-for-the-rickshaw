import { Button } from "@/components/ui/button";
import { Languages, TextCursorInput } from "lucide-react";
import type { Lang, TextPack } from "@/shared/types/home.types";

type Props = {
  text: TextPack;
  lang: Lang;
  setLang: (value: Lang) => void;
  largeText: boolean;
  setLargeText: (value: boolean) => void;
};

export function HomeHeader({
  text,
  lang,
  setLang,
  largeText,
  setLargeText,
}: Props) {
  return (
    <header className="border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-bold text-emerald-800 sm:text-xl">
          {text.title}
        </h1>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className={largeText ? "h-12 text-lg" : "h-10"}
            onClick={() => setLang(lang === "bn" ? "en" : "bn")}
            aria-label="Toggle language"
          >
            <Languages className="mr-2 h-4 w-4" />
            {text.toggleLang}
          </Button>

          <Button
            type="button"
            variant="outline"
            className={largeText ? "h-12 text-lg" : "h-10"}
            onClick={() => setLargeText(!largeText)}
            aria-label="Increase text size"
          >
            <TextCursorInput className="mr-2 h-4 w-4" />
            {text.textSize}
          </Button>
        </div>
      </div>
    </header>
  );
}
