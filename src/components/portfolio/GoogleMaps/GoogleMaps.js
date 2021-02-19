import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.5482697,
  lng: -121.98857190000001,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_REACT_PORTFOLIO_API_KEY}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Marker position={center} label="TG" />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
