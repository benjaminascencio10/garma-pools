import { serviceAreaCities } from "@/data/serviceAreas";

// Approximate relative positions of each city within the Rio Grande Valley,
// projected from real lat/long onto a 720x280 viewBox (not surveyed —
// close enough for a visual coverage map, not for navigation).
const cityCoordinates: Record<string, { x: number; y: number }> = {
  Brownsville: { x: 489, y: 220 },
  Harlingen: { x: 386, y: 104 },
  "San Benito": { x: 420, y: 128 },
  Weslaco: { x: 234, y: 117 },
  Mercedes: { x: 273, y: 121 },
  McAllen: { x: 109, y: 99 },
  Edinburg: { x: 144, y: 60 },
  Mission: { x: 60, y: 94 },
  Pharr: { x: 134, y: 103 },
  "South Padre Island": { x: 660, y: 136 },
  Combes: { x: 365, y: 80 },
  "Rio Hondo": { x: 446, y: 86 },
  "Los Fresnos": { x: 500, y: 154 },
  Bayview: { x: 546, y: 123 },
  "Laguna Vista": { x: 592, y: 141 },
  "Port Isabel": { x: 639, y: 151 },
  "Arroyo City": { x: 520, y: 61 },
  "Rancho Viejo": { x: 464, y: 173 },
};

export function ServiceAreaHeatMap({
  ariaLabel,
  unconfirmedTooltip,
}: {
  ariaLabel: string;
  unconfirmedTooltip: string;
}) {
  const points = serviceAreaCities
    .map((city) => ({ ...city, coord: cityCoordinates[city.name] }))
    .filter((city) => city.coord);

  return (
    <svg
      viewBox="0 0 720 280"
      role="img"
      aria-label={ariaLabel}
      className="h-64 w-full max-w-3xl rounded-3xl border border-white/10 bg-navy-950/60 sm:h-72"
    >
      <defs>
        <radialGradient id="heat-confirmed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0a63b" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#0eaec9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0eaec9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heat-unconfirmed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#33c3de" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#33c3de" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g style={{ mixBlendMode: "screen" }}>
        {points.map((city) => (
          <circle
            key={`glow-${city.name}`}
            cx={city.coord.x}
            cy={city.coord.y}
            r={city.confirmed ? 78 : 52}
            fill={city.confirmed ? "url(#heat-confirmed)" : "url(#heat-unconfirmed)"}
          />
        ))}
      </g>

      {points.map((city) => (
        <circle
          key={`marker-${city.name}`}
          cx={city.coord.x}
          cy={city.coord.y}
          r={4}
          fill={city.confirmed ? "#f0a63b" : "#33c3de"}
          stroke="#061826"
          strokeWidth={1}
          opacity={city.confirmed ? 1 : 0.7}
        >
          <title>{city.confirmed ? city.name : `${city.name} — ${unconfirmedTooltip}`}</title>
        </circle>
      ))}
    </svg>
  );
}
