import type { Locale } from "@/i18n/locale";

const LOCALIZED_PREFIXES = ["/quote", "/finance", "/our-work"];

export function homePath(locale: Locale) {
  return locale === "es" ? "/es" : "/";
}

/** Prefix Spanish routes that have an `/es` counterpart. Hash and phone links pass through. */
export function localizeHref(locale: Locale, href: string) {
  if (locale !== "es" || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("http")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const [path, query] = beforeHash.split("?");

  if (LOCALIZED_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) {
    return `/es${path}${query ? `?${query}` : ""}${hash}`;
  }

  return href;
}

export function quotePath(locale: Locale, service?: string) {
  const base = localizeHref(locale, "/quote");
  return service ? `${base}?service=${encodeURIComponent(service)}` : base;
}

/** Hash links from inner pages go back to the homepage section. */
export function pageHref(locale: Locale, href: string) {
  const localized = localizeHref(locale, href);
  if (localized.startsWith("#")) return `${homePath(locale)}${localized}`;
  return localized;
}
