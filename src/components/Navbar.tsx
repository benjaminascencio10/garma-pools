"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Navbar({
  locale,
  transparent = true,
}: {
  locale: Locale;
  transparent?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const t = ui[locale];

  // The navbar stays transparent everywhere, on every page, at every
  // scroll position — it never switches to the solid aqua bar. Pass
  // transparent={false} explicitly on a page that needs the solid bar.
  const solid = !transparent;

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-navy-900/10 bg-gradient-to-r from-pool-600 to-pool-400"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-24 items-center justify-between gap-4">
          <a href="#top" className="flex items-center transition hover:scale-105">
            {solid ? (
              <div className="relative h-20 w-28">
                <Image
                  src="/images/logo-full.png"
                  alt={company.name}
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            ) : (
              <Image
                src="/images/logo-horizontal.png"
                alt={company.name}
                width={2048}
                height={683}
                sizes="260px"
                className="h-14 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:h-16"
                priority
              />
            )}
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold whitespace-nowrap transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  solid
                    ? "text-navy-900 after:bg-navy-900 hover:text-navy-950"
                    : "text-white after:bg-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={company.phoneHref}
              className={`flex items-center gap-2 text-sm font-bold whitespace-nowrap transition ${
                solid
                  ? "text-navy-900 hover:text-navy-950"
                  : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:text-white/90"
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
            <a
              href="/quote"
              className={`rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap shadow-sm transition hover:-translate-y-0.5 ${
                solid
                  ? "bg-navy-950 text-white hover:bg-navy-800"
                  : "bg-white text-navy-950 hover:bg-white/90"
              }`}
            >
              {t.nav.getQuote}
            </a>
            <a
              href={t.nav.languageSwitchHref}
              className={`rounded-full border px-3 py-2.5 text-xs font-bold transition ${
                solid
                  ? "border-navy-900/25 text-navy-900 hover:border-navy-900/50 hover:text-navy-950"
                  : "border-white/50 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {t.nav.languageSwitchLabel}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={t.nav.languageSwitchHref}
              className={`rounded-full border px-2.5 py-1.5 text-xs font-bold ${
                solid ? "border-navy-900/25 text-navy-900" : "border-white/50 text-white"
              }`}
            >
              {t.nav.languageSwitchLabel}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                solid ? "text-navy-900" : "text-white"
              }`}
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
      <div className="h-24" />
    </>
  );
}
