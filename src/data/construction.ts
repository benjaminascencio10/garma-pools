import type { Locale } from "@/i18n/locale";

export interface ConstructionCategory {
  name: string;
  description: string;
  // Not yet confirmed as an official Garma Pools offering — keep editable
  // here until the business confirms it, per project instructions.
  confirmed: boolean;
}

export const constructionCategories: Record<Locale, ConstructionCategory[]> = {
  en: [
    {
      name: "Custom Pools",
      description: "New residential pools designed around your backyard.",
      confirmed: true,
    },
    {
      name: "Pool Remodeling",
      description: "Refresh and update an existing pool.",
      confirmed: false,
    },
    {
      name: "Pool Equipment",
      description: "Pumps, filters, heaters, and automation.",
      confirmed: true,
    },
  ],
  es: [
    {
      name: "Albercas Personalizadas",
      description: "Albercas residenciales nuevas diseñadas para tu patio.",
      confirmed: true,
    },
    {
      name: "Remodelación de Albercas",
      description: "Renueva y actualiza una alberca existente.",
      confirmed: false,
    },
    {
      name: "Equipo para Alberca",
      description: "Bombas, filtros, calentadores y automatización.",
      confirmed: true,
    },
  ],
};
