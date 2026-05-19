import type { Driver } from "../../types/driver.type";

import DriverProfile from "../DriverProfile";

import AssignedRickshawCard from "./AssignedRickshawCard";
import RunningStatusWidget from "./RunningStatusWidget";

import RealTimeTrackingWidget from "./RealTimeTrackingWidget";

import MarkRickshawLostCard from "./MarkRickshawLostCard";
import RickshawServiceStatusWidget from "./RickshawServiceStatusWidget";

import DriverWalletWidget from "./DriverWalletWidget";

import DriverNoticeBoard from "@/features/driver/components/dashboard/DriverNoticeBoard";

import HealthInfoWidget from "../HealthInfoWidget";
import HydrationReminderWidget from "../HydrationReminderWidget";

import PremiumFeatureGate from "./PremiumFeatureGate";

type Props = {
  driver: Driver;
};

export default function DriverDashboard({ driver }: Props) {
  return (
    <div className="space-y-8">
      {/* ===================== */}
      {/* PROFILE */}
      {/* ===================== */}
      <DriverProfile driver={driver} />

      {/* ===================== */}
      {/* CORE STATUS */}
      {/* ===================== */}
      <section className="grid gap-4 md:grid-cols-2">
        <AssignedRickshawCard driver={driver} />
        <RunningStatusWidget />
      </section>

      {/* ===================== */}
      {/* LIVE TRACKING */}
      {/* ===================== */}
      <section>
        <RealTimeTrackingWidget />
      </section>

      {/* ===================== */}
      {/* OPERATIONS */}
      {/* ===================== */}
      <section className="grid gap-4 md:grid-cols-2">
        <MarkRickshawLostCard />
        <RickshawServiceStatusWidget />
      </section>

      {/* ===================== */}
      {/* FINANCE */}
      {/* ===================== */}
      <section>
        <DriverWalletWidget driver={driver} />
      </section>

      {/* ===================== */}
      {/* SUPPORT & NOTICES */}
      {/* ===================== */}
      <section>
        <DriverNoticeBoard />
      </section>

      {/* ===================== */}
      {/* HEALTH & WELLBEING */}
      {/* ===================== */}
      <section className="grid gap-4 md:grid-cols-2">
        <HealthInfoWidget />
        <HydrationReminderWidget />
      </section>

      {/* ===================== */}
      {/* PREMIUM */}
      {/* ===================== */}
      <section>
        <PremiumFeatureGate />
      </section>
    </div>
  );
}
