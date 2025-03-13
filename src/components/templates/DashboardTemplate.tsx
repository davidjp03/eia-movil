import BusRouterSelector from "../molecules/dashboard/Header";
import UserLocationMap from "../molecules/dashboard/Map";
import { User } from "@/types/user";
import { TransitRoute } from "@/types/transitRoute/transitRoute";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

// Datos de ejemplo
const user: User = {
  name: "Andres Montoya",
  idCard: "123456789",
  balance: 5000.0,
};

const routes: TransitRoute[] = [
  {
    name: "Clínica Las Américas",
    direction: {
      startPoint: "Calle 30 #55-123, Medellín",
      endPoint: "Av. 80 #30-45, Medellín",
      routeUrl: "https://www.google.com/maps/dir/?api=1&origin=Calle+30+%2355-123,+Medell%C3%ADn&destination=Av.+80+%2330-45,+Medell%C3%ADn",
    },
    schedules: ["08:00", "12:00", "16:00"],
  },
  {
    name: "Sofasa - Zúñiga",
    direction: {
      startPoint: "Calle 50 #30-20, Medellín",
      endPoint: "Cra 48 #26 Sur-30, Envigado",
      routeUrl: "https://www.google.com/maps/dir/?api=1&origin=Calle+50+%2330-20,+Medell%C3%ADn&destination=Cra+48+%2326+Sur-30,+Envigado",
    },
    schedules: ["07:00", "13:00", "18:00"],
  },
];

const DashboardTemplate = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 right-0 z-50">
        {/* Agregamos apiKey como prop */}
        <BusRouterSelector user={user} routes={routes} apiKey={apiKey} />
      </div>
      <div className="absolute inset-0">
        <UserLocationMap apiKey={apiKey} />
      </div>
    </div>
  );
};

export default DashboardTemplate;
