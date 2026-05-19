import type { Driver } from "../../types/driver.type";

import AssignedRickshawCard from "./AssignedRickshawCard";
import RealTimeTrackingWidget from "./RealTimeTrackingWidget";
import MarkRickshawLostCard from "./MarkRickshawLostCard";
import RunningStatusWidget from "./RunningStatusWidget";
import DriverWalletWidget from "./DriverWalletWidget";
import DriverNoticeBoard from "@/features/driver/components/dashboard/DriverNoticeBoard";
import RickshawServiceStatusWidget from "./RickshawServiceStatusWidget";
import HealthInfoWidget from "../HealthInfoWidget";
import HydrationReminderWidget from "../HydrationReminderWidget";
import PremiumFeatureGate from "./PremiumFeatureGate";
import DriverProfile from "../DriverProfile";

type Props = {
  driver: Driver;
};

export default function DriverDashboard({ driver }: Props) {
  return (
    <div className="space-y-6">
      {/* Driver Profile */}
      <DriverProfile driver={driver} />

      {/* Core Status */}
      <div className="grid gap-4 md:grid-cols-2">
        <AssignedRickshawCard driver={driver} />
        <RunningStatusWidget />
      </div>

      {/* Tracking */}
      <RealTimeTrackingWidget />

      {/* Service & Safety Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <MarkRickshawLostCard />
        <RickshawServiceStatusWidget />
      </div>

      {/* Wallet */}
      <DriverWalletWidget driver={driver} />

      {/* Driver Support */}
      <DriverNoticeBoard />

      {/* Health & Wellbeing */}
      <div className="grid gap-4 md:grid-cols-2">
        <HealthInfoWidget />
        <HydrationReminderWidget />
      </div>

      {/* Premium */}
      <PremiumFeatureGate />
    </div>
  );
}
