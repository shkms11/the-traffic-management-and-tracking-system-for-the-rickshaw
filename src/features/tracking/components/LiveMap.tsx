import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useGpsStream } from "../../gps/store/useGpsStore";
import { isRickshawLost } from "@/features/gps/store/lostDetection";

// Leaflet default marker assets
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Normal marker
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

// Lost marker (styled via CSS)
const LostIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  className: "lost-marker",
});

// Set default globally (optional, but helpful)
L.Marker.prototype.options.icon = DefaultIcon;

export default function LiveMap() {
  const { current, points } = useGpsStream();

  const lost = isRickshawLost(points);

  return (
    <div className="space-y-3">
      {/* Lost alert banner */}
      {lost && (
        <div className="rounded-md border border-red-300 bg-red-100 p-3 text-sm text-red-700">
          🚨 Rickshaw signal lost! Possible breakdown or tracking failure.
        </div>
      )}

      <MapContainer
        center={[23.8103, 90.4125]} // Dhaka default
        zoom={15}
        style={{ height: "500px", width: "100%" }}
        className="rounded-lg"
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
              {lost ? "⚠ LOST SIGNAL" : "Driver Active"}
              <br />
              Lat: {current.lat.toFixed(5)}
              <br />
              Lng: {current.lng.toFixed(5)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
