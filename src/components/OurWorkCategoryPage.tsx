import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import { ui } from "@/i18n/ui";
import { pageHref } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function OurWorkCategoryPage({
  locale,
  category,
}: {
  locale: Locale;
  category: ProjectCategory;
}) {
  const t = ui[locale].projects;
  const photos = getProjectsByCategory(category);

  return (
    <>
      <Navbar locale={locale} />
      <main id="main" className="pb-24 lg:pb-0">
        <section className="bg-sand-50 py-20 sm:py-28">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Link
                href={pageHref(locale, "#our-work")}
                className="w-fit text-sm font-semibold text-pool-600 hover:text-navy-900"
              >
                {t.eyebrow}
              </Link>
              <SectionHeading title={t.categories[category]} align="left" />
            </div>

            {photos.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative h-80 w-full overflow-hidden rounded-[1.5rem] bg-navy-900 shadow-[0_20px_40px_-28px_rgba(7,20,34,0.6)]"
                  >
                    <Image
                      src={photo.image}
                      alt={t.categories[category]}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-navy-900/10 bg-white p-12 text-center">
                <p className="text-base font-semibold text-navy-700">
                  {t.categories.commercialPoolsComingSoon}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer locale={locale} />
      <StickyMobileCTA locale={locale} />
    </>
  );
}
