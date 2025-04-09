"use client";

import { useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { TransitRoute } from "@/types/transitRoute/transitRoute";

type MapDisplayProps = {
  route: TransitRoute;
  selectedTime: string;
};

const MapDisplay = ({ route, selectedTime }: MapDisplayProps) => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  useEffect(() => {
    if (!route || !route.direction.startPoint || !route.direction.endPoint) return;

    console.log("🔹 Solicitando ruta con estos datos:");
    console.log("📍 Origen:", route.direction.startPoint);
    console.log("📍 Destino:", route.direction.endPoint);
    console.log("🛑 Waypoints:", route.direction.waypoints ?? "Sin waypoints");

    const directionsService = new google.maps.DirectionsService();

    const waypoints = route.direction.waypoints
      ? route.direction.waypoints.map((wp) => ({ location: wp, stopover: true }))
      : [];

    directionsService.route(
      {
        origin: route.direction.startPoint,
        destination: route.direction.endPoint,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints,
        optimizeWaypoints: false,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log("✅ Ruta encontrada:", result);
          setDirections(result);
        } else {
          console.error("❌ Error obteniendo la ruta:", status);
        }
      }
    );
  }, [route]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={12}
        center={{ lat: 6.230833, lng: -75.590553 }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      <p className="mt-4 text-center text-gray-600">
        <strong>Horario seleccionado:</strong> {selectedTime}
      </p>
    </div>
  );
};

export default MapDisplay;
