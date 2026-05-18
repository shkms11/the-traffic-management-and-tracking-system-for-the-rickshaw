import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Content only */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="rounded-xl bg-white shadow-sm border p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
