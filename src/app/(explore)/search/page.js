'use client'
import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleMapsSearch() {
  useEffect(() => {
    async function init() {
      await customElements.whenDefined('gmp-map');

      const map = document.querySelector('gmp-map');
      const marker = document.querySelector('gmp-advanced-marker');
      const placePicker = document.querySelector('gmpx-place-picker');
      const infowindow = new google.maps.InfoWindow();

      map.innerMap.setOptions({
        mapTypeControl: false,
      });

      placePicker.addEventListener('gmpx-placechange', () => {
        const place = placePicker.value;

        if (!place.location) {
          window.alert(`No details available for input: '${place.name}'`);
          infowindow.close();
          marker.position = null;
          return;
        }

        if (place.viewport) {
          map.innerMap.fitBounds(place.viewport);
        } else {
          map.center = place.location;
          map.zoom = 17;
        }

        marker.position = place.location;
        infowindow.setContent(
          `<strong>${place.displayName}</strong><br><span>${place.formattedAddress}</span>`
        );
        infowindow.open(map.innerMap, marker);
      });
    }

    document.addEventListener('DOMContentLoaded', init);

    return () => {
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-FNEgv_k5UflBAv0Jg6nNuARLnOYhhoA&libraries=places"
        strategy="afterInteractive"
        onLoad={() => console.log('Google Maps API script loaded')}
      />

      <gmpx-api-loader
        key="AIzaSyD-FNEgv_k5UflBAv0Jg6nNuARLnOYhhoA"
        solution-channel="GMP_GE_mapsandplacesautocomplete_v1"
      ></gmpx-api-loader>

      <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID">
        <div slot="control-block-start-inline-start" className="place-picker-container">
          <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
        </div>
        <gmp-advanced-marker></gmp-advanced-marker>
      </gmp-map>

      <style jsx>{`
        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .place-picker-container {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
