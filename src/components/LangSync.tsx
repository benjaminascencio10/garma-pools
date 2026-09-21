"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The root layout is shared by both `/` (English) and `/es` (Spanish) and
 * can only render a single static `<html lang>` at build time. This keeps
 * the attribute correct for accessibility/screen readers after navigation
 * without introducing a middleware-based locale routing setup.
 */
export function LangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/es") ? "es" : "en";
  }, [pathname]);

  return null;
}
