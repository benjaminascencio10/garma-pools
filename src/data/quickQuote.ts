import type { Locale } from "@/i18n/locale";

export type PoolSize = "Small" | "Medium" | "Large";
export type Frequency = "Weekly" | "Bi-weekly" | "One-time";

export const poolSizes: PoolSize[] = ["Small", "Medium", "Large"];
export const frequencies: Frequency[] = ["Weekly", "Bi-weekly", "One-time"];

export const poolSizeLabels: Record<Locale, Record<PoolSize, string>> = {
  en: { Small: "Small", Medium: "Medium", Large: "Large" },
  es: { Small: "Pequeña", Medium: "Mediana", Large: "Grande" },
};

export const frequencyLabels: Record<Locale, Record<Frequency, string>> = {
  en: { Weekly: "Weekly", "Bi-weekly": "Bi-weekly", "One-time": "One-time" },
  es: { Weekly: "Semanal", "Bi-weekly": "Quincenal", "One-time": "Única vez" },
};

// No real Garma Pools pricing exists yet. These are left as `null` on
// purpose — the UI always shows "Request a custom quote" instead of a
// dollar figure. Once real prices are provided, fill in this table (in USD)
// and the calculator will display them automatically.
export const maintenancePriceTable: Record<PoolSize, Record<Frequency, number | null>> = {
  Small: { Weekly: null, "Bi-weekly": null, "One-time": null },
  Medium: { Weekly: null, "Bi-weekly": null, "One-time": null },
  Large: { Weekly: null, "Bi-weekly": null, "One-time": null },
};

export interface QuickQuoteCard {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const quickQuoteCards: Record<Locale, QuickQuoteCard[]> = {
  en: [
    {
      id: "monthly-maintenance",
      title: "Monthly Maintenance",
      description: "Ongoing cleaning and chemical balance on a schedule.",
      href: "#quote",
    },
    {
      id: "one-time-cleaning",
      title: "One-Time Cleaning",
      description: "A single visit to get your pool back in shape.",
      href: "#quote",
    },
    {
      id: "pool-construction",
      title: "Pool Construction",
      description: "Start planning your new residential pool.",
      href: "#quote",
    },
    {
      id: "repair-equipment",
      title: "Repair & Equipment",
      description: "Fix an issue or replace pool equipment.",
      href: "#quote",
    },
    {
      id: "pool-products",
      title: "Pool Products",
      description: "Chemicals and supplies for your pool.",
      href: "#products",
    },
  ],
  es: [
    {
      id: "monthly-maintenance",
      title: "Mantenimiento Mensual",
      description: "Limpieza continua y balance químico con un horario fijo.",
      href: "#quote",
    },
    {
      id: "one-time-cleaning",
      title: "Limpieza Única",
      description: "Una sola visita para dejar tu alberca en buen estado.",
      href: "#quote",
    },
    {
      id: "pool-construction",
      title: "Construcción de Alberca",
      description: "Empieza a planear tu nueva alberca residencial.",
      href: "#quote",
    },
    {
      id: "repair-equipment",
      title: "Reparación y Equipo",
      description: "Resuelve un problema o reemplaza el equipo de tu alberca.",
      href: "#quote",
    },
    {
      id: "pool-products",
      title: "Productos para Alberca",
      description: "Químicos e insumos para tu alberca.",
      href: "#products",
    },
  ],
};
