import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useGpsStream } from "../../gps/store/useGpsStore";
import { isRickshawLost } from "@/features/gps/store/lostDetection";

// Leaflet assets
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Default marker
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

// Lost marker
const LostIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  className: "lost-marker",
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LiveMap() {
  const { current, points } = useGpsStream();
  const lost = isRickshawLost(points);

  return (
    <div className="space-y-4">
      {/* Glass Alert Banner */}
      {lost && (
        <div className="relative overflow-hidden rounded-2xl border border-red-200/60 bg-red-50/70 backdrop-blur-md shadow-sm p-4 transition-all">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

          <div className="relative z-10 flex items-center gap-2 text-red-700">
            <span className="text-lg">🚨</span>
            <div>
              <p className="font-semibold">Rickshaw signal lost</p>
              <p className="text-sm text-red-600">
                Possible breakdown or tracking failure
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Glass Map Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {/* shine overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

        <div className="relative z-10">
          <MapContainer
            center={[23.8103, 90.4125]} // Dhaka default
            zoom={15}
            style={{ height: "500px", width: "100%" }}
            className="rounded-3xl"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {current && (
              <Marker
                position={[current.lat, current.lng]}
                icon={lost ? LostIcon : DefaultIcon}
              >
                <Popup>
                  <div className="space-y-1">
                    <p className="font-semibold text-neutral-800">
                      {lost ? "⚠ LOST SIGNAL" : "Driver Active"}
                    </p>
                    <p className="text-sm text-neutral-600">
                      Lat: {current.lat.toFixed(5)}
                    </p>
                    <p className="text-sm text-neutral-600">
                      Lng: {current.lng.toFixed(5)}
                    </p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
