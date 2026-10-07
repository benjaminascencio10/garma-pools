import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { brands } from "@/data/brands";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function BrandsSection({ locale }: { locale: Locale }) {
  const t = ui[locale].brands;

  return (
    <section className="bg-white py-14">
      <Container className="flex flex-col items-center gap-8">
        <h2 className="text-xs font-bold tracking-[0.2em] text-navy-700/60 uppercase">
          {t.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-12 w-32 sm:h-14 sm:w-40">
              <Image
                src={brand.logo}
                alt={`${brand.name} ${t.logoAltSuffix}`}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
