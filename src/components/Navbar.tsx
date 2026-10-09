"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = ui[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-gradient-to-r from-pool-600 to-pool-400">
      <Container className="flex h-24 items-center justify-between gap-4">
        <a href="#top" className="flex items-center transition hover:scale-105">
          <div className="relative h-24 w-28">
            <Image
              src="/images/logo-full.png"
              alt={company.name}
              fill
              sizes="112px"
              className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold whitespace-nowrap text-navy-900 transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-navy-900 after:transition-all after:duration-300 hover:text-navy-950 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-bold whitespace-nowrap text-navy-900 transition hover:text-navy-950"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone}
          </a>
          <a
            href="/quote"
            className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-bold whitespace-nowrap text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-800"
          >
            {t.nav.getQuote}
          </a>
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-navy-900/25 px-3 py-2.5 text-xs font-bold text-navy-900 transition hover:border-navy-900/50 hover:text-navy-950"
          >
            {t.nav.languageSwitchLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-navy-900/25 px-2.5 py-1.5 text-xs font-bold text-navy-900"
          >
            {t.nav.languageSwitchLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-900"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-navy-900/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-900/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href="/quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-navy-950 px-5 py-3 text-center text-sm font-bold text-white"
              >
                {t.nav.getQuote}
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-navy-900/20 px-5 py-3 text-center text-sm font-bold text-navy-900"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {t.stickyCta.callPrefix} {company.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
