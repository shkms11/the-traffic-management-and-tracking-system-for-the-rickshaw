import { Card, CardContent } from "@/components/ui/card";
import { Bike } from "lucide-react";
import type { Driver } from "../../types/driver.type";

type Props = {
  driver: Driver;
};

export default function AssignedRickshawCard({ driver }: Props) {
  const hasAssignedRickshaw = Boolean(driver.assignedRickshawId);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Bike className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Assigned Rickshaw
              </h2>
              <p className="text-sm text-neutral-500">
                Your currently assigned vehicle
              </p>
            </div>
          </div>

          {/* Content */}
          {hasAssignedRickshaw ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
                <p className="text-sm text-neutral-500">Rickshaw ID</p>
                <p className="mt-1 text-xl font-semibold text-neutral-800">
                  {driver.assignedRickshawId}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
                <span className="text-sm text-neutral-600">
                  Assignment Status
                </span>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  Assigned
                </span>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/40 bg-white/10 p-5 text-center backdrop-blur-md">
              <p className="font-medium text-neutral-700">
                No Rickshaw Assigned
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Please contact your garage manager.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
