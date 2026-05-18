import { Card } from "@/components/ui/card";
import type { TextPack } from "@/shared/types/home.types";

type Props = {
  text: TextPack;
};

function StatBox({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-lg bg-neutral-100 p-3">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className={`text-xl font-bold ${valueClass}`}>{value}</div>
    </div>
  );
}

export function InfoStatsSection({ text }: Props) {
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-3">
      <Card className="p-6 lg:col-span-2">
        <h3 className="mb-3 text-lg font-semibold">{text.infoTitle}</h3>
        <p className="leading-relaxed text-neutral-600">{text.infoDesc}</p>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">System Overview</h3>
        <div className="grid grid-cols-2 gap-3">
          <StatBox label={text.stat1} value="128" />
          <StatBox label={text.stat2} value="9" />
          <StatBox label={text.stat3} value="3" valueClass="text-red-500" />
          <StatBox
            label={text.stat4}
            value="87%"
            valueClass="text-emerald-600"
          />
        </div>
      </Card>
    </section>
  );
}
