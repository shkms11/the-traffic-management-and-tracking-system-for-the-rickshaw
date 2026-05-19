import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

const healthTips = [
  "Take a short stretch break every 2 hours.",
  "Sit upright to reduce back pain.",
  "Rest your eyes away from the road during breaks.",
];

export default function HealthInfoWidget() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <HeartPulse className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Health Info
              </h2>
              <p className="text-sm text-neutral-500">
                Daily wellness tips for safer driving
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="space-y-3">
            {healthTips.map((tip, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md"
              >
                <p className="text-sm leading-relaxed text-neutral-700">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
