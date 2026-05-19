import { Card, CardContent } from "@/components/ui/card";
import { MapPinned } from "lucide-react";

export default function RealTimeTrackingWidget() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <MapPinned className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Real-Time Tracking
              </h2>
              <p className="text-sm text-neutral-500">
                Your location is being tracked live
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">Tracking Status</span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Active
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
