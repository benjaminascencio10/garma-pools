"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import { homePath, pageHref } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function Navbar({ locale, overlay = false }: { locale: Locale; overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const t = ui[locale];
  const home = homePath(locale);
  const solid = !overlay || scrolled || open;

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  function alternateHref() {
    if (locale === "en") return pathname === "/" ? "/es" : `/es${pathname}`;
    if (pathname === "/es") return "/";
    return pathname.replace(/^\/es/, "") || "/";
  }

  const quoteHref = pathname.endsWith("/quote") ? "#quote" : pageHref(locale, "/quote");
  const linkClass = solid
    ? "text-navy-800 hover:text-pool-600"
    : "text-white hover:text-pool-100";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-navy-900/10 bg-white/95 shadow-[0_10px_30px_-22px_rgba(7,20,34,0.7)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href={home} className="shrink-0" aria-label={company.name}>
            <Image
              src={solid ? "/images/logo-horizontal-ink.png" : "/images/logo-horizontal.png"}
              alt=""
              width={2048}
              height={683}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label={company.name}>
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={pageHref(locale, link.href)}
                className={`text-sm font-semibold tracking-wide transition ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={company.phoneHref}
              className={`hidden items-center gap-2 text-sm font-semibold whitespace-nowrap lg:flex ${linkClass}`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
            <Link
              href={alternateHref()}
              hrefLang={locale === "en" ? "es" : "en"}
              onClick={() => setOpen(false)}
              className={`rounded-full border px-3 py-2 text-xs font-bold tracking-wide ${
                solid
                  ? "border-navy-900/15 text-navy-800 hover:border-navy-900/40"
                  : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              {t.nav.languageSwitchLabel}
            </Link>
            <Link href={quoteHref} className={`btn min-h-11 px-5 ${solid ? "btn-primary" : "btn-light"}`}>
              {t.nav.getQuote}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={alternateHref()}
              hrefLang={locale === "en" ? "es" : "en"}
              onClick={() => setOpen(false)}
              className={`rounded-full border px-3 py-2 text-xs font-bold ${
                solid ? "border-navy-900/15 text-navy-800" : "border-white/50 text-white"
              }`}
            >
              {t.nav.languageSwitchLabel}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                solid ? "text-navy-900" : "text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>

        {open && (
          <nav id="mobile-nav" className="border-t border-navy-900/10 bg-white lg:hidden" aria-label={company.name}>
            <Container className="flex max-h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto py-4">
              {t.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={pageHref(locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-sand-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <Link href={quoteHref} onClick={() => setOpen(false)} className="btn btn-primary">
                  {t.nav.getQuote}
                </Link>
                <a href={company.phoneHref} className="btn btn-line text-navy-900">
                  <Phone className="h-4 w-4" aria-hidden />
                  {t.cta.callPrefix} {company.phone}
                </a>
              </div>
            </Container>
          </nav>
        )}
      </header>
      {!overlay && <div className="h-20" />}
    </>
  );
}
