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
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-20 w-48 sm:h-24 sm:w-56">
              <Image
                src={brand.logo}
                alt={`${brand.name} ${t.logoAltSuffix}`}
                fill
                sizes="224px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
