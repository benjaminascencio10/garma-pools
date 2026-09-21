export interface ConstructionCategory {
  name: string;
  description: string;
  // Not yet confirmed as an official Garma Pools offering — keep editable
  // here until the business confirms it, per project instructions.
  confirmed: boolean;
}

export const constructionCategories: ConstructionCategory[] = [
  {
    name: "Custom Pools",
    description: "New residential pools designed around your backyard.",
    confirmed: true,
  },
  {
    name: "Pool Remodeling",
    description: "Refresh and update an existing pool.",
    confirmed: false,
  },
  {
    name: "Pool Equipment",
    description: "Pumps, filters, heaters, and automation.",
    confirmed: true,
  },
  {
    name: "Pool Deck / Surroundings",
    description: "Decking and surrounding hardscape for your pool area.",
    confirmed: false,
  },
  {
    name: "Water Features",
    description: "Waterfalls, fountains, and accent lighting.",
    confirmed: false,
  },
];
