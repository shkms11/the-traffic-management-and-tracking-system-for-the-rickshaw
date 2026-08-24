import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import TrafficHeatmap from "../../features/traffic/components/TrafficHeatmap";
import DispatchPanel from "../../features/dispatch/components/DispatchPanel";
import AdminSearchBar from "@/features/admin/components/AdminSearchBar";

const stats = [
  { label: "Total Rickshaws", value: "120" },
  { label: "Active Zones", value: "8" },
  { label: "Congestion Level", value: "High", danger: true },
];

const operations = [
  { label: "Active Drivers", value: "94", note: "+12 online" },
  { label: "Active Trips", value: "57", note: "In progress" },
  {
    label: "Open Incidents",
    value: "3",
    note: "Requires attention",
    danger: true,
  },
  { label: "Pending Support", value: "12", note: "Awaiting response" },
];

export default function AdminDashboardPage() {
  return (
    <DashboardLayout title="Admin Control Center">
      <div className="space-y-6">
        <AdminSearchBar />

        {/* Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <p className="text-sm text-muted-foreground">{stat.label}</p>

              {stat.danger ? (
                <Badge variant="destructive" className="mt-3">
                  {stat.value}
                </Badge>
              ) : (
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              )}
            </Card>
          ))}
        </div>

        {/* Operations */}
        <Card className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Operations Center</h2>
            <Badge>Live</Badge>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {operations.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border bg-muted/30 p-4"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>

                <p
                  className={`mt-2 text-2xl font-bold ${
                    item.danger ? "text-red-600" : ""
                  }`}
                >
                  {item.value}
                </p>

                <p
                  className={`mt-1 text-xs ${
                    item.danger ? "text-red-500" : "text-muted-foreground"
                  }`}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Dispatch */}
        <DispatchPanel />

        {/* Traffic */}
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Traffic Heatmap</h2>
          <TrafficHeatmap />
        </Card>
      </div>
    </DashboardLayout>
  );
}
