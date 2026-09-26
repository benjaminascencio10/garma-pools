export interface ServiceAreaCity {
  name: string;
  // Not yet confirmed with the business — shown as "check availability"
  // rather than asserted coverage until confirmed. Easy to flip once
  // Garma Pools confirms their real coverage footprint.
  confirmed: boolean;
}

export const serviceAreaCities: ServiceAreaCity[] = [
  { name: "Brownsville", confirmed: false },
  { name: "Harlingen", confirmed: false },
  { name: "San Benito", confirmed: false },
  { name: "Weslaco", confirmed: false },
  { name: "Mercedes", confirmed: false },
  { name: "McAllen", confirmed: false },
  { name: "Edinburg", confirmed: false },
  { name: "Mission", confirmed: false },
  { name: "Pharr", confirmed: false },
  { name: "South Padre Island", confirmed: true },
  { name: "Combes", confirmed: true },
  { name: "Rio Hondo", confirmed: true },
  { name: "Los Fresnos", confirmed: true },
  { name: "Bayview", confirmed: true },
  { name: "Laguna Vista", confirmed: true },
  { name: "Port Isabel", confirmed: true },
  { name: "Arroyo City", confirmed: true },
  { name: "Rancho Viejo", confirmed: true },
];
