import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Droplets,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  Hammer,
} from "lucide-react";

export type QuoteServiceId =
  | "new-pool"
  | "maintenance"
  | "cleaning"
  | "repair"
  | "products"
  | "other";

export interface QuoteServiceOption {
  id: QuoteServiceId;
  icon: LucideIcon;
  label: string;
  description: string;
}

// STEP 1 — service selection options.
export const quoteServiceOptions: QuoteServiceOption[] = [
  {
    id: "new-pool",
    icon: Hammer,
    label: "Build a New Pool",
    description: "Get a quote for a new residential pool project.",
  },
  {
    id: "maintenance",
    icon: Droplets,
    label: "Pool Maintenance",
    description: "Ongoing cleaning and chemical balance service.",
  },
  {
    id: "cleaning",
    icon: Sparkles,
    label: "Pool Cleaning",
    description: "A one-time or occasional pool cleaning.",
  },
  {
    id: "repair",
    icon: Wrench,
    label: "Pool Repair",
    description: "Equipment issues or pool repairs.",
  },
  {
    id: "products",
    icon: ShoppingBag,
    label: "Pool Products",
    description: "Chemicals and supplies for your pool.",
  },
  {
    id: "other",
    icon: HelpCircle,
    label: "Other",
    description: "Not sure yet? Tell us what you need.",
  },
];

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
export const quoteFieldsByService: Record<QuoteServiceId, QuoteField[]> = {
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
      options: ["Small", "Medium", "Large", "Not sure"],
    },
    {
      name: "poolSizePreference",
      label: "Pool size preference",
      type: "select",
      options: ["Small", "Medium", "Large", "Not sure yet"],
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
      options: ["Small", "Medium", "Large", "Not sure"],
    },
    {
      name: "propertyType",
      label: "Residential / Commercial",
      type: "select",
      options: ["Residential", "Commercial"],
    },
    {
      name: "frequency",
      label: "Weekly / Bi-weekly / One-time",
      type: "select",
      options: ["Weekly", "Bi-weekly", "One-time"],
    },
    {
      name: "zip",
      label: "ZIP Code",
      type: "text",
      required: true,
      placeholder: "78501",
    },
  ],
  cleaning: [
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
      options: ["Small", "Medium", "Large", "Not sure"],
    },
    {
      name: "frequency",
      label: "How often do you need cleaning?",
      type: "select",
      options: ["One-time", "Weekly", "Bi-weekly"],
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
  products: [
    {
      name: "productInterest",
      label: "What products do you need?",
      type: "select",
      options: ["Chemicals", "Cleaning supplies", "Filters", "Equipment", "Accessories", "Not sure"],
    },
    {
      name: "description",
      label: "Anything else we should know?",
      type: "textarea",
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
};

export const quoteServiceLabels: Record<QuoteServiceId, string> = Object.fromEntries(
  quoteServiceOptions.map((option) => [option.id, option.label]),
) as Record<QuoteServiceId, string>;
