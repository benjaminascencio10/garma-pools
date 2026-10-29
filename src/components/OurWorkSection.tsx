import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectStory } from "@/components/ProjectStory";
import { getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import { ui } from "@/i18n/ui";
import { localizeHref } from "@/lib/paths";
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
    <section id="our-work" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
              align="left"
            />
          </Reveal>
          <ProjectStory locale={locale} />
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[0.72rem] font-semibold tracking-[0.22em] text-pool-600 uppercase">
            {t.completedProjectsTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => {
              const photos = getProjectsByCategory(category);
              const cover = photos[0];
              return (
                <Link
                  key={category}
                  href={localizeHref(locale, `/our-work/${CATEGORY_SLUGS[category]}`)}
                  className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-[1.5rem] bg-navy-900"
                >
                  {cover ? (
                    <Image
                      src={cover.image}
                      alt={t.categories[category]}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-10 w-10 text-white/35" aria-hidden />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                  <span className="relative z-10 p-5 font-serif text-2xl text-white">
                    {t.categories[category]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
