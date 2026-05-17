import DashboardLayout from "../../shared/components/layout/DashboardLayout";

export default function OwnerDashboardPage() {
  return (
    <DashboardLayout title="Owner Dashboard">
      <div className="space-y-4">
        <div className="p-4 bg-white rounded shadow">Register new rickshaw</div>
        <div className="p-4 bg-white rounded shadow">View your rickshaws</div>
      </div>
    </DashboardLayout>
  );
}
