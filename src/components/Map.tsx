import { useNavigate, useSearchParams } from "react-router-dom";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";

const Map = () => {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className="h-screen w-full bg-slate-100"
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
