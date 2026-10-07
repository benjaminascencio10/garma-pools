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
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/20">
      {/* Light blue water background — Option 1 (exact mockup style) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/navbar-water-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft overlay only for slight text readability, no heavy dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
      </div>

      <Container className="flex h-24 items-center justify-between gap-4">
        {/* New logo */}
        <a href="#top" className="flex items-center shrink-0">
          <div className="relative h-16 w-40 sm:h-[72px] sm:w-44">
            <Image
              src="/images/logo-garmapools.png"
              alt={company.name}
              fill
              sizes="176px"
              className="object-contain object-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
              priority
            />
          </div>
        </a>

        {/* Desktop nav links — current links kept */}
        <nav className="hidden items-center gap-5 lg:flex">
          {t.nav.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold whitespace-nowrap text-white transition hover:text-white/90 ${
                index === 0
                  ? "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-pool-400"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-bold whitespace-nowrap text-white hover:text-pool-100"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone}
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-pool-500 px-5 py-2.5 text-sm font-bold whitespace-nowrap text-navy-950 shadow-md transition hover:bg-pool-400"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {t.nav.getQuote}
          </a>
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-white/30 px-3 py-2.5 text-xs font-bold text-white/90 transition hover:border-white/50 hover:text-white"
          >
            {t.nav.languageSwitchLabel}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={t.nav.languageSwitchHref}
            className="rounded-full border border-white/30 px-2.5 py-1.5 text-xs font-bold text-white/90"
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

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 bg-pool-600/95 backdrop-blur-sm lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-pool-600"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {t.nav.getQuote}
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-center text-sm font-bold text-white"
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
