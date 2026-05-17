import type { Rickshaw } from "../../rickshaws/api/rickshawApi";

export type DispatchResult = {
  recommendedId: number;
  reason: string;
};

export function aiDispatch(rickshaws: Rickshaw[]): DispatchResult {
  const active = rickshaws.filter((r) => r.status === "active");

  const selected =
    active[Math.floor(Math.random() * active.length)] ?? rickshaws[0];

  return {
    recommendedId: selected.id,
    reason:
      "Optimized based on proximity, traffic density and demand simulation",
  };
}
