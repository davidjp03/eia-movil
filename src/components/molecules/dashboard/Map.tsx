"use client";

import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

interface UserLocationMapProps {
  apiKey: string;
}

export default function UserLocationMap({ apiKey }: UserLocationMapProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("No se pudo obtener la ubicación del usuario.");
          console.error(err);
        }
      );
    } else {
      setError("Geolocalización no es compatible con este navegador.");
    }
  }, []);

  return (
    <div className="fixed inset-0">
      <LoadScript googleMapsApiKey={apiKey}>
        {error ? (
          <p className="text-red-500 text-center mt-4">{error}</p>
        ) : userLocation ? (
          <div className="absolute inset-0">
            <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={15}>
              <Marker position={userLocation} />
            </GoogleMap>
          </div>
        ) : (
          <p className="text-center mt-4">Cargando ubicación...</p>
        )}
      </LoadScript>
    </div>
  );
}
