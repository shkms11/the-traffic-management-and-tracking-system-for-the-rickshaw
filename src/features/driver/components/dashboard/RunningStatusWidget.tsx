import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

export default function RunningStatusWidget() {
  // Temporary mock data
  const isRunning = true;
  const shiftStartedAt = "08:30 AM";
  const activeDuration = "5h 42m";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Activity className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Running Status
              </h2>
              <p className="text-sm text-neutral-500">
                Your current driving session
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="mb-4 rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">Current Status</span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  isRunning
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {isRunning ? "Running" : "Paused"}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
              <p className="text-sm text-neutral-500">Shift Started</p>
              <p className="mt-1 text-lg font-semibold text-neutral-800">
                {shiftStartedAt}
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
              <p className="text-sm text-neutral-500">Active Time</p>
              <p className="mt-1 text-lg font-semibold text-neutral-800">
                {activeDuration}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
