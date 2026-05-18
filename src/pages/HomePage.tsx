import { useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { HeroSection } from "@/shared/components/home/HeroSection";
import { AuthCard } from "@/shared/components/home/AuthCard";
import { FeatureGrid } from "@/shared/components/home/FeatureGrid";
import { InfoStatsSection } from "@/shared/components/home/InfoStatsSection";

import { HOME_TEXT } from "@/shared/types/home.content";
import type { Mode, Role } from "@/shared/types/home.types";
import { useAppSelector } from "@/app/hooks";

export default function HomePage() {
  const navigate = useNavigate();
  const { lang, largeText } = useAppSelector((state) => state.ui);

  const [step, setStep] = useState<1 | 2>(1);
  const [mode, setMode] = useState<Mode | null>(null);

  const authRef = useRef<HTMLDivElement | null>(null);

  const text = useMemo(() => HOME_TEXT[lang], [lang]);

  const startAuth = (selectedMode: Mode) => {
    setMode(selectedMode);
    setStep(2);
  };

  const resetAuth = () => {
    setStep(1);
    setMode(null);
  };

  const handleRoleSelect = (role: Role) => {
    if (!mode) return;

    localStorage.setItem("role", role);
    sessionStorage.setItem("auth_mode", mode);

    navigate(`/${role}`);
  };

  // ✅ NEW: Get Started now only focuses AuthCard
  const handleGetStarted = () => {
    resetAuth();

    authRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        min-h-screen text-neutral-900
        ${largeText ? "text-lg md:text-xl" : "text-base"}
        bg-gradient-to-b from-white via-neutral-50 to-neutral-100
      `}
    >
      {/* soft background */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <main id="main-content" className="relative w-full">
        {/* HERO */}
        <motion.section
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="w-full"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 sm:pt-4">
            <HeroSection
              text={text}
              onGetStarted={handleGetStarted}
              onLearnMore={() =>
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />
          </div>
        </motion.section>

        {/* AUTH */}
        <motion.section
          ref={authRef}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-6 sm:mt-8"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <AuthCard
              text={text}
              step={step}
              mode={mode}
              onLogin={() => startAuth("login")}
              onRegister={() => startAuth("register")}
              onBack={resetAuth}
              onSelectRole={handleRoleSelect}
            />
          </div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="features"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-10 sm:mt-14"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl bg-white/60 px-4 py-10 shadow-sm backdrop-blur">
              <FeatureGrid text={text} />
            </div>
          </div>
        </motion.section>

        {/* INFO */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-10 pb-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl bg-gradient-to-r from-neutral-50 to-white px-4 py-10 shadow-inner">
              <InfoStatsSection text={text} />
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
