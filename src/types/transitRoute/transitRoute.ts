export type TransitRoute = {
  name: string;
  direction: {
    startPoint: string; // Dirección de inicio (Google Maps)
    endPoint: string; // Dirección de destino (Google Maps)
    waypoints?: string[]; // Opcional: Lista de paradas intermedias en formato "lat,lng"
    routeUrl: string; // URL de la ruta en Google Maps
  };
  schedules: string[]; // Lista de horarios en formato "HH:mm"
};
