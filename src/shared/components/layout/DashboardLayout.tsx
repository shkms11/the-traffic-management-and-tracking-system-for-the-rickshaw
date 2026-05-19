import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 text-neutral-900">
      {/* Ambient liquid-glass background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="absolute top-1/2 left-0 h-[240px] w-[240px] rounded-full bg-cyan-100/25 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/30
            bg-white/20
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          "
        >
          {/* Liquid shine overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            {/* Optional page title */}
            {title && (
              <div className="mb-6 border-b border-white/20 pb-4">
                <h1 className="text-xl font-semibold tracking-tight text-emerald-900 sm:text-2xl">
                  {title}
                </h1>
              </div>
            )}

            {/* Dashboard content */}
            {children}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
