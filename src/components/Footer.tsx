import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { company, companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

// Social links are placeholders — no real Garma Pools profile URLs are
// known yet. Fill in `company.social` once confirmed and these will
// automatically link out instead of rendering as disabled icons.
const socialIconComponents = [
  { label: "Facebook", icon: FacebookIcon, href: company.social.facebook },
  { label: "Instagram", icon: InstagramIcon, href: company.social.instagram },
  { label: "TikTok", icon: TikTokIcon, href: company.social.tiktok },
];

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
                className="h-14 w-14 rounded-full"
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

          <div className="flex gap-3">
            {socialIconComponents.map(({ label, icon: Icon, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={`${label} (${t.socialUnavailable})`}
                  className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-white/30"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {company.name}. {t.rightsReserved}
        </div>
      </Container>
    </footer>
  );
}
