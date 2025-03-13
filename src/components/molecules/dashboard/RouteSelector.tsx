"use client";

import { useState } from "react";
import { TransitRoute } from "@/types/transitRoute/transitRoute";
import MapDisplay from "./MapDsiplay";

type RouteSelectorProps = {
  routes: TransitRoute[];
  onClose: () => void;
  apiKey: string;
};

const RouteSelector = ({ routes, onClose, apiKey }: RouteSelectorProps) => {
  const [selectedRoute, setSelectedRoute] = useState<TransitRoute | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

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
              onClick={() => setSelectedRoute(route)}
            >
              {route.name}
            </li>
          ))}
        </ul>

        {selectedRoute && (
          <>
            <h3 className="text-center font-semibold mt-4">Selecciona un horario</h3>
            <ul className="mt-2">
              {selectedRoute.schedules.map((time) => (
                <li
                  key={time}
                  className={`text-center py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer ${
                    selectedTime === time ? "font-bold text-blue-500" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
          </>
        )}

        {selectedRoute && selectedTime && (
          <MapDisplay route={selectedRoute} selectedTime={selectedTime} apiKey={apiKey} />
        )}
      </div>
    </>
  );
};

export default RouteSelector;
