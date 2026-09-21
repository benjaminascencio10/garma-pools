import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { constructionCategories } from "@/data/construction";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

const galleryPhotos = [
  { key: "excavation", src: "/images/construction-excavation.jpg" },
  { key: "rebarPlumbing", src: "/images/construction-rebar-plumbing.jpg" },
  { key: "plaster", src: "/images/construction-plaster.jpg" },
  { key: "interiorFinish", src: "/images/construction-interior-finish.jpg" },
] as const;

export function ConstructionSection({ locale }: { locale: Locale }) {
  const t = ui[locale].construction;

  return (
    <section id="construction" className="bg-navy-900 py-20 text-white sm:py-24">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.2em] text-pool-100 uppercase">
              {t.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h2>
            <p className="max-w-lg text-white/80">{t.description}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {constructionCategories[locale].map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-bold">{category.name}</p>
                  <p className="mt-1 text-xs text-white/60">{category.description}</p>
                  {!category.confirmed && (
                    <p className="mt-2 text-[10px] font-semibold tracking-wide text-sand-400 uppercase">
                      {t.unconfirmedBadge}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <a
              href="#quote"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-pool-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-pool-400"
            >
              {t.ctaLabel}
            </a>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-full">
            <Image
              src="/images/construction-showcase.jpg"
              alt={t.showcaseAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-extrabold text-white/90">{t.galleryTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPhotos.map((photo) => {
              const info = t.gallery[photo.key];
              return (
                <div key={photo.key} className="flex flex-col gap-2">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={photo.src}
                      alt={info.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-white/70">{info.caption}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
