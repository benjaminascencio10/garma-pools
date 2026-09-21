import type { LucideIcon } from "lucide-react";
import { Droplets, FlaskConical, ClipboardCheck, CalendarClock } from "lucide-react";

export interface MaintenanceBenefit {
  icon: LucideIcon;
  title: string;
}

export const maintenanceBenefits: MaintenanceBenefit[] = [
  { icon: Droplets, title: "Clean Water" },
  { icon: FlaskConical, title: "Proper Chemical Balance" },
  { icon: ClipboardCheck, title: "Equipment Checks" },
  { icon: CalendarClock, title: "Regular Service" },
];
