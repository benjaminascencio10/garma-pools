"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  quickQuoteCards,
  maintenancePriceTable,
  poolSizes,
  frequencies,
  poolSizeLabels,
  frequencyLabels,
  type PoolSize,
  type Frequency,
} from "@/data/quickQuote";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function QuickQuoteCalculator({ locale }: { locale: Locale }) {
  const t = ui[locale].quickQuote;
  const [poolSize, setPoolSize] = useState<PoolSize>("Medium");
  const [frequency, setFrequency] = useState<Frequency>("Weekly");

  const estimatedPrice = maintenancePriceTable[poolSize][frequency];

  return (
    <section className="bg-sky-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickQuoteCards[locale].map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="flex flex-col gap-2 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-sm font-extrabold text-navy-900">{card.title}</span>
              <span className="text-xs text-navy-700/70">{card.description}</span>
            </a>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-navy-900/10 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-extrabold text-navy-900">{t.calculatorTitle}</h3>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-navy-900">{t.poolSizeLabel}</p>
              <div className="flex gap-2">
                {poolSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPoolSize(size)}
                    className={`flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition ${
                      poolSize === size
                        ? "border-pool-500 bg-pool-500/10 text-pool-600"
                        : "border-navy-900/10 text-navy-700/70 hover:border-navy-900/20"
                    }`}
                  >
                    {poolSizeLabels[locale][size]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-navy-900">{t.frequencyLabel}</p>
              <div className="flex gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq}
                    type="button"
                    onClick={() => setFrequency(freq)}
                    className={`flex-1 rounded-xl border-2 px-2 py-2.5 text-xs font-bold transition sm:text-sm ${
                      frequency === freq
                        ? "border-pool-500 bg-pool-500/10 text-pool-600"
                        : "border-navy-900/10 text-navy-700/70 hover:border-navy-900/20"
                    }`}
                  >
                    {frequencyLabels[locale][freq]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl bg-navy-950 p-6 text-center text-white">
            <span className="text-xs font-bold tracking-widest text-pool-100 uppercase">
              {t.estimatedQuoteLabel}
            </span>
            {estimatedPrice !== null ? (
              <span className="text-3xl font-extrabold">
                ${estimatedPrice}
                {t.perMonthSuffix}
              </span>
            ) : (
              <span className="text-2xl font-extrabold">{t.customQuoteLabel}</span>
            )}
            <p className="text-sm text-white/70">
              {estimatedPrice !== null ? t.helperWithPrice : t.helperWithoutPrice}
            </p>
            <a
              href="#quote"
              className="mt-2 rounded-full bg-pool-500 px-6 py-3 text-sm font-bold text-navy-950 hover:bg-pool-400"
            >
              {t.ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
