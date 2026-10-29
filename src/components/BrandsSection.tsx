import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { brands } from "@/data/brands";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function BrandsSection({ locale }: { locale: Locale }) {
  const t = ui[locale].brands;

  return (
    <section className="border-y border-navy-900/8 bg-sand-50 py-16 sm:py-20" aria-label={t.title}>
      <Container className="flex flex-col items-center gap-10">
        <h2 className="text-[0.72rem] font-semibold tracking-[0.22em] text-pool-600 uppercase">{t.title}</h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <li key={brand.name} className="relative h-16 w-36 sm:h-20 sm:w-44">
              <Image
                src={brand.logo}
                alt={`${brand.name} ${t.logoAltSuffix}`}
                fill
                sizes="176px"
                className="object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
