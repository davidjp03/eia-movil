"use client";

import { LoadScript } from "@react-google-maps/api";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

type GoogleMapsProviderProps = {
  children: React.ReactNode;
};

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
