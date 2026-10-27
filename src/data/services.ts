import type { LucideIcon } from "lucide-react";
import { Hammer, Droplets } from "lucide-react";
import type { Locale } from "@/i18n/locale";

export type ServiceKey = "construction" | "maintenance";

export interface MainService {
  key: ServiceKey;
  icon: LucideIcon;
  photo: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

// Two primary services shown as the main service cards on the landing page.
// Each links straight into the dedicated /quote page with that service
// pre-selected (see QuoteWizard's `?service=` handling).
export const mainServices: Record<Locale, MainService[]> = {
  en: [
    {
      key: "construction",
      icon: Hammer,
      photo: "/images/service-construction.jpg",
      title: "Pool Construction and Design",
      description:
        "Custom residential pools designed and built around the way your family lives in the backyard.",
      ctaLabel: "Start Your Project",
      href: "/quote?service=new-pool",
    },
    {
      key: "maintenance",
      icon: Droplets,
      photo: "/images/service-maintenance.jpg",
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
      photo: "/images/service-construction.jpg",
      title: "Construcción y Diseño de Albercas",
      description:
        "Albercas residenciales a la medida, diseñadas y construidas para cómo tu familia vive el patio.",
      ctaLabel: "Inicia Tu Proyecto",
      href: "/quote?service=new-pool",
    },
    {
      key: "maintenance",
      icon: Droplets,
      photo: "/images/service-maintenance.jpg",
      title: "Mantenimiento y Reparación de Albercas",
      description:
        "Servicio regular para mantener tu agua limpia y balanceada, más reparaciones cuando el equipo lo necesite.",
      ctaLabel: "Cotizar Mantenimiento",
      href: "/quote?service=maintenance",
    },
  ],
};
