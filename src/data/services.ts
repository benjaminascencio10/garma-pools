import type { LucideIcon } from "lucide-react";
import { Hammer, RefreshCw, Droplets } from "lucide-react";
import type { Locale } from "@/i18n/locale";

export type ServiceKey = "construction" | "remodeling" | "maintenance";

export interface MainService {
  key: ServiceKey;
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

// Three primary services shown as the main service cards on the landing page.
// Each links straight into the dedicated /quote page with that service
// pre-selected (see QuoteWizard's `?service=` handling).
export const mainServices: Record<Locale, MainService[]> = {
  en: [
    {
      key: "construction",
      icon: Hammer,
      title: "Pool Construction and Design",
      description:
        "Custom residential pools designed and built around the way your family lives in the backyard.",
      ctaLabel: "Start Your Project",
      href: "/quote?service=new-pool",
    },
    {
      key: "remodeling",
      icon: RefreshCw,
      title: "Pool Remodeling and Resurfacing",
      description:
        "Give an existing pool a fresh finish, updated tile, or a full remodel to bring it back to life.",
      ctaLabel: "Get a Remodel Quote",
      href: "/quote?service=repair",
    },
    {
      key: "maintenance",
      icon: Droplets,
      title: "Pool Maintenance and Repair",
      description:
        "Regular service to keep your water clean and balanced, plus repairs when equipment needs attention.",
      ctaLabel: "Get Maintenance Quote",
      href: "/quote?service=maintenance",
    },
  ],
  es: [
    {
      key: "construction",
      icon: Hammer,
      title: "Construcción y Diseño de Albercas",
      description:
        "Albercas residenciales a la medida, diseñadas y construidas para cómo tu familia vive el patio.",
      ctaLabel: "Inicia Tu Proyecto",
      href: "/quote?service=new-pool",
    },
    {
      key: "remodeling",
      icon: RefreshCw,
      title: "Remodelación y Resanado de Albercas",
      description:
        "Dale a tu alberca un acabado nuevo, azulejo actualizado o una remodelación completa.",
      ctaLabel: "Cotizar Remodelación",
      href: "/quote?service=repair",
    },
    {
      key: "maintenance",
      icon: Droplets,
      title: "Mantenimiento y Reparación de Albercas",
      description:
        "Servicio regular para mantener tu agua limpia y balanceada, más reparaciones cuando el equipo lo necesite.",
      ctaLabel: "Cotizar Mantenimiento",
      href: "/quote?service=maintenance",
    },
  ],
};
