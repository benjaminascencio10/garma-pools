import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/ui/SocialIcons";
import { company, companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import { quotePath } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

function isPlaceholder(value: string) {
  return /placeholder|marcador de posición/i.test(value);
}

export function CTASection({ locale }: { locale: Locale }) {
  const t = ui[locale].cta;
  const text = companyText[locale];
  const details = [
    { label: t.phoneLabel, value: company.phone, href: company.phoneHref },
    { label: t.regionLabel, value: text.serviceRegion },
    { label: t.addressLabel, value: text.address },
    { label: t.emailLabel, value: text.email },
    // Rows still waiting on real business details stay hidden from visitors.
  ].filter((detail) => !isPlaceholder(detail.value));

  return (
    <section id="contact" className="bg-sand-50 py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-xl font-serif text-4xl leading-tight font-medium tracking-tight text-balance text-navy-900 sm:text-5xl">
            {t.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-navy-700">{t.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={quotePath(locale)} className="btn btn-primary">
              {t.getQuote}
            </Link>
            <a href={company.phoneHref} className="btn btn-line text-navy-900">
              <Phone className="h-4 w-4" aria-hidden />
              {t.callPrefix} {company.phone}
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-navy-950 p-7 text-white shadow-[0_28px_60px_-36px_rgba(7,20,34,0.75)] sm:p-9">
          <dl className="flex flex-col gap-5">
            {details.map((detail) => {
              const placeholder = isPlaceholder(detail.value);
              return (
                <div key={detail.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <dt className="text-[0.68rem] font-semibold tracking-[0.16em] text-pool-400 uppercase">
                    {detail.label}
                  </dt>
                  <dd className={`mt-1.5 ${detail.href ? "font-serif text-2xl" : "text-base"} ${placeholder ? "text-sm text-sand-400 italic" : "text-white"}`}>
                    {detail.href && !placeholder ? (
                      <a href={detail.href} className="font-semibold hover:text-pool-100">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <FacebookIcon className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
