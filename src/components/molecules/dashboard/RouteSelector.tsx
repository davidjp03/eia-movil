"use client";

import { useState, useTransition } from "react";
import { TransitRoute } from "@/types/transitRoute/transitRoute";
import MapDisplay from "./MapDsiplay";

type RouteSelectorProps = {
  routes: TransitRoute[];
  onClose: () => void;
};

const RouteSelector = ({ routes, onClose }: RouteSelectorProps) => {
  const [selectedRoute, setSelectedRoute] = useState<TransitRoute | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleRouteChange = (route: TransitRoute) => {
    setIsLoading(true);

    startTransition(() => {
      setSelectedRoute(null); // reset before change for visual clarity
      setSelectedTime(null);

      // Simula delay visible
      setTimeout(() => {
        setSelectedRoute(route);
        setIsLoading(false);
      }, 800); // cambia este valor si quieres más o menos tiempo
    });
  };

  const getTimeStatus = (timeStr: string) => {
    const now = new Date();
    const [hours, minutes] = timeStr.split(":").map(Number);
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);

    if (selectedTime === timeStr) return "selected";
    if (time < now) return "past";
    return "upcoming";
  };

  const getTimeButtonClass = (timeStr: string) => {
    const status = getTimeStatus(timeStr);

    switch (status) {
      case "selected":
        return "bg-green-500 text-white";
      case "past":
        return "bg-red-500 text-white";
      case "upcoming":
        return "bg-blue-500 text-white";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={onClose} />

      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-[250px] p-4 z-50 border">
        <h2 className="text-center font-semibold border-b pb-2">Rutas disponibles</h2>
        <ul className="mt-2">
          {routes.map((route) => (
            <li
              key={route.name}
              className="text-center py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRouteChange(route)}
            >
              {route.name}
            </li>
          ))}
        </ul>

        {isLoading ? (
          <div className="text-center py-4 text-sm text-gray-500 animate-pulse">Cargando horarios...</div>
        ) : (
          selectedRoute && (
            <>
              <h3 className="text-center font-semibold mt-4">Selecciona un horario</h3>
              <ul className="mt-2 space-y-2">
                {selectedRoute.schedules.map((time) => (
                  <li key={time}>
                    <button
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-2 rounded ${getTimeButtonClass(time)} transition-colors duration-200`}
                    >
                      {time}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )
        )}

        {selectedRoute && selectedTime && <MapDisplay route={selectedRoute} selectedTime={selectedTime} />}
      </div>
    </>
  );
};

export default RouteSelector;
