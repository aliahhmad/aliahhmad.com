import Map, { Marker } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapComponent = () => {
  return (
    <Map
      initialViewState={{
        longitude: -77.6757882,
        latitude: 43.0838534,
        zoom: 14
      }}
      style={{ width: '100%', height: '33%' }}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      interactive={false}
    >
      <Marker longitude={-77.6757882} latitude={43.0838534}>
        <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"
          style={{ boxShadow: '0 0 0 4px rgba(59,130,246,0.3)' }}
        />
      </Marker>
    </Map>
  )
}

export default MapComponent