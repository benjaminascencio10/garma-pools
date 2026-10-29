"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import { pageHref } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function StickyMobileCTA({ locale }: { locale: Locale }) {
  const t = ui[locale].stickyCta;
  const pathname = usePathname() || "/";
  const quoteHref = pathname.endsWith("/quote") ? "#quote" : pageHref(locale, "/quote");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-white/95 p-3 shadow-[0_-12px_30px_-18px_rgba(7,20,34,0.45)] backdrop-blur-md lg:hidden">
      <div className="flex gap-2">
        <a href={company.phoneHref} className="btn btn-line min-h-12 flex-1 px-3 text-navy-900">
          <Phone className="h-4 w-4" aria-hidden />
          {t.callPrefix}
        </a>
        <Link href={quoteHref} className="btn btn-primary min-h-12 flex-1 px-3">
          {t.getQuote}
        </Link>
      </div>
    </div>
  );
}
