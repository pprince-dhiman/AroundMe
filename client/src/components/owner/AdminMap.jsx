import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function AdminMap({ org }) {
  const coordinates = org?.location?.coordinates;
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  if (!lat || !lon) {
    return <></>;
  }

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={13}
      dragging={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lon]}>
        <Popup>Organization Address</Popup>
      </Marker>
    </MapContainer>
  );
}

export default AdminMap;
