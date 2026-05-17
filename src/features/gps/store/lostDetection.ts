import type { GPSPoint } from "../types/gps.types";

export function isRickshawLost(points: GPSPoint[]): boolean {
  if (points.length < 3) return false;

  const last = points.at(-1);
  const prev = points.at(-2);

  if (!last || !prev) return false;

  const timeDiff = last.timestamp - prev.timestamp;

  // simulate "freeze / signal loss"
  const noMovement = Math.random() < 0.05;

  return timeDiff > 8000 || noMovement;
}
