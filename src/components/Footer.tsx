import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/ui/SocialIcons";
import { company, companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale].footer;
  const text = companyText[locale];

  return (
    <footer className="bg-navy-950 py-14 text-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt={company.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl"
              />
              <div>
                <p className="text-xl font-extrabold">{company.name.toUpperCase()}</p>
                <p className="text-sm font-medium text-pool-100">{text.tagline}</p>
              </div>
            </div>
            <a
              href={company.phoneHref}
              className="mt-3 flex items-center gap-2 text-sm font-bold text-white/85 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <a
              href="/finance"
              className="rounded-full bg-pool-500 px-5 py-2.5 text-sm font-bold whitespace-nowrap text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-pool-400"
            >
              {t.financingButtonLabel}
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {company.name}. {t.rightsReserved}
        </div>
      </Container>
    </footer>
  );
}
