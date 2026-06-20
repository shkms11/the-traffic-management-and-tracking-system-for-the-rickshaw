import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AdminSearchBar() {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Glass shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <div className="relative z-10 p-6">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-800">
              Global Search
            </h2>

            <p className="text-sm text-neutral-500">
              Search users, drivers, trips, payments and complaints
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />

            <Input
              placeholder="Search users, drivers, trips, payments..."
              className="h-12 rounded-xl border-white/40 bg-white/25 pl-11 backdrop-blur-md transition-all focus-visible:ring-emerald-600"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge className="cursor-pointer bg-emerald-700 text-white hover:bg-emerald-800">
              All
            </Badge>

            <Badge
              variant="outline"
              className="cursor-pointer rounded-lg border-white/40 bg-white/20 backdrop-blur-md"
            >
              Users
            </Badge>

            <Badge
              variant="outline"
              className="cursor-pointer rounded-lg border-white/40 bg-white/20 backdrop-blur-md"
            >
              Drivers
            </Badge>

            <Badge
              variant="outline"
              className="cursor-pointer rounded-lg border-white/40 bg-white/20 backdrop-blur-md"
            >
              Trips
            </Badge>

            <Badge
              variant="outline"
              className="cursor-pointer rounded-lg border-white/40 bg-white/20 backdrop-blur-md"
            >
              Payments
            </Badge>

            <Badge
              variant="outline"
              className="cursor-pointer rounded-lg border-white/40 bg-white/20 backdrop-blur-md"
            >
              Complaints
            </Badge>
          </div>

          {/* Shortcut Hint */}
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <span>Quick admin search</span>

            <div className="flex gap-1">
              <kbd className="rounded-md border border-white/30 bg-white/20 px-2 py-1 text-xs backdrop-blur-md">
                Ctrl
              </kbd>
              <kbd className="rounded-md border border-white/30 bg-white/20 px-2 py-1 text-xs backdrop-blur-md">
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
