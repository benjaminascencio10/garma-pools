import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { productCategories, productCategoryLabels, products } from "@/data/products";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function ProductsSection({ locale }: { locale: Locale }) {
  const t = ui[locale].products;
  const categoryLabels = productCategoryLabels[locale];

  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="flex flex-wrap justify-center gap-2">
          {productCategories[locale].map((category) => (
            <span
              key={category}
              className="rounded-full border border-navy-900/15 px-4 py-1.5 text-xs font-bold text-navy-700"
            >
              {categoryLabels[category]}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products[locale].map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-3 rounded-2xl border border-navy-900/10 p-4"
            >
              <PlaceholderImage
                label={`${categoryLabels[product.category]} ${t.photoPlaceholderSuffix}`}
                caption={ui[locale].photoPlaceholderLabel}
                className="h-32 w-full"
              />
              <span className="text-[10px] font-bold tracking-wide text-pool-600 uppercase">
                {categoryLabels[product.category]}
              </span>
              <p className="text-sm font-bold text-navy-900">{product.name}</p>
              <p className="flex-1 text-xs text-navy-700/70">{product.description}</p>
              <p className="text-sm font-bold text-navy-900">
                {product.price ?? t.priceUnavailable}
              </p>
              <a
                href={`${company.phoneHref}`}
                className="rounded-full bg-pool-500 px-4 py-2.5 text-center text-xs font-bold text-navy-950 hover:bg-pool-400"
              >
                {t.contactCta}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
