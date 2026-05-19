import { Card, CardContent } from "@/components/ui/card";
import { Droplets } from "lucide-react";

export default function HydrationReminderWidget() {
  const glassesToday = 4;
  const dailyGoal = 8;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Droplets className="h-5 w-5 text-cyan-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Hydration Reminder
              </h2>
              <p className="text-sm text-neutral-500">
                Stay hydrated during your shift
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-white/30 bg-white/25 p-5 backdrop-blur-md">
            <p className="text-sm text-neutral-500">Today's Water Intake</p>

            <p className="mt-1 text-3xl font-semibold text-cyan-700">
              {glassesToday}/{dailyGoal}
            </p>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/40">
              <div
                className="h-full rounded-full bg-cyan-500 transition-all"
                style={{
                  width: `${(glassesToday / dailyGoal) * 100}%`,
                }}
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            Drink a glass of water now if you haven’t recently.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
