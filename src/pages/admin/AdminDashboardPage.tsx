import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import TrafficHeatmap from "../../features/traffic/components/TrafficHeatmap";
import DispatchPanel from "../../features/dispatch/components/DispatchPanel";
import AdminSearchBar from "@/features/admin/components/AdminSearchBar";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout title="Admin Control Center">
      <div className="space-y-6">
        {/* Global Search */}
        <AdminSearchBar />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg shadow-sm">
            <div className="text-sm text-neutral-500">Total Rickshaws</div>
            <div className="mt-1 text-2xl font-bold text-neutral-800">120</div>
          </Card>

          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg shadow-sm">
            <div className="text-sm text-neutral-500">Active Zones</div>
            <div className="mt-1 text-2xl font-bold text-neutral-800">8</div>
          </Card>

          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg shadow-sm">
            <div className="text-sm text-neutral-500">Congestion Level</div>
            <div className="mt-2">
              <Badge variant="destructive">High</Badge>
            </div>
          </Card>
        </div>

        {/* Operations Center */}
        <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-800">
              Operations Center
            </h2>

            <Badge className="bg-emerald-700 text-white">Live</Badge>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
              <div className="text-sm text-neutral-500">Active Drivers</div>
              <div className="mt-2 text-2xl font-bold text-neutral-800">94</div>
              <div className="mt-1 text-xs text-emerald-700">+12 online</div>
            </Card>

            <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
              <div className="text-sm text-neutral-500">Active Trips</div>
              <div className="mt-2 text-2xl font-bold text-neutral-800">57</div>
              <div className="mt-1 text-xs text-neutral-500">In progress</div>
            </Card>

            <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
              <div className="text-sm text-neutral-500">Open Incidents</div>
              <div className="mt-2 text-2xl font-bold text-red-600">3</div>
              <div className="mt-1 text-xs text-red-500">
                Requires attention
              </div>
            </Card>

            <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
              <div className="text-sm text-neutral-500">Pending Support</div>
              <div className="mt-2 text-2xl font-bold text-neutral-800">12</div>
              <div className="mt-1 text-xs text-amber-600">
                Awaiting response
              </div>
            </Card>
          </div>
        </Card>

        {/* AI Dispatch Panel */}
        <DispatchPanel />

        {/* Traffic Heatmap */}
        <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <h2 className="mb-4 text-lg font-semibold text-neutral-800">
            Traffic Heatmap
          </h2>

          <TrafficHeatmap />
        </Card>
      </div>
    </DashboardLayout>
  );
}
