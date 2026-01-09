import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import Buttons from "./buttons";
import Alerts from "./alerts";

export default function MapView() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    if (!mapContainerRef.current) return;

    // 1. Create map FIRST (Mapbox requirement)
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [80.7718, 7.8731], // fallback
      zoom: 7,
    });

    // 2. Add geolocation control (official way)
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      fitBoundsOptions: {
        maxZoom: 15,
      },
      trackUserLocation: false, // set true if you want live tracking
      showUserLocation: true,
    });

    mapRef.current.addControl(geolocate);

    // 3. Trigger permission + auto zoom once map loads
    mapRef.current.on("load", () => {
      geolocate.trigger();
    });

    return () => mapRef.current.remove();
  }, []);

  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
      <div ref={mapContainerRef} className="h-full w-full" />

      {/* Report */}
      <div className="absolute top-4 right-6 flex items-center cursor-pointer font-semibold text-red-500">
        report
        <img
          src="https://img.icons8.com/?size=100&id=20844&format=png&color=000000"
          width={25}
          className="ml-1"
        />
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 right-6 flex flex-col space-y-2">
        <div className="bg-gray-600 p-2 text-white rounded-3xl w-40 text-center">
          Advice: 100
        </div>
        <div className="bg-gray-600 p-2 text-white rounded-3xl w-40 text-center">
          Safety Index: 100
        </div>
      </div>

      {/* Location */}
      <div className="absolute bottom-4 left-6 bg-white/80 p-3 rounded-xl flex items-center space-x-4">
        <div>
          <h1 className="text-lg font-semibold">You are at Park</h1>
          <p className="text-sm text-gray-600">A park area</p>
        </div>
        <Buttons>Refetch</Buttons>
      </div>

      <Alerts />
    </div>
  );
}
