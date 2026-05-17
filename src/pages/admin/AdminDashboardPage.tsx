import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrafficHeatmap from "../../features/traffic/components/TrafficHeatmap";
import DispatchPanel from "../../features/dispatch/components/DispatchPanel";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout title="Admin Control Center">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-sm text-gray-500">Total Rickshaws</div>
            <div className="text-2xl font-bold">120</div>
          </Card>

          <Card className="p-4">
            <div className="text-sm text-gray-500">Active Zones</div>
            <div className="text-2xl font-bold">8</div>
          </Card>

          <Card className="p-4">
            <div className="text-sm text-gray-500">Congestion Level</div>
            <Badge variant="destructive">High</Badge>
          </Card>
        </div>

        {/* AI Dispatch Panel */}
        <DispatchPanel />

        {/* Heatmap Section */}
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Traffic Heatmap</h2>
          <TrafficHeatmap />
        </Card>
      </div>
    </DashboardLayout>
  );
}
