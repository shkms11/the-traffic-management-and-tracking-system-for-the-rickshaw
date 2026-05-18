import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Languages, TextCursorInput } from "lucide-react";

import logo from "@/assets/logo.jpg";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggleLang, toggleLargeText } from "@/store/uiSlice";

type Props = {
  title?: {
    en: string;
    bn: string;
  };
};

export function Header({ title }: Props) {
  const dispatch = useAppDispatch();
  const { lang, largeText } = useAppSelector((state) => state.ui);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      }

      if (currentY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageTitle =
    title?.[lang] ?? (lang === "bn" ? "রিকশা সিস্টেম" : "Rickshaw System");

  return (
    <header
      className={`
        sticky top-0 z-50 border-b bg-white/90 backdrop-blur
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        {/* LEFT SIDE: LOGO + TITLE */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rickshaw Logo"
            className="h-9 w-9 rounded-md object-contain"
          />

          <h1
            className={`
              font-bold text-emerald-800 sm:text-xl
              transition-all duration-200
              ${largeText ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}
            `}
          >
            {pageTitle}
          </h1>
        </div>

        {/* RIGHT SIDE: CONTROLS */}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className={largeText ? "h-12 text-lg" : "h-10"}
            onClick={() => dispatch(toggleLang())}
          >
            <Languages className="mr-2 h-4 w-4" />
            {lang.toUpperCase()}
          </Button>

          <Button
            type="button"
            variant="outline"
            className={largeText ? "h-12 text-lg" : "h-10"}
            onClick={() => dispatch(toggleLargeText())}
          >
            <TextCursorInput className="mr-2 h-4 w-4" />
            A+
          </Button>
        </div>
      </div>
    </header>
  );
}
