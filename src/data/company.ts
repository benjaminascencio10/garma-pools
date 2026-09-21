// Single source of truth for confirmed Garma Pools business facts.
// Only add real values here once they are confirmed by the business owner.

export const company = {
  name: "Garma Pools",
  tagline: "Construction & Maintenance",
  heroHeadline: "Your Pool. Your Backyard. Our Expertise.",
  phone: "956-254-3142",
  phoneHref: "tel:+19562543142",
  serviceRegion: "Rio Grande Valley, Texas",

  // TODO: replace with confirmed values once provided by Garma Pools.
  address: "PLACEHOLDER — Garma Pools address not yet provided",
  email: "PLACEHOLDER — Garma Pools email not yet provided",

  social: {
    // TODO: add real profile URLs once confirmed. Left empty on purpose.
    facebook: "",
    instagram: "",
    tiktok: "",
  },
} as const;
