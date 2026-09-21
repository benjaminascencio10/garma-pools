export type PoolSize = "Small" | "Medium" | "Large";
export type Frequency = "Weekly" | "Bi-weekly" | "One-time";

// No real Garma Pools pricing exists yet. These are left as `null` on
// purpose — the UI always shows "Request a custom quote" instead of a
// dollar figure. Once real prices are provided, fill in this table (in USD)
// and the calculator will display them automatically.
export const maintenancePriceTable: Record<PoolSize, Record<Frequency, number | null>> = {
  Small: { Weekly: null, "Bi-weekly": null, "One-time": null },
  Medium: { Weekly: null, "Bi-weekly": null, "One-time": null },
  Large: { Weekly: null, "Bi-weekly": null, "One-time": null },
};

export interface QuickQuoteCard {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const quickQuoteCards: QuickQuoteCard[] = [
  {
    id: "monthly-maintenance",
    title: "Monthly Maintenance",
    description: "Ongoing cleaning and chemical balance on a schedule.",
    href: "#quote",
  },
  {
    id: "one-time-cleaning",
    title: "One-Time Cleaning",
    description: "A single visit to get your pool back in shape.",
    href: "#quote",
  },
  {
    id: "pool-construction",
    title: "Pool Construction",
    description: "Start planning your new residential pool.",
    href: "#quote",
  },
  {
    id: "repair-equipment",
    title: "Repair & Equipment",
    description: "Fix an issue or replace pool equipment.",
    href: "#quote",
  },
  {
    id: "pool-products",
    title: "Pool Products",
    description: "Chemicals and supplies for your pool.",
    href: "#products",
  },
];
