import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import LiveMap from "../../features/tracking/components/LiveMap";
import { Card } from "@/components/ui/card";

export default function UserDashboardPage() {
  return (
    <DashboardLayout title="User Dashboard">
      <div className="space-y-6">
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">Find nearest rickshaw</Card>

          <Card className="p-4">Live tracking (mock system)</Card>
        </div>

        {/* Map Section */}
        <Card className="p-4">
          <h2 className="font-semibold mb-3">Live GPS Tracking</h2>
          <LiveMap />
        </Card>
      </div>
    </DashboardLayout>
  );
}
