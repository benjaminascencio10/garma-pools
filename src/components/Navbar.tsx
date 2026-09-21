"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

const navLinks = [
  { label: "Construction", href: "#construction" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-lg font-extrabold tracking-tight text-white">
            {company.name.toUpperCase()}
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-pool-100 uppercase">
            {company.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
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
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
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
                Get a Quote
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {company.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
