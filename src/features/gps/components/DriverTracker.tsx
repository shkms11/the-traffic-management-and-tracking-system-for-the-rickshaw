import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDistance } from "../utils/distance";
import { useGpsStream } from "../store/useGpsStore";
import { useMemo } from "react";

export default function DriverTracker() {
  const { points, current } = useGpsStream();

  const distance = useMemo(() => {
    let total = 0;

    for (let i = 1; i < points.length; i++) {
      total += getDistance(
        points[i - 1].lat,
        points[i - 1].lng,
        points[i].lat,
        points[i].lng,
      );
    }

    return total;
  }, [points]);

  const isLost = points.length > 10 && Math.random() < 0.03;

  return (
    <div className="space-y-4">
      <Card className="p-4 flex justify-between">
        <div>
          <p className="text-sm text-gray-500">Driver Status</p>
          <p className="font-bold">{isLost ? "Rickshaw Lost" : "Active"}</p>
        </div>

        <Badge variant={isLost ? "destructive" : "default"}>
          {isLost ? "ALERT" : "OK"}
        </Badge>
      </Card>

      <Card className="p-4">
        <p className="text-sm text-gray-500">Total Distance</p>
        <p className="text-2xl font-bold">{distance.toFixed(2)} km</p>
      </Card>

      <Card className="p-4">
        <p className="text-sm text-gray-500">Last Location</p>
        {current ? (
          <p>
            {current.lat.toFixed(5)}, {current.lng.toFixed(5)}
          </p>
        ) : (
          <p>No data yet</p>
        )}
      </Card>
    </div>
  );
}
