import type { LucideIcon } from "lucide-react";
import { Hammer, Droplets, ShoppingBag } from "lucide-react";
import type { Locale } from "@/i18n/locale";

export type ServiceKey = "construction" | "maintenance" | "products";

export interface MainService {
  key: ServiceKey;
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

// Three primary services shown as the main service cards on the landing page.
export const mainServices: Record<Locale, MainService[]> = {
  en: [
    {
      key: "construction",
      icon: Hammer,
      title: "Pool Construction",
      description:
        "Design and construction of residential pools, built for the way your family lives in the backyard.",
      ctaLabel: "Start Your Project",
      href: "#construction",
    },
    {
      key: "maintenance",
      icon: Droplets,
      title: "Pool Maintenance",
      description:
        "Regular service to keep your water clean, chemically balanced, and your pool in great condition.",
      ctaLabel: "Get Maintenance Quote",
      href: "#quote",
    },
    {
      key: "products",
      icon: ShoppingBag,
      title: "Pool Products",
      description:
        "Products and chemicals to help you care for and maintain your pool between service visits.",
      ctaLabel: "Shop Pool Products",
      href: "#products",
    },
  ],
  es: [
    {
      key: "construction",
      icon: Hammer,
      title: "Construcción de Albercas",
      description:
        "Diseño y construcción de albercas residenciales, pensadas para cómo tu familia vive el patio.",
      ctaLabel: "Inicia Tu Proyecto",
      href: "#construction",
    },
    {
      key: "maintenance",
      icon: Droplets,
      title: "Mantenimiento de Albercas",
      description:
        "Servicio regular para mantener tu agua limpia, balanceada y tu alberca en buenas condiciones.",
      ctaLabel: "Cotizar Mantenimiento",
      href: "#quote",
    },
    {
      key: "products",
      icon: ShoppingBag,
      title: "Productos para Alberca",
      description:
        "Productos y químicos para ayudarte a cuidar y mantener tu alberca entre visitas de servicio.",
      ctaLabel: "Ver Productos",
      href: "#products",
    },
  ],
};
