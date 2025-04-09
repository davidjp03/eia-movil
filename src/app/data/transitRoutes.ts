import { TransitRoute } from "@/types/transitRoute/transitRoute";

const sharedSchedules = ["04:55", "06:20", "06:45", "08:45", "12:30"];

export const transitRoutes: TransitRoute[] = [
  {
    name: "Bosques De Zuñiga",
    direction: {
      startPoint: "6.173917,-75.587185",
      endPoint: "6.155848,-75.564987",
      waypoints: [
        "6.171723,-75.582897",
        "6.170418,-75.580262",
        "6.168053,-75.577123",
      ],
      routeUrl:
        "https://www.google.com/maps/dir/Concesionario+Honda+Autoguayac%C3%A1n,+Cl.+24+Sur+%2343a-60,+Zona+2,+Envigado,+Antioquia/Parroquia+La+Ni%C3%B1a+Mar%C3%ADa,+Cra.+44+%2321+Sur-6,+Zona+2,+Envigado,+Antioquia/Urbanizaci%C3%B3n+Quebradahonda,+Cl.+21+Sur+%2341b-55,+Los+Cristales,+Envigado,+Antioquia/Edificio+Torre+Mayor,+Cl.+20+Sur+%2339+a+-+250,+El+Poblado,+Medell%C3%ADn,+Antioquia/Universidad+EIA,+Vda.+El+Penasco,+Envigado,+Antioquia/",
    },
    schedules: sharedSchedules,
  },
  {
    name: "Clínica Las Américas",
    direction: {
      startPoint: "6.230178,-75.606231",
      endPoint: "6.155848,-75.564987",
      waypoints: [
        "6.223317,-75.601708",
        "6.202981,-75.580662",
      ],
      routeUrl:
        "https://www.google.com/maps/dir/Clínica+Las+Américas,+Medellín/Estación+La+Mota,+Medellín/Avenida+Guayabal,+Medellín/Universidad+EIA,+Envigado",
    },
    schedules: sharedSchedules,
  },
  {
    name: "Mayorca",
    direction: {
      startPoint: "6.171473,-75.591240",
      endPoint: "6.155848,-75.564987",
      waypoints: [
        "6.166924,-75.581571",
        "6.160875,-75.572874",
      ],
      routeUrl:
        "https://www.google.com/maps/dir/Mayorca,+Envigado/Calle+27+Sur,+Envigado/Loma+del+Escobero,+Envigado/Universidad+EIA,+Envigado",
    },
    schedules: sharedSchedules,
  },
  {
    name: "Rionegro",
    direction: {
      startPoint: "6.141183,-75.374153",
      endPoint: "6.155848,-75.564987",
      waypoints: [
        "6.153059,-75.449455",
        "6.160193,-75.508755",
      ],
      routeUrl:
        "https://www.google.com/maps/dir/Parque+Rionegro/Llanogrande/Variante+Las+Palmas/Universidad+EIA",
    },
    schedules: sharedSchedules,
  },
];
