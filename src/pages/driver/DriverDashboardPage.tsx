import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import DriverDashboard from "@/features/driver/components/dashboard/DriverDashboard";
import type { Driver } from "@/features/driver/types/driver.type";

export default function DriverDashboardPage() {
  const driver: Driver = {
    id: "1",
    name: "Rahim Uddin",
    phone: "017XXXXXXXX",
    nid: "1234567890",
    licenseNumber: "D-45892",

    status: "active",

    address: {
      line1: "",
      area: "Kaliganj",
      city: "Dhaka",
      country: "Bangladesh",
    },

    walletBalance: 1250,
    todayEarnings: 320,
    payoutStatus: "ready_to_withdraw",
  };

  return (
    <DashboardLayout title="Driver Dashboard">
      <DriverDashboard driver={driver} />
    </DashboardLayout>
  );
}
