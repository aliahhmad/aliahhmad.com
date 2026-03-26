import { useRef } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MARKER = { longitude: -77.6757882, latitude: 43.0838534 };
// The map starts slightly below the marker so the fly-in animation lands with
// the marker in a more balanced visual position inside the card.
const LOCATION = { longitude: -77.676067, latitude: 43.0821873 };

const MapboxMap = () => {
  const mapRef = useRef();

  // Animate from a broad world view into Rochester once the map tiles finish loading.
  function handleLoad() {
    mapRef.current.flyTo({
      center: [LOCATION.longitude, LOCATION.latitude],
      zoom: 14,
      duration: 3000,
      essential: true,
    });
  }

  return (
    // This map is decorative on the landing page, so interactions stay disabled.
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
      <Marker longitude={MARKER.longitude} latitude={MARKER.latitude}>
        <div
          className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"
          style={{ boxShadow: "0 0 0 4px rgba(59,130,246,0.3)" }}
        />
      </Marker>
    </Map>
  );
};

export default MapboxMap;
