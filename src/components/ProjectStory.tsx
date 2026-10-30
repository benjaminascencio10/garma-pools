"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

const INTERVAL_MS = 5500;

export function ProjectStory({ locale }: { locale: Locale }) {
  const t = ui[locale].projects;
  const photos = featuredProject.photos;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, photos.length, reduced, index]);

  function go(next: number) {
    setIndex((next + photos.length) % photos.length);
  }

  const active = photos[index];
  const stage = t.stages[active.stageKey];

  return (
    <div
      className="flex flex-col gap-4"
      role="region"
      aria-roledescription="carousel"
      aria-label={t.carouselLabel}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(index + 1);
        if (event.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy-950 shadow-[0_24px_50px_-32px_rgba(7,20,34,0.65)] sm:aspect-[16/10]">
        {photos.map((photo, photoIndex) => {
          const photoStage = t.stages[photo.stageKey];
          const isActive = photoIndex === index;
          return (
            <Image
              key={photo.src}
              src={photo.src}
              alt={isActive ? photoStage.alt : ""}
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className={`object-cover ${reduced ? "" : "transition-opacity duration-700"} ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            />
          );
        })}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-5 sm:p-7">
          <p className="font-serif text-3xl text-pool-100">0{index + 1}</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-pool-400 uppercase">
            {t.projectLabel} 1
          </p>
          <p className="mt-1 font-serif text-2xl text-white sm:text-3xl">{stage.caption}</p>
        </div>
        {!reduced && !paused && (
          <div className="absolute inset-x-0 top-0 h-1 bg-white/20">
            <div key={index} className="story-progress h-full bg-pool-400" />
          </div>
        )}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-sm transition hover:bg-white"
            aria-label={t.previousLabel}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-sm transition hover:bg-white"
            aria-label={t.nextLabel}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-sm transition hover:bg-white"
              aria-pressed={paused}
              aria-label={paused ? t.playLabel : t.pauseLabel}
            >
              {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo, photoIndex) => {
          const photoStage = t.stages[photo.stageKey];
          const isActive = photoIndex === index;
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(photoIndex)}
              aria-current={isActive ? "true" : undefined}
              aria-label={photoStage.caption}
              className={`overflow-hidden rounded-2xl border-2 transition ${
                isActive ? "border-pool-600" : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <span className="relative block aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </span>
              <span className="block truncate px-2 py-1.5 text-left text-[0.7rem] font-semibold text-navy-800">
                {photoStage.caption}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
