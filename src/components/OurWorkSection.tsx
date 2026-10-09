import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  featuredProject,
  getProjectsByCategory,
  type ProjectCategory,
} from "@/data/projects";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

const CATEGORY_SLUGS: Record<ProjectCategory, string> = {
  residentialPools: "residential-pools",
  residentialSpas: "residential-spas",
  waterfallFeatures: "waterfall-features",
  commercialPools: "commercial-pools",
};

const CATEGORIES: ProjectCategory[] = [
  "residentialPools",
  "residentialSpas",
  "waterfallFeatures",
  "commercialPools",
];

export function OurWorkSection({ locale }: { locale: Locale }) {
  const t = ui[locale].projects;

  return (
    <section id="our-work" className="bg-sky-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <Reveal className="flex flex-col gap-5">
          <h3 className="text-xs font-bold tracking-[0.2em] text-navy-700/60 uppercase">
            {t.projectLabel} 1
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProject.photos.map((photo) => {
              const stage = t.stages[photo.stageKey];
              return (
                <div key={photo.src} className="flex flex-col gap-2">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={photo.src}
                      alt={stage.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-semibold text-navy-700/70">{stage.caption}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-5">
          <h3 className="text-xs font-bold tracking-[0.2em] text-navy-700/60 uppercase">
            {t.completedProjectsTitle}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => {
              const photos = getProjectsByCategory(category);
              const cover = photos[0];
              return (
                <Link
                  key={category}
                  href={`/our-work/${CATEGORY_SLUGS[category]}`}
                  className="group relative flex h-56 w-full flex-col justify-end overflow-hidden rounded-2xl bg-navy-900 shadow-sm transition hover:shadow-lg"
                >
                  {cover ? (
                    <Image
                      src={cover.image}
                      alt={t.categories[category]}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-900/80">
                      <Camera className="h-10 w-10 text-white/40" aria-hidden />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent transition group-hover:from-navy-950/95" />
                  <span className="relative z-10 p-4 text-sm font-bold text-white">
                    {t.categories[category]}
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
