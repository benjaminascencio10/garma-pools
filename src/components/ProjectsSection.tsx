import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = ui[locale].projects;

  return (
    <section id="projects" className="bg-sky-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col gap-5">
            <h3 className="text-xs font-bold tracking-[0.2em] text-navy-700/60 uppercase">
              {t.projectLabel} {index + 1}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.photos.map((photo) => {
                const stage = t.stages[photo.stageKey];
                return (
                  <div key={photo.src} className="flex flex-col gap-2">
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={photo.src}
                        alt={stage.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-navy-700/70">
                      {stage.caption}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
