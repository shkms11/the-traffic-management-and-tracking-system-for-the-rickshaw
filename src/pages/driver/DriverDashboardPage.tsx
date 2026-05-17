import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import LiveMap from "../../features/tracking/components/LiveMap";
import { Card } from "@/components/ui/card";
import DriverTracker from "../../features/gps/components/DriverTracker";

export default function DriverDashboardPage() {
  return (
    <DashboardLayout title="Driver Dashboard">
      <div className="space-y-6">
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">Find nearest rickshaw</Card>

          <Card className="p-4">Live tracking system active</Card>
        </div>

        {/* Driver Stats */}
        <DriverTracker />

        {/* Map Section */}
        <Card className="p-4">
          <h2 className="font-semibold mb-3">Live GPS Tracking</h2>
          <LiveMap />
        </Card>
      </div>
    </DashboardLayout>
  );
}
