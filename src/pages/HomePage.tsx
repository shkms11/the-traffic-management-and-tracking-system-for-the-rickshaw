import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeroSection } from "@/shared/components/home/HeroSection";
import { AuthCard } from "@/shared/components/home/AuthCard";
import { FeatureGrid } from "@/shared/components/home/FeatureGrid";
import { InfoStatsSection } from "@/shared/components/home/InfoStatsSection";

import { HOME_TEXT } from "@/shared/types/home.content";
import type { Mode, Role } from "@/shared/types/home.types";

import { useAppSelector } from "@/app/hooks";

export default function HomePage() {
  const navigate = useNavigate();

  // ✅ Redux UI state (GLOBAL)
  const { lang, largeText } = useAppSelector((state) => state.ui);

  const [step, setStep] = useState<1 | 2>(1);
  const [mode, setMode] = useState<Mode | null>(null);

  const text = useMemo(() => HOME_TEXT[lang], [lang]);

  // STEP 1
  const startAuth = (selectedMode: Mode) => {
    setMode(selectedMode);
    setStep(2);
  };

  // RESET
  const resetAuth = () => {
    setStep(1);
    setMode(null);
  };

  // STEP 2 → ROLE NAVIGATION
  const handleRoleSelect = (role: Role) => {
    if (!mode) return;

    localStorage.setItem("role", role);
    sessionStorage.setItem("auth_mode", mode);

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
    </div>
  );
}
