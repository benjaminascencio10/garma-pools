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

export const productCategories: ProductCategory[] = [
  "Chemicals",
  "Cleaning Supplies",
  "Filters",
  "Equipment",
  "Accessories",
];

// Placeholder catalog — no real Garma Pools inventory or pricing exists yet.
// Replace `name`, `description`, `price`, and `image` per product once the
// business provides its real catalog. Structure is ready to connect to an
// ecommerce backend later.
export const products: Product[] = [
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
];
