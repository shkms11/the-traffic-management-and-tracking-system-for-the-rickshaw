import type { GPSPoint } from "../types/gps.types";

const baseLat = 23.8103;
const baseLng = 90.4125;

export function generateNextPoint(prev?: GPSPoint): GPSPoint {
  const lat = (prev?.lat ?? baseLat) + (Math.random() - 0.5) * 0.001;
  const lng = (prev?.lng ?? baseLng) + (Math.random() - 0.5) * 0.001;

  return {
    lat,
    lng,
    timestamp: Date.now(),
  };
}
