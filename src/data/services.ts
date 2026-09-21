import type { LucideIcon } from "lucide-react";
import { Hammer, Droplets, ShoppingBag } from "lucide-react";

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
export const mainServices: MainService[] = [
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
];
