"use client";
import React, { useState, useEffect } from 'react';

export default function CurrentLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [place, setPlace] = useState("Ranchi");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-2 text-gray-800">Welcome to {place}</h1>
      {error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <div className=" flex text-sm text-gray-600">
          <p>Lat: {location.latitude}</p>
          <p>Long: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}