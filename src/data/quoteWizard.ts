import type { LucideIcon } from "lucide-react";
import { Wrench, Droplets, HelpCircle, Hammer } from "lucide-react";
import type { Locale } from "@/i18n/locale";

export type QuoteServiceId = "new-pool" | "maintenance" | "repair" | "other";

export interface QuoteServiceOption {
  id: QuoteServiceId;
  icon: LucideIcon;
  label: string;
  description: string;
}

// STEP 1 — service selection options.
export const quoteServiceOptions: Record<Locale, QuoteServiceOption[]> = {
  en: [
    {
      id: "new-pool",
      icon: Hammer,
      label: "Build a New Pool",
      description: "Get a quote for a new residential pool project.",
    },
    {
      id: "maintenance",
      icon: Droplets,
      label: "Pool Maintenance & Cleaning",
      description: "Ongoing service or a one-time cleaning and chemical balance visit.",
    },
    {
      id: "repair",
      icon: Wrench,
      label: "Pool Repair",
      description: "Equipment issues or pool repairs.",
    },
    {
      id: "other",
      icon: HelpCircle,
      label: "Other",
      description: "Not sure yet? Tell us what you need.",
    },
  ],
  es: [
    {
      id: "new-pool",
      icon: Hammer,
      label: "Construir una Alberca Nueva",
      description: "Cotiza un proyecto de alberca residencial nueva.",
    },
    {
      id: "maintenance",
      icon: Droplets,
      label: "Mantenimiento y Limpieza de Alberca",
      description: "Servicio continuo o una visita única de limpieza y balance químico.",
    },
    {
      id: "repair",
      icon: Wrench,
      label: "Reparación de Alberca",
      description: "Problemas de equipo o reparaciones de la alberca.",
    },
    {
      id: "other",
      icon: HelpCircle,
      label: "Otro",
      description: "¿No estás seguro? Cuéntanos qué necesitas.",
    },
  ],
};

export type QuoteFieldType = "text" | "select" | "textarea";

export interface QuoteField {
  name: string;
  label: string;
  type: QuoteFieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

// STEP 2 — dynamic fields per selected service.
export const quoteFieldsByService: Record<Locale, Record<QuoteServiceId, QuoteField[]>> = {
  en: {
    "new-pool": [
      {
        name: "existingPool",
        label: "Do you have an existing pool?",
        type: "select",
        required: true,
        options: ["No, this is a new pool", "Yes, I'm replacing/remodeling"],
      },
      {
        name: "backyardSize",
        label: "Approximate backyard size",
        type: "select",
        options: [
          "Under 800 sq ft",
          "800–1,500 sq ft",
          "1,500–3,000 sq ft",
          "Over 3,000 sq ft",
          "Not sure",
        ],
      },
      {
        name: "poolSizePreference",
        label: "Pool size preference",
        type: "select",
        options: [
          "Small (10' x 20')",
          "Medium (16' x 32')",
          "Large (20' x 40')",
          "Extra Large (25'+ x 50'+)",
          "Not sure yet",
        ],
      },
      {
        name: "desiredFeatures",
        label: "Desired features",
        type: "textarea",
        placeholder: "e.g. spa, water feature, tanning ledge, lighting...",
      },
      {
        name: "timeline",
        label: "Preferred timeline",
        type: "select",
        options: ["ASAP", "1-3 months", "3-6 months", "Just exploring"],
      },
      {
        name: "zip",
        label: "ZIP Code",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    maintenance: [
      {
        name: "existingPool",
        label: "Existing pool?",
        type: "select",
        required: true,
        options: ["Yes", "No"],
      },
      {
        name: "poolSize",
        label: "Pool size",
        type: "select",
        options: [
          "Small (10' x 20')",
          "Medium (16' x 32')",
          "Large (20' x 40')",
          "Extra Large (25'+ x 50'+)",
          "Not sure",
        ],
      },
      {
        name: "propertyType",
        label: "Residential / Commercial",
        type: "select",
        options: ["Residential", "Commercial"],
      },
      {
        name: "frequency",
        label: "Weekly or one-time?",
        type: "select",
        required: true,
        options: ["Weekly", "One-time"],
      },
      {
        name: "zip",
        label: "ZIP Code",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    repair: [
      {
        name: "problemType",
        label: "Type of problem",
        type: "select",
        required: true,
        options: [
          "Pump / motor",
          "Filter",
          "Heater",
          "Leak",
          "Pool liner / surface",
          "Electrical",
          "Other",
        ],
      },
      {
        name: "equipment",
        label: "Pool equipment",
        type: "text",
        placeholder: "Brand/model if known",
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Tell us what's happening...",
      },
      {
        name: "zip",
        label: "ZIP Code",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    other: [
      {
        name: "description",
        label: "Tell us what you need",
        type: "textarea",
        required: true,
      },
      {
        name: "zip",
        label: "ZIP Code",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
  },
  es: {
    "new-pool": [
      {
        name: "existingPool",
        label: "¿Tienes una alberca existente?",
        type: "select",
        required: true,
        options: ["No, es una alberca nueva", "Sí, estoy reemplazando/remodelando"],
      },
      {
        name: "backyardSize",
        label: "Tamaño aproximado del patio",
        type: "select",
        options: [
          "Menos de 800 pies²",
          "800–1,500 pies²",
          "1,500–3,000 pies²",
          "Más de 3,000 pies²",
          "No estoy seguro",
        ],
      },
      {
        name: "poolSizePreference",
        label: "Tamaño de alberca preferido",
        type: "select",
        options: [
          "Pequeña (10' x 20')",
          "Mediana (16' x 32')",
          "Grande (20' x 40')",
          "Extra grande (25'+ x 50'+)",
          "Aún no estoy seguro",
        ],
      },
      {
        name: "desiredFeatures",
        label: "Características deseadas",
        type: "textarea",
        placeholder: "ej. spa, cascada, área para tomar el sol, iluminación...",
      },
      {
        name: "timeline",
        label: "Tiempo estimado deseado",
        type: "select",
        options: ["Lo antes posible", "1-3 meses", "3-6 meses", "Solo explorando"],
      },
      {
        name: "zip",
        label: "Código Postal",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    maintenance: [
      {
        name: "existingPool",
        label: "¿Alberca existente?",
        type: "select",
        required: true,
        options: ["Sí", "No"],
      },
      {
        name: "poolSize",
        label: "Tamaño de la alberca",
        type: "select",
        options: [
          "Pequeña (10' x 20')",
          "Mediana (16' x 32')",
          "Grande (20' x 40')",
          "Extra grande (25'+ x 50'+)",
          "No estoy seguro",
        ],
      },
      {
        name: "propertyType",
        label: "Residencial / Comercial",
        type: "select",
        options: ["Residencial", "Comercial"],
      },
      {
        name: "frequency",
        label: "¿Semanal o única vez?",
        type: "select",
        required: true,
        options: ["Semanal", "Única vez"],
      },
      {
        name: "zip",
        label: "Código Postal",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    repair: [
      {
        name: "problemType",
        label: "Tipo de problema",
        type: "select",
        required: true,
        options: [
          "Bomba / motor",
          "Filtro",
          "Calentador",
          "Fuga",
          "Recubrimiento / superficie de la alberca",
          "Eléctrico",
          "Otro",
        ],
      },
      {
        name: "equipment",
        label: "Equipo de la alberca",
        type: "text",
        placeholder: "Marca/modelo si lo sabes",
      },
      {
        name: "description",
        label: "Descripción",
        type: "textarea",
        placeholder: "Cuéntanos qué está pasando...",
      },
      {
        name: "zip",
        label: "Código Postal",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
    other: [
      {
        name: "description",
        label: "Cuéntanos qué necesitas",
        type: "textarea",
        required: true,
      },
      {
        name: "zip",
        label: "Código Postal",
        type: "text",
        required: true,
        placeholder: "78501",
      },
    ],
  },
};

export function getQuoteServiceLabels(locale: Locale): Record<QuoteServiceId, string> {
  return Object.fromEntries(
    quoteServiceOptions[locale].map((option) => [option.id, option.label]),
  ) as Record<QuoteServiceId, string>;
}
