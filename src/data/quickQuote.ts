import type { Locale } from "@/i18n/locale";

export type PoolSize = "Small" | "Medium" | "Large";
export type Frequency = "Weekly" | "One-time";

export const poolSizes: PoolSize[] = ["Small", "Medium", "Large"];
export const frequencies: Frequency[] = ["Weekly", "One-time"];

export const poolSizeLabels: Record<Locale, Record<PoolSize, string>> = {
  en: {
    Small: "Small (10' x 20')",
    Medium: "Medium (16' x 32')",
    Large: "Large (20' x 40')",
  },
  es: {
    Small: "Pequeña (10' x 20')",
    Medium: "Mediana (16' x 32')",
    Large: "Grande (20' x 40')",
  },
};

export const frequencyLabels: Record<Locale, Record<Frequency, string>> = {
  en: { Weekly: "Weekly", "One-time": "One-time" },
  es: { Weekly: "Semanal", "One-time": "Única vez" },
};

// No real Garma Pools pricing exists yet. These are left as `null` on
// purpose — the UI always shows "Request a custom quote" instead of a
// dollar figure. Once real prices are provided, fill in this table (in USD)
// and the calculator will display them automatically.
export const maintenancePriceTable: Record<PoolSize, Record<Frequency, number | null>> = {
  Small: { Weekly: null, "One-time": null },
  Medium: { Weekly: null, "One-time": null },
  Large: { Weekly: null, "One-time": null },
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
  ],
};
