"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/dashboard/Icon";
import Sidebar from "./SideBar";
import RouteSelector from "./RouteSelector";
import { User } from "@/types/user";
import { TransitRoute } from "@/types/transitRoute/transitRoute";

type BusRouterSelectorProps = {
  user: User;
  routes: TransitRoute[];
  apiKey: string; // Agregar la API Key como prop
};

const BusRouterSelector = ({ user, routes, apiKey }: BusRouterSelectorProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRouteSelectorOpen, setIsRouteSelectorOpen] = useState(false);

  // Función para abrir/cerrar el Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setIsRouteSelectorOpen(false); // Cierra el selector de rutas si está abierto
  };

  // Función para abrir/cerrar el selector de rutas
  const toggleRouteSelector = () => {
    setIsRouteSelectorOpen((prev) => !prev);
    setIsSidebarOpen(false); // Cierra el sidebar si está abierto
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-[min(90%,600px)] flex items-center justify-between bg-white shadow-lg px-8 py-3 rounded-full">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Icon />
        </button>
        <Button onClick={toggleRouteSelector}>Selecciona tu ruta</Button>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} user={user} />

      {/* Route Selector */}
      {isRouteSelectorOpen && (
        <RouteSelector routes={routes} onClose={toggleRouteSelector} apiKey={apiKey} />
      )}
    </>
  );
};

export default BusRouterSelector;
