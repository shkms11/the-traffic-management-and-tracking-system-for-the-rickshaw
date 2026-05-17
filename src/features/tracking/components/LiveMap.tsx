import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

// fix default icon issue
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// fake rickshaw positions (Dhaka area approx)
const initialRicks = [
  { id: 1, lat: 23.8103, lng: 90.4125 },
  { id: 2, lat: 23.812, lng: 90.415 },
  { id: 3, lat: 23.808, lng: 90.41 },
];

export default function LiveMap() {
  const [ricks, setRicks] = useState(initialRicks);

  // simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setRicks((prev) =>
        prev.map((r) => ({
          ...r,
          lat: r.lat + (Math.random() - 0.5) * 0.001,
          lng: r.lng + (Math.random() - 0.5) * 0.001,
        })),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={14}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ricks.map((r) => (
        <Marker key={r.id} position={[r.lat, r.lng]}>
          <Popup>Rickshaw #{r.id}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
