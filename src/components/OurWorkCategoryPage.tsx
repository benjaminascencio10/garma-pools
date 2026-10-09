import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import { ui } from "@/i18n/ui";
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
      <main className="pb-20 lg:pb-0">
        <section className="bg-sky-50 py-20 sm:py-24">
          <Container className="flex flex-col gap-10">
            <SectionHeading eyebrow={t.eyebrow} title={t.categories[category]} />

            {photos.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative h-72 w-full overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={photo.image}
                      alt={t.categories[category]}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-navy-900/10 bg-white p-12 text-center">
                <p className="text-base font-semibold text-navy-700/70">
                  {t.categories.commercialPoolsComingSoon}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
