import type { Locale } from "@/i18n/locale";

// Single source of truth for confirmed Garma Pools business facts that do
// not change between languages (name is a proper noun, phone is a fact).
export const company = {
  name: "Garma Pools",
  phone: "956-254-3142",
  phoneHref: "tel:+19562543142",

  social: {
    facebook: "https://www.facebook.com/garmapools",
  },
} as const;

interface CompanyText {
  tagline: string;
  heroHeadline: string;
  serviceRegion: string;
  // TODO: replace with confirmed values once provided by Garma Pools.
  address: string;
  email: string;
}

export const companyText: Record<Locale, CompanyText> = {
  en: {
    tagline: "Construction & Maintenance",
    heroHeadline: "Your Pool. Your Backyard. Our Expertise.",
    serviceRegion: "Rio Grande Valley, Texas",
    address: "PLACEHOLDER — Garma Pools address not yet provided",
    email: "PLACEHOLDER — Garma Pools email not yet provided",
  },
  es: {
    tagline: "Construcción y Mantenimiento",
    heroHeadline: "Tu Alberca. Tu Patio. Nuestra Experiencia.",
    serviceRegion: "el Valle de Texas",
    address: "MARCADOR DE POSICIÓN — dirección de Garma Pools aún no proporcionada",
    email: "MARCADOR DE POSICIÓN — correo de Garma Pools aún no proporcionado",
  },
};
