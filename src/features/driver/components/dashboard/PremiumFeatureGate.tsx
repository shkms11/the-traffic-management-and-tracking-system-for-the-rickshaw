import { Card, CardContent } from "@/components/ui/card";
import { Crown, Sparkles } from "lucide-react";

export default function PremiumFeatureGate() {
  const premiumFeatures = [
    "Advanced trip insights",
    "Priority support",
    "Driver performance analytics",
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-200/40 bg-amber-50/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Crown className="h-5 w-5 text-amber-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Unlock Premium
              </h2>
              <p className="text-sm text-neutral-500">
                Get access to extra tools and insights
              </p>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-3">
            {premiumFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-amber-500" />
                <p className="text-sm text-neutral-700">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-5 h-12 w-full rounded-xl bg-emerald-700 text-sm font-medium text-white transition-all hover:bg-emerald-800">
            Unlock Premium
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
