export type FinancingOptionId = "lyon" | "hfs";

export interface FinancingOption {
  id: FinancingOptionId;
  name: string;
  applyUrl: string;
}

export const financingOptions: FinancingOption[] = [
  {
    id: "lyon",
    name: "Lyon Financial",
    applyUrl: "https://www.lyonfinancial.net/apply/?lid=11-21004",
  },
  {
    id: "hfs",
    name: "HFS Financial",
    applyUrl: "https://www.hfsfinancial.net/promo/661e7e6d08c5854bfed8752f/",
  },
];
