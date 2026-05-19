import { Card, CardContent } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

export default function MarkRickshawLostCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-red-200/40 bg-red-50/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <TriangleAlert className="h-5 w-5 text-red-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Mark Rickshaw Lost
              </h2>
              <p className="text-sm text-neutral-500">
                Report if your assigned rickshaw is missing
              </p>
            </div>
          </div>

          <button className="h-12 w-full rounded-xl border border-red-200/60 bg-red-50/70 text-sm font-medium text-red-700 transition-all hover:bg-red-100/80">
            Report Lost Rickshaw
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
