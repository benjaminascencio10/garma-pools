"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname() || "/";
  const label = pathname.startsWith("/es") ? "Saltar al contenido" : "Skip to content";

  return (
    <a href="#main" className="skip-link">
      {label}
    </a>
  );
}
