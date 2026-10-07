import type { Locale } from "@/i18n/locale";

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
