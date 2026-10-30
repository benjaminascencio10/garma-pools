import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/ui/SocialIcons";
import { company, companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import { pageHref } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale].footer;
  const text = companyText[locale];

  return (
    <footer className="bg-navy-950 py-16 text-white">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_auto]">
          <div>
            <Link href={pageHref(locale, "#top")} className="inline-flex">
              <Image
                src="/images/logo-horizontal.png"
                alt={company.name}
                width={2048}
                height={683}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{text.tagline}</p>
            <p className="mt-2 text-sm text-white/55">{text.serviceRegion}</p>
            <a
              href={company.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-pool-100"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
          </div>

          <nav className="grid content-start gap-2" aria-label={company.name}>
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={pageHref(locale, link.href)}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-4">
            <Link href={pageHref(locale, "/finance")} className="btn btn-light min-h-11">
              {t.financingButtonLabel}
            </Link>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-white/40 hover:bg-white/10"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} {company.name}. {t.rightsReserved}
        </div>
      </Container>
    </footer>
  );
}
