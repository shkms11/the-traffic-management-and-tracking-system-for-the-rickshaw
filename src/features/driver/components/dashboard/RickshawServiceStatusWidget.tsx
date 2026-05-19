import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function RickshawServiceStatusWidget() {
  const nextService = "3 days remaining";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Wrench className="h-5 w-5 text-amber-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Rickshaw Service Status
              </h2>
              <p className="text-sm text-neutral-500">
                Maintenance schedule overview
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
            <p className="text-sm text-neutral-500">Next Scheduled Service</p>

            <p className="mt-1 text-lg font-semibold text-neutral-800">
              {nextService}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
