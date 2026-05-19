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
  const [highlightAuth, setHighlightAuth] = useState(false);

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

  const handleGetStarted = () => {
    resetAuth();

    authRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setHighlightAuth(true);

    setTimeout(() => {
      setHighlightAuth(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        min-h-screen text-neutral-900
        ${largeText ? "text-lg md:text-xl" : "text-base"}
        bg-gradient-to-b from-slate-50 via-white to-blue-50
      `}
    >
      {/* Liquid glass ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-cyan-100/30 blur-3xl" />
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
          animate={{
            y: 0,
            opacity: 1,
            scale: highlightAuth ? 1.01 : 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.35,
          }}
          className="mt-6 sm:mt-8"
        >
          <div
            className={`
              mx-auto max-w-2xl px-4 sm:px-6
              transition-all duration-500
              ${
                highlightAuth
                  ? "drop-shadow-[0_0_24px_rgba(16,185,129,0.18)]"
                  : ""
              }
            `}
          >
            <div
              className={`
                relative overflow-hidden rounded-3xl
                border border-white/30
                bg-white/20
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                transition-all duration-500
                ${highlightAuth ? "ring-2 ring-emerald-300/50" : "ring-0"}
              `}
            >
              {/* liquid shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10">
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
            </div>
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
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-white/30
                bg-white/20
                px-4 py-10
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <FeatureGrid text={text} />
              </div>
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
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-white/25
                bg-white/15
                px-4 py-10
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <InfoStatsSection text={text} />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
