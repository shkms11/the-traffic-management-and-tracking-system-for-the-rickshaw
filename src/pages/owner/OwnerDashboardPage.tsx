import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OwnerDashboardPage() {
  return (
    <DashboardLayout title="Fleet Owner Dashboard">
      <div className="space-y-6">
        {/* KPI HEADER */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
            <div className="text-sm text-neutral-500">Total Fleet</div>
            <div className="text-2xl font-bold text-neutral-800">42</div>
            <div className="text-xs text-emerald-600">+3 this month</div>
          </Card>

          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
            <div className="text-sm text-neutral-500">Active Drivers</div>
            <div className="text-2xl font-bold text-neutral-800">36</div>
            <div className="text-xs text-emerald-600">85% utilization</div>
          </Card>

          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
            <div className="text-sm text-neutral-500">Daily Revenue</div>
            <div className="text-2xl font-bold text-neutral-800">৳ 12,450</div>
            <div className="text-xs text-neutral-500">+8% vs yesterday</div>
          </Card>

          <Card className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-lg">
            <div className="text-sm text-neutral-500">Pending Payouts</div>
            <div className="text-2xl font-bold text-amber-600">৳ 3,200</div>
            <div className="text-xs text-amber-500">2 drivers pending</div>
          </Card>
        </div>

        {/* FLEET STATUS */}
        <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">
            Fleet Status
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
              <div className="text-sm text-neutral-500">On Road</div>
              <div className="text-2xl font-bold">28</div>
              <Badge className="mt-2 bg-emerald-700 text-white">Active</Badge>
            </div>

            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
              <div className="text-sm text-neutral-500">Idle</div>
              <div className="text-2xl font-bold">6</div>
              <Badge variant="outline">Waiting</Badge>
            </div>

            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
              <div className="text-sm text-neutral-500">Maintenance</div>
              <div className="text-2xl font-bold text-red-600">8</div>
              <Badge variant="destructive">Service Needed</Badge>
            </div>
          </div>
        </Card>

        {/* DRIVER PERFORMANCE */}
        <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">
            Top Driver Performance
          </h2>

          <div className="space-y-3">
            {["Rahim", "Karim", "Salam"].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-white/20 border border-white/30"
              >
                <div>
                  <div className="font-medium text-neutral-800">{name}</div>
                  <div className="text-sm text-neutral-500">
                    Trips: {20 - i * 3}
                  </div>
                </div>

                <Badge className="bg-emerald-700 text-white">
                  {95 - i * 5}%
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* MAINTENANCE + INSIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-semibold mb-3">Maintenance Queue</h2>

            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Rickshaw R-102 → Brake issue</li>
              <li>• Rickshaw R-221 → Battery replacement</li>
              <li>• Rickshaw R-310 → Tire damage</li>
            </ul>
          </Card>

          <Card className="rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-semibold mb-3">Business Insights</h2>

            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Peak hours: 6–9 PM</li>
              <li>• Highest earning zone: Zone B</li>
              <li>• Demand increased 12% this week</li>
            </ul>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
