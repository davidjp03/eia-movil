"use client";

import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";
import { TransitRoute } from "@/types/transitRoute/transitRoute";

type MapDisplayProps = {
  route: TransitRoute;
  selectedTime: string;
  apiKey: string;
};

const MapDisplay = ({ route, selectedTime, apiKey }: MapDisplayProps) => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  useEffect(() => {
    if (!route || !route.direction.startPoint || !route.direction.endPoint) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: route.direction.startPoint,
        destination: route.direction.endPoint,
        travelMode: google.maps.TravelMode.DRIVING, 
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Error obteniendo la ruta:", status);
        }
      }
    );
  }, [route]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={12}
          center={{ lat: 6.230833, lng: -75.590553 }} // Ubicación por defecto
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>

      <p className="mt-4 text-center text-gray-600">
        <strong>Horario seleccionado:</strong> {selectedTime}
      </p>
    </LoadScript>
  );
};

export default MapDisplay;
