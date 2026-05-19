import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import type { Driver } from "../../types/driver.type";

type Props = {
  driver: Driver;
};

export default function DriverWalletWidget({ driver }: Props) {
  // Temporary mock data
  const walletBalance = 1250;
  const todayEarnings = 320;
  const payoutStatus = "Ready to withdraw";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Wallet className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Driver Wallet
              </h2>
              <p className="text-sm text-neutral-500">
                Earnings and payout overview
              </p>
            </div>
          </div>

          {/* Wallet balance */}
          <div className="mb-4 rounded-2xl border border-white/30 bg-white/25 p-5 backdrop-blur-md">
            <p className="text-sm text-neutral-500">Available Balance</p>
            <p className="mt-1 text-3xl font-semibold text-emerald-800">
              ৳{walletBalance}
            </p>
          </div>

          {/* Secondary stats */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
              <p className="text-sm text-neutral-500">Today’s Earnings</p>
              <p className="mt-1 text-lg font-semibold text-neutral-800">
                ৳{todayEarnings}
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md">
              <p className="text-sm text-neutral-500">Payout Status</p>
              <p className="mt-1 text-sm font-medium text-emerald-700">
                {payoutStatus}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
