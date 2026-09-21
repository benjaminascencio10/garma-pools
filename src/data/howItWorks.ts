import type { Locale } from "@/i18n/locale";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export const howItWorksSteps: Record<Locale, HowItWorksStep[]> = {
  en: [
    {
      number: "01",
      title: "Tell Us What You Need",
      description: "Tell us about your pool and the service you're looking for.",
    },
    {
      number: "02",
      title: "Get Your Quote",
      description: "We'll review your request and prepare the right solution for your pool.",
    },
    {
      number: "03",
      title: "Schedule Your Service",
      description: "Choose a convenient time for your project or maintenance service.",
    },
    {
      number: "04",
      title: "Enjoy Your Pool",
      description: "Leave the work to Garma Pools and enjoy a clean, beautiful pool.",
    },
  ],
  es: [
    {
      number: "01",
      title: "Cuéntanos Qué Necesitas",
      description: "Cuéntanos sobre tu alberca y el servicio que buscas.",
    },
    {
      number: "02",
      title: "Recibe Tu Cotización",
      description: "Revisaremos tu solicitud y prepararemos la solución adecuada para tu alberca.",
    },
    {
      number: "03",
      title: "Agenda Tu Servicio",
      description: "Elige un horario conveniente para tu proyecto o servicio de mantenimiento.",
    },
    {
      number: "04",
      title: "Disfruta Tu Alberca",
      description: "Deja el trabajo a Garma Pools y disfruta una alberca limpia y hermosa.",
    },
  ],
};
