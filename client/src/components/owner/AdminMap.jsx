import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function AdminMap({ lat, lon }) {
  console.log("lat", lat, "lon", lon);
  return !lat || !lon ? (
    <></>
  ) : (
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
        <Popup>Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default AdminMap;
