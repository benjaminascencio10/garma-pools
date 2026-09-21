import type { LucideIcon } from "lucide-react";
import { Droplets, FlaskConical, ClipboardCheck, CalendarClock } from "lucide-react";
import type { Locale } from "@/i18n/locale";

export interface MaintenanceBenefit {
  icon: LucideIcon;
  title: string;
}

export const maintenanceBenefits: Record<Locale, MaintenanceBenefit[]> = {
  en: [
    { icon: Droplets, title: "Clean Water" },
    { icon: FlaskConical, title: "Proper Chemical Balance" },
    { icon: ClipboardCheck, title: "Equipment Checks" },
    { icon: CalendarClock, title: "Regular Service" },
  ],
  es: [
    { icon: Droplets, title: "Agua Limpia" },
    { icon: FlaskConical, title: "Balance Químico Adecuado" },
    { icon: ClipboardCheck, title: "Revisión de Equipo" },
    { icon: CalendarClock, title: "Servicio Regular" },
  ],
};
