// src/components/home/MapboxMap.jsx
import { useRef } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const LOCATION = { longitude: -77.6757882, latitude: 43.0838534 };

const MapboxMap = () => {
  const mapRef = useRef();

  function handleLoad() {
    mapRef.current.flyTo({
      center: [LOCATION.longitude, LOCATION.latitude],
      zoom: 14,
      duration: 3000,
      essential: true,
    });
  }

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: LOCATION.longitude,
        latitude: LOCATION.latitude,
        zoom: 2,
      }}
      onLoad={handleLoad}
      style={{ width: "100%", height: "45%" }}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      interactive={false}
    >
      <Marker longitude={LOCATION.longitude} latitude={LOCATION.latitude}>
        <div
          className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"
          style={{ boxShadow: "0 0 0 4px rgba(59,130,246,0.3)" }}
        />
      </Marker>
    </Map>
  );
};

export default MapboxMap;
