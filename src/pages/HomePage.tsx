import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HomeHeader } from "@/shared/components/home/HomeHeader";
import { HeroSection } from "@/shared/components/home/HeroSection";
import { AuthCard } from "@/shared/components/home/AuthCard";
import { FeatureGrid } from "@/shared/components/home/FeatureGrid";
import { InfoStatsSection } from "@/shared/components/home/InfoStatsSection";
import { HomeFooter } from "@/shared/components/home/HomeFooter";

import { HOME_TEXT } from "@/shared/types/home.content";
import type { Lang, Mode, Role } from "@/shared/types/home.types";

export default function HomePage() {
  const navigate = useNavigate();

  const [lang, setLang] = useState<Lang>("bn");
  const [largeText, setLargeText] = useState(false);

  const [step, setStep] = useState<1 | 2>(1);
  const [mode, setMode] = useState<Mode | null>(null);

  const text = useMemo(() => HOME_TEXT[lang], [lang]);

  // STEP 1: login / register selection
  const startAuth = (selectedMode: Mode) => {
    setMode(selectedMode);
    setStep(2);
  };

  // RESET FLOW
  const resetAuth = () => {
    setStep(1);
    setMode(null);
  };

  // STEP 2: role selection → FINAL NAVIGATION
  const handleRoleSelect = (role: Role) => {
    if (!mode) return;

    // ✅ IMPORTANT: store role for RequireRole guard
    localStorage.setItem("role", role);

    // optional: store mode (login/register)
    sessionStorage.setItem("auth_mode", mode);

    // ✅ direct navigation to dashboard
    navigate(`/${role}`);
  };

  return (
    <div
      className={`
        min-h-screen bg-neutral-50 text-neutral-900
        ${largeText ? "text-lg md:text-xl" : "text-base"}
      `}
    >
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <HomeHeader
        text={text}
        lang={lang}
        setLang={setLang}
        largeText={largeText}
        setLargeText={setLargeText}
      />

      {/* MAIN */}
      <main
        id="main-content"
        className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12"
      >
        {/* HERO */}
        <HeroSection
          text={text}
          onGetStarted={() => startAuth("login")}
          onLearnMore={() =>
            document.getElementById("features")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        />

        {/* AUTH FLOW */}
        <section className="mt-8">
          <AuthCard
            text={text}
            step={step}
            mode={mode}
            onLogin={() => startAuth("login")}
            onRegister={() => startAuth("register")}
            onBack={resetAuth}
            onSelectRole={handleRoleSelect}
          />
        </section>

        {/* FEATURES */}
        <FeatureGrid text={text} />

        {/* INFO */}
        <InfoStatsSection text={text} />
      </main>

      {/* FOOTER */}
      <HomeFooter text={text} />
    </div>
  );
}
