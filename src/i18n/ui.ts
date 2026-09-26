import type { Locale } from "@/i18n/locale";

interface GalleryPhoto {
  caption: string;
  alt: string;
}

export interface UiText {
  nav: {
    links: { label: string; href: string }[];
    getQuote: string;
    languageSwitchLabel: string; // label of the *other* language, e.g. "ES" on the English site
    languageSwitchHref: string;
  };
  hero: {
    servingPrefix: string; // combined with serviceRegion: `${servingPrefix} ${serviceRegion}`
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
  };
  quoteWizard: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabels: [string, string, string];
    step1Title: string;
    step2TitlePrefix: string;
    serviceSelectedLabel: string;
    continueLabel: string;
    backLabel: string;
    selectPlaceholder: string;
    step3Title: string;
    contactLabels: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
    };
    submitLabel: string;
    sendingLabel: string;
    requiredError: string;
    emailError: string;
    thankYouTitle: string;
    thankYouBody: string;
    callButtonLabel: string;
    backHomeLabel: string;
  };
  quickQuote: {
    eyebrow: string;
    title: string;
    description: string;
    calculatorTitle: string;
    poolSizeLabel: string;
    frequencyLabel: string;
    estimatedQuoteLabel: string;
    perMonthSuffix: string;
    customQuoteLabel: string;
    helperWithPrice: string;
    helperWithoutPrice: string;
    ctaLabel: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
  };
  construction: {
    eyebrow: string;
    title: string;
    description: string;
    unconfirmedBadge: string;
    ctaLabel: string;
    showcaseAlt: string;
    galleryTitle: string;
    gallery: {
      excavation: GalleryPhoto;
      rebarPlumbing: GalleryPhoto;
      plaster: GalleryPhoto;
      interiorFinish: GalleryPhoto;
    };
  };
  maintenance: {
    photoPlaceholder: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    priceUnavailable: string;
    contactCta: string;
    photoPlaceholderSuffix: string; // `${category} ${photoPlaceholderSuffix}`
  };
  serviceArea: {
    eyebrow: string;
    titlePrefix: string; // combined with serviceRegion
    mapAriaLabel: string;
    legendConfirmed: string;
    legendUnconfirmed: string;
    unconfirmedFootnote: string;
    unconfirmedTooltip: string;
  };
  cta: {
    title: string;
    description: string;
    getQuote: string;
    callPrefix: string; // `${callPrefix} ${phone}`
  };
  footer: {
    links: { label: string; href: string }[];
    socialUnavailable: string; // suffix for aria-label
    rightsReserved: string;
  };
  stickyCta: {
    callPrefix: string;
    getQuote: string;
  };
  photoPlaceholderLabel: string; // generic "Photo placeholder" caption
}

export const ui: Record<Locale, UiText> = {
  en: {
    nav: {
      links: [
        { label: "Construction", href: "#construction" },
        { label: "Maintenance", href: "#maintenance" },
        { label: "Products", href: "#products" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Service Area", href: "#service-area" },
        { label: "Contact", href: "#contact" },
      ],
      getQuote: "Get a Quote",
      languageSwitchLabel: "ES",
      languageSwitchHref: "/es",
    },
    hero: {
      servingPrefix: "Serving the",
      title: "Pool Construction & Maintenance",
      description:
        "From building your dream pool to keeping it crystal clear, Garma Pools helps homeowners maintain and enjoy their pools year-round.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call Now",
      photoAlt: "Completed residential pool and spa built by Garma Pools",
    },
    services: {
      eyebrow: "What We Do",
      title: "Everything your pool needs, in one place",
      description:
        "Whether you're starting a new project or keeping an existing pool in shape, Garma Pools has you covered.",
    },
    quoteWizard: {
      eyebrow: "Get Started",
      title: "Get Your Pool Quote",
      description: "Tell us what you need and we'll help you find the right solution.",
      stepLabels: ["Service", "Pool Details", "Contact Info"],
      step1Title: "Step 1 — What do you need?",
      step2TitlePrefix: "Step 2 — Tell us about your pool",
      serviceSelectedLabel: "Service selected:",
      continueLabel: "Continue",
      backLabel: "Back",
      selectPlaceholder: "Select...",
      step3Title: "Step 3 — Your contact information",
      contactLabels: {
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone",
        email: "Email",
      },
      submitLabel: "Request My Quote",
      sendingLabel: "Sending...",
      requiredError: "Required",
      emailError: "Enter a valid email",
      thankYouTitle: "Thank You!",
      thankYouBody:
        "Your request has been received. A Garma Pools representative will contact you to discuss your project.",
      callButtonLabel: "Call Garma Pools",
      backHomeLabel: "Back to Home",
    },
    quickQuote: {
      eyebrow: "Quick Quote",
      title: "Find the Right Service for Your Pool",
      description: "Not sure where to start? Pick what fits your pool best.",
      calculatorTitle: "Maintenance estimate calculator",
      poolSizeLabel: "Pool size",
      frequencyLabel: "Frequency",
      estimatedQuoteLabel: "Estimated quote",
      perMonthSuffix: "/mo",
      customQuoteLabel: "Request a Custom Quote",
      helperWithPrice: "Estimated price — final quote confirmed by Garma Pools.",
      helperWithoutPrice:
        "Pricing for this option isn't published yet. Request a quote and we'll follow up.",
      ctaLabel: "Get My Quote",
    },
    howItWorks: {
      eyebrow: "Simple Process",
      title: "How It Works",
    },
    construction: {
      eyebrow: "Pool Construction",
      title: "Build Your Dream Pool",
      description: "Transform your backyard into a place to relax, entertain and enjoy with family.",
      unconfirmedBadge: "Not yet confirmed with Garma Pools",
      ctaLabel: "Start Your Pool Project",
      showcaseAlt: "Completed pool shell with travertine decking, ready to fill",
      galleryTitle: "From the ground up",
      gallery: {
        excavation: {
          caption: "Excavation",
          alt: "Pool excavation and layout at the start of a Garma Pools build",
        },
        rebarPlumbing: {
          caption: "Steel & Plumbing",
          alt: "Rebar structure and plumbing installed before the concrete pour",
        },
        plaster: {
          caption: "Plaster Finish",
          alt: "Garma Pools crew applying the plaster finish to a pool shell",
        },
        interiorFinish: {
          caption: "Interior & Tile Finish",
          alt: "Finished pool interior and waterline tile, ready to fill",
        },
      },
    },
    maintenance: {
      photoPlaceholder: "Pool technician performing maintenance / water testing",
      eyebrow: "Pool Maintenance",
      title: "Keep Your Pool Ready to Enjoy",
      description:
        "Professional, consistent service so your pool stays clean, balanced, and ready whenever you want to use it.",
      ctaLabel: "Request Maintenance",
    },
    products: {
      eyebrow: "Pool Care Products",
      title: "Pool Care Products",
      description:
        "A catalog is coming soon. Every product card below is a placeholder, ready to be replaced with real Garma Pools inventory.",
      priceUnavailable: "Price not yet available",
      contactCta: "Contact Us",
      photoPlaceholderSuffix: "product photo",
    },
    serviceArea: {
      eyebrow: "Where We Work",
      titlePrefix: "Serving the",
      mapAriaLabel: "Heat map of Garma Pools service area coverage",
      legendConfirmed: "Confirmed coverage",
      legendUnconfirmed: "Coverage not yet confirmed",
      unconfirmedFootnote:
        "Coverage by city is not yet confirmed. Contact us to check availability in your area.",
      unconfirmedTooltip: "Coverage not yet confirmed",
    },
    cta: {
      title: "Ready to Take Care of Your Pool?",
      description:
        "Whether you're building a new pool or need reliable maintenance, let's talk about your project.",
      getQuote: "Get a Quote",
      callPrefix: "Call",
    },
    footer: {
      links: [
        { label: "Home", href: "#top" },
        { label: "Pool Construction", href: "#construction" },
        { label: "Maintenance", href: "#maintenance" },
        { label: "Products", href: "#products" },
        { label: "Get a Quote", href: "#quote" },
        { label: "Contact", href: "#contact" },
      ],
      socialUnavailable: "link not yet available",
      rightsReserved: "All rights reserved.",
    },
    stickyCta: {
      callPrefix: "Call",
      getQuote: "Get a Quote",
    },
    photoPlaceholderLabel: "Photo placeholder",
  },
  es: {
    nav: {
      links: [
        { label: "Construcción", href: "#construction" },
        { label: "Mantenimiento", href: "#maintenance" },
        { label: "Productos", href: "#products" },
        { label: "Cómo Funciona", href: "#how-it-works" },
        { label: "Área de Servicio", href: "#service-area" },
        { label: "Contacto", href: "#contact" },
      ],
      getQuote: "Cotizar",
      languageSwitchLabel: "EN",
      languageSwitchHref: "/",
    },
    hero: {
      servingPrefix: "Atendiendo",
      title: "Construcción y Mantenimiento de Albercas",
      description:
        "Desde construir la alberca de tus sueños hasta mantenerla cristalina, Garma Pools ayuda a los dueños de casa a mantener y disfrutar sus albercas todo el año.",
      ctaPrimary: "Cotización Gratis",
      ctaSecondary: "Llamar Ahora",
      photoAlt: "Alberca residencial y spa terminados, construidos por Garma Pools",
    },
    services: {
      eyebrow: "Qué Hacemos",
      title: "Todo lo que tu alberca necesita, en un solo lugar",
      description:
        "Ya sea que empieces un proyecto nuevo o mantengas una alberca existente, Garma Pools te tiene cubierto.",
    },
    quoteWizard: {
      eyebrow: "Empieza Aquí",
      title: "Cotiza Tu Alberca",
      description: "Cuéntanos qué necesitas y te ayudaremos a encontrar la solución adecuada.",
      stepLabels: ["Servicio", "Detalles de la Alberca", "Información de Contacto"],
      step1Title: "Paso 1 — ¿Qué necesitas?",
      step2TitlePrefix: "Paso 2 — Cuéntanos sobre tu alberca",
      serviceSelectedLabel: "Servicio seleccionado:",
      continueLabel: "Continuar",
      backLabel: "Atrás",
      selectPlaceholder: "Selecciona...",
      step3Title: "Paso 3 — Tu información de contacto",
      contactLabels: {
        firstName: "Nombre",
        lastName: "Apellido",
        phone: "Teléfono",
        email: "Correo Electrónico",
      },
      submitLabel: "Solicitar Mi Cotización",
      sendingLabel: "Enviando...",
      requiredError: "Requerido",
      emailError: "Ingresa un correo válido",
      thankYouTitle: "¡Gracias!",
      thankYouBody:
        "Tu solicitud fue recibida. Un representante de Garma Pools se pondrá en contacto contigo para hablar sobre tu proyecto.",
      callButtonLabel: "Llamar a Garma Pools",
      backHomeLabel: "Volver al Inicio",
    },
    quickQuote: {
      eyebrow: "Cotización Rápida",
      title: "Encuentra el Servicio Adecuado para Tu Alberca",
      description: "¿No sabes por dónde empezar? Elige lo que mejor se ajuste a tu alberca.",
      calculatorTitle: "Calculadora de estimado de mantenimiento",
      poolSizeLabel: "Tamaño de la alberca",
      frequencyLabel: "Frecuencia",
      estimatedQuoteLabel: "Cotización estimada",
      perMonthSuffix: "/mes",
      customQuoteLabel: "Solicitar Cotización Personalizada",
      helperWithPrice: "Precio estimado — cotización final confirmada por Garma Pools.",
      helperWithoutPrice:
        "El precio de esta opción aún no está publicado. Solicita una cotización y te contactaremos.",
      ctaLabel: "Obtener Mi Cotización",
    },
    howItWorks: {
      eyebrow: "Proceso Simple",
      title: "Cómo Funciona",
    },
    construction: {
      eyebrow: "Construcción de Albercas",
      title: "Construye la Alberca de Tus Sueños",
      description: "Transforma tu patio en un lugar para relajarte, convivir y disfrutar en familia.",
      unconfirmedBadge: "Aún no confirmado con Garma Pools",
      ctaLabel: "Inicia Tu Proyecto de Alberca",
      showcaseAlt: "Alberca terminada con deck de travertino, lista para llenarse",
      galleryTitle: "Desde cero hasta el resultado final",
      gallery: {
        excavation: {
          caption: "Excavación",
          alt: "Excavación y trazo de una alberca al inicio de un proyecto de Garma Pools",
        },
        rebarPlumbing: {
          caption: "Acero y Plomería",
          alt: "Estructura de varilla y plomería instalada antes de colar el concreto",
        },
        plaster: {
          caption: "Acabado de Plaster",
          alt: "Equipo de Garma Pools aplicando el acabado de plaster en una alberca",
        },
        interiorFinish: {
          caption: "Interior y Azulejo",
          alt: "Interior de alberca terminado con azulejo en la línea de agua, lista para llenarse",
        },
      },
    },
    maintenance: {
      photoPlaceholder: "Técnico de albercas realizando mantenimiento / prueba de agua",
      eyebrow: "Mantenimiento de Albercas",
      title: "Mantén Tu Alberca Lista para Disfrutar",
      description:
        "Servicio profesional y constante para que tu alberca se mantenga limpia, balanceada y lista cuando quieras usarla.",
      ctaLabel: "Solicitar Mantenimiento",
    },
    products: {
      eyebrow: "Productos para Alberca",
      title: "Productos para el Cuidado de tu Alberca",
      description:
        "El catálogo estará disponible pronto. Cada tarjeta de producto de abajo es un marcador de posición, lista para reemplazarse con el inventario real de Garma Pools.",
      priceUnavailable: "Precio no disponible aún",
      contactCta: "Contáctanos",
      photoPlaceholderSuffix: "foto del producto",
    },
    serviceArea: {
      eyebrow: "Dónde Trabajamos",
      titlePrefix: "Atendiendo",
      mapAriaLabel: "Mapa de calor de la cobertura de servicio de Garma Pools",
      legendConfirmed: "Cobertura confirmada",
      legendUnconfirmed: "Cobertura aún no confirmada",
      unconfirmedFootnote:
        "La cobertura por ciudad aún no está confirmada. Contáctanos para verificar disponibilidad en tu área.",
      unconfirmedTooltip: "Cobertura aún no confirmada",
    },
    cta: {
      title: "¿Listo para Cuidar Tu Alberca?",
      description:
        "Ya sea que estés construyendo una alberca nueva o necesites mantenimiento confiable, hablemos de tu proyecto.",
      getQuote: "Cotizar",
      callPrefix: "Llamar",
    },
    footer: {
      links: [
        { label: "Inicio", href: "#top" },
        { label: "Construcción de Albercas", href: "#construction" },
        { label: "Mantenimiento", href: "#maintenance" },
        { label: "Productos", href: "#products" },
        { label: "Cotizar", href: "#quote" },
        { label: "Contacto", href: "#contact" },
      ],
      socialUnavailable: "enlace no disponible aún",
      rightsReserved: "Todos los derechos reservados.",
    },
    stickyCta: {
      callPrefix: "Llamar",
      getQuote: "Cotizar",
    },
    photoPlaceholderLabel: "Foto marcador de posición",
  },
};
