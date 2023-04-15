import React, { useState, useEffect } from 'react';

function GeoLocation({ onLocationChange }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        setLocation(null);
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      onLocationChange(location);
    }
  }, [location, onLocationChange]);

  return null;
}

export default GeoLocation;
