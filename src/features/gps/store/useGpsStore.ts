import { useEffect, useState } from "react";
import type { GPSPoint } from "../types/gps.types";
import { generateNextPoint } from "../utils/gpsSimulator";

export function useGpsStream() {
  const [points, setPoints] = useState<GPSPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = generateNextPoint(prev.at(-1));

        return [...prev.slice(-30), next];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return {
    points,
    current: points.at(-1),
  };
}
