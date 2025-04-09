import BusRouterSelector from "../molecules/dashboard/Header";
import { User } from "@/types/user";
import { transitRoutes } from "@/app/data/transitRoutes";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const user: User = {
  name: "Andres Montoya",
  idCard: "123456789",
  balance: 5000.0,
};

const DashboardTemplate = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 right-0 z-50">
        <BusRouterSelector user={user} routes={transitRoutes} apiKey={apiKey} />
      </div>
    </div>
  );
};

export default DashboardTemplate;
