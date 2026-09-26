"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { serviceAreaCities } from "@/data/serviceAreas";

// Real coordinates for each city, used to plot an actual map instead of a
// stylized/abstract layout.
const cityCoordinates: Record<string, [number, number]> = {
  Brownsville: [25.9017, -97.4975],
  Harlingen: [26.1906, -97.6961],
  "San Benito": [26.1329, -97.6314],
  Weslaco: [26.1595, -97.9909],
  Mercedes: [26.1501, -97.9147],
  McAllen: [26.2034, -98.23],
  Edinburg: [26.3017, -98.1633],
  Mission: [26.2159, -98.3253],
  Pharr: [26.1948, -98.1836],
  "South Padre Island": [26.1118, -97.1686],
  Combes: [26.2523, -97.7381],
  "Rio Hondo": [26.2379, -97.5817],
  "Los Fresnos": [26.0668, -97.4778],
  Bayview: [26.1454, -97.3892],
  "Laguna Vista": [26.1004, -97.2989],
  "Port Isabel": [26.0734, -97.2086],
  "Arroyo City": [26.2988, -97.4386],
  "Rancho Viejo": [26.0187, -97.5461],
};

export function ServiceAreaHeatMap({
  ariaLabel,
  unconfirmedTooltip,
}: {
  ariaLabel: string;
  unconfirmedTooltip: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
        maxZoom: 16,
      });
      mapRef.current = map;

      // Esri's dark-canvas basemap — free to use, no API key required.
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
          maxZoom: 16,
        },
      ).addTo(map);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 16 },
      ).addTo(map);

      const points: [number, number][] = [];

      for (const city of serviceAreaCities) {
        const coord = cityCoordinates[city.name];
        if (!coord) continue;
        points.push(coord);

        L.circle(coord, {
          radius: city.confirmed ? 9000 : 6000,
          color: city.confirmed ? "#f0a63b" : "#33c3de",
          weight: 1,
          opacity: city.confirmed ? 0.6 : 0.35,
          fillColor: city.confirmed ? "#f0a63b" : "#33c3de",
          fillOpacity: city.confirmed ? 0.3 : 0.16,
        }).addTo(map);

        L.circleMarker(coord, {
          radius: 4,
          color: "#061826",
          weight: 1,
          fillColor: city.confirmed ? "#f0a63b" : "#33c3de",
          fillOpacity: 1,
        })
          .bindTooltip(city.confirmed ? city.name : `${city.name} — ${unconfirmedTooltip}`)
          .addTo(map);
      }

      if (points.length > 0) {
        map.fitBounds(L.latLngBounds(points), { padding: [28, 28] });
      }
    }

    init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [unconfirmedTooltip]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={ariaLabel}
      className="h-64 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-navy-950 sm:h-96"
    />
  );
}
