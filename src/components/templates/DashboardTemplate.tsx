import BusRouterSelector from "../molecules/dashboard/BusRouteSelector";
import UserLocationMap from "../molecules/dashboard/Map";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string; // Usa tu API Key

const DashboardTemplate = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header fijo */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <BusRouterSelector />
      </div>

      {/* Mapa de fondo */}
      <div className="absolute inset-0">
        <UserLocationMap apiKey={apiKey} />
      </div>
    </div>
  );
};

export default DashboardTemplate;
