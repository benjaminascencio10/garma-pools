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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt={company.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl"
            priority
          />
          <span className="hidden text-lg font-extrabold tracking-tight text-white sm:block">
            {company.name.toUpperCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-pool-100"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone}
          </a>
          <a
            href="#quote"
            className="rounded-full bg-pool-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-sm transition hover:bg-pool-400"
          >
            {t.nav.getQuote}
          </a>
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-white/20 px-3 py-2.5 text-xs font-bold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            {t.nav.languageSwitchLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-white/20 px-2.5 py-1.5 text-xs font-bold text-white/80"
          >
            {t.nav.languageSwitchLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-pool-500 px-5 py-3 text-center text-sm font-bold text-navy-950"
              >
                {t.nav.getQuote}
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white"
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
