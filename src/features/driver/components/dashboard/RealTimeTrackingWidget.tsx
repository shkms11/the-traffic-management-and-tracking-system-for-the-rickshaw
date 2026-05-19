import { MapPinned } from "lucide-react";
import LiveMap from "@/features/tracking/components/LiveMap";

export default function RealTimeTrackingWidget() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* shine layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <div className="relative z-10 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
            <MapPinned className="h-5 w-5 text-emerald-700" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-800">
              Real-Time Tracking
            </h2>
            <p className="text-sm text-neutral-500">
              Live GPS monitoring for rickshaw movement
            </p>
          </div>
        </div>

        {/* Status row */}
        <div className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/25 px-4 py-3 backdrop-blur-md">
          <span className="text-sm text-neutral-600">Tracking Status</span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            Active
          </span>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl border border-white/30 bg-white/25 p-3 backdrop-blur-md">
          <LiveMap />
        </div>
      </div>
    </div>
  );
}
