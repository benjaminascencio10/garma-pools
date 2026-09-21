import type { Locale } from "@/i18n/locale";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  // Price is intentionally a placeholder until Garma Pools provides real pricing.
  price: string | null;
  image: string | null;
}

export type ProductCategory =
  | "Chemicals"
  | "Cleaning Supplies"
  | "Filters"
  | "Equipment"
  | "Accessories";

export const productCategories: Record<Locale, ProductCategory[]> = {
  en: ["Chemicals", "Cleaning Supplies", "Filters", "Equipment", "Accessories"],
  es: ["Chemicals", "Cleaning Supplies", "Filters", "Equipment", "Accessories"],
};

// Display labels for the English `ProductCategory` keys, per locale.
export const productCategoryLabels: Record<Locale, Record<ProductCategory, string>> = {
  en: {
    Chemicals: "Chemicals",
    "Cleaning Supplies": "Cleaning Supplies",
    Filters: "Filters",
    Equipment: "Equipment",
    Accessories: "Accessories",
  },
  es: {
    Chemicals: "Químicos",
    "Cleaning Supplies": "Insumos de Limpieza",
    Filters: "Filtros",
    Equipment: "Equipo",
    Accessories: "Accesorios",
  },
};

// Placeholder catalog — no real Garma Pools inventory or pricing exists yet.
// Replace `name`, `description`, `price`, and `image` per product once the
// business provides its real catalog. Structure is ready to connect to an
// ecommerce backend later.
export const products: Record<Locale, Product[]> = {
  en: [
    {
      id: "placeholder-chemical-1",
      category: "Chemicals",
      name: "PLACEHOLDER — Pool Chemical",
      description: "Product details coming soon.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-cleaning-1",
      category: "Cleaning Supplies",
      name: "PLACEHOLDER — Cleaning Supply",
      description: "Product details coming soon.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-filter-1",
      category: "Filters",
      name: "PLACEHOLDER — Filter",
      description: "Product details coming soon.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-equipment-1",
      category: "Equipment",
      name: "PLACEHOLDER — Equipment",
      description: "Product details coming soon.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-accessory-1",
      category: "Accessories",
      name: "PLACEHOLDER — Accessory",
      description: "Product details coming soon.",
      price: null,
      image: null,
    },
  ],
  es: [
    {
      id: "placeholder-chemical-1",
      category: "Chemicals",
      name: "MARCADOR DE POSICIÓN — Químico para Alberca",
      description: "Detalles del producto próximamente.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-cleaning-1",
      category: "Cleaning Supplies",
      name: "MARCADOR DE POSICIÓN — Insumo de Limpieza",
      description: "Detalles del producto próximamente.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-filter-1",
      category: "Filters",
      name: "MARCADOR DE POSICIÓN — Filtro",
      description: "Detalles del producto próximamente.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-equipment-1",
      category: "Equipment",
      name: "MARCADOR DE POSICIÓN — Equipo",
      description: "Detalles del producto próximamente.",
      price: null,
      image: null,
    },
    {
      id: "placeholder-accessory-1",
      category: "Accessories",
      name: "MARCADOR DE POSICIÓN — Accesorio",
      description: "Detalles del producto próximamente.",
      price: null,
      image: null,
    },
  ],
};
