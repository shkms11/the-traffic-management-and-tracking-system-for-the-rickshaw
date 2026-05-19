import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";

type Notice = {
  id: string;
  title: string;
  message: string;
  time: string;
  priority?: "normal" | "important";
};

const notices: Notice[] = [
  {
    id: "1",
    title: "Service Reminder",
    message: "Your assigned rickshaw is due for maintenance this week.",
    time: "Today",
    priority: "important",
  },
  {
    id: "2",
    title: "Route Update",
    message: "Main road near Kaliganj market has temporary traffic changes.",
    time: "2h ago",
  },
  {
    id: "3",
    title: "System Notice",
    message: "GPS tracking improvements were added successfully.",
    time: "Yesterday",
  },
];

export default function DriverNoticeBoard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/30 p-2 backdrop-blur-md">
              <Bell className="h-5 w-5 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Notices
              </h2>
              <p className="text-sm text-neutral-500">
                Important updates for you
              </p>
            </div>
          </div>

          {/* Notice list */}
          <div className="space-y-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="rounded-2xl border border-white/30 bg-white/25 p-4 backdrop-blur-md transition-all hover:bg-white/35"
              >
                <div className="mb-1 flex items-start justify-between gap-3">
                  <p className="font-medium text-neutral-800">{notice.title}</p>

                  {notice.priority === "important" && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                      Important
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {notice.message}
                </p>

                <p className="mt-2 text-xs text-neutral-500">{notice.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
