"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronLeft, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  quoteFieldsByService,
  getQuoteServiceLabels,
  quoteServiceOptions,
  type QuoteServiceId,
} from "@/data/quoteWizard";
import { company } from "@/data/company";
import { submitQuoteRequest, type QuoteContactInfo } from "@/lib/quote";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

type Step = 1 | 2 | 3 | 4;

const emptyContact: QuoteContactInfo = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  zip: "",
};

const VALID_SERVICE_IDS: QuoteServiceId[] = ["new-pool", "maintenance", "repair", "other"];

function isQuoteServiceId(value: string | null): value is QuoteServiceId {
  return value !== null && (VALID_SERVICE_IDS as string[]).includes(value);
}

export function QuoteWizard({ locale }: { locale: Locale }) {
  const t = ui[locale].quoteWizard;
  const options = quoteServiceOptions[locale];
  const fieldsByService = quoteFieldsByService[locale];
  const serviceLabels = getQuoteServiceLabels(locale);

  const searchParams = useSearchParams();
  const presetService = isQuoteServiceId(searchParams.get("service"))
    ? (searchParams.get("service") as QuoteServiceId)
    : null;

  const [step, setStep] = useState<Step>(presetService ? 2 : 1);
  const [service, setService] = useState<QuoteServiceId | null>(presetService);
  const [details, setDetails] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<QuoteContactInfo>(emptyContact);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const fields = service ? fieldsByService[service] : [];

  function selectService(id: QuoteServiceId) {
    setService(id);
    setDetails({});
    setErrors({});
    setStep(2);
  }

  function updateDetail(name: string, value: string) {
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  function validateStep2() {
    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      if (field.required && !details[field.name]?.trim()) {
        nextErrors[field.name] = t.requiredError;
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStep3() {
    const nextErrors: Record<string, string> = {};
    if (!contact.firstName.trim()) nextErrors.firstName = t.requiredError;
    if (!contact.lastName.trim()) nextErrors.lastName = t.requiredError;
    if (!contact.phone.trim()) nextErrors.phone = t.requiredError;
    if (!contact.email.trim()) {
      nextErrors.email = t.requiredError;
    } else if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      nextErrors.email = t.emailError;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit() {
    if (!service || !validateStep3()) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      await submitQuoteRequest({
        service,
        details,
        contact,
        submittedAt: new Date().toISOString(),
      });
      setStep(4);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep(1);
    setService(null);
    setDetails({});
    setContact(emptyContact);
    setErrors({});
  }

  return (
    <section id="quote" className="bg-navy-950 py-20 text-white sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} light />

        {step < 4 && <StepIndicator step={step} labels={t.stepLabels} />}

        <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 text-navy-900 shadow-xl sm:p-10">
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-extrabold">{t.step1Title}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {options.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => selectService(option.id)}
                      className="flex flex-col items-start gap-3 rounded-2xl border-2 border-navy-900/10 p-5 text-left transition hover:border-pool-500 hover:bg-pool-100/40"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pool-500/10 text-pool-600">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="text-base font-bold">{option.label}</span>
                      <span className="text-sm text-navy-700/70">{option.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && service && (
            <div className="flex flex-col gap-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700/70 hover:text-navy-900"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                {t.backLabel}
              </button>
              <h3 className="text-xl font-extrabold">{t.step2TitlePrefix}</h3>
              <p className="text-sm text-navy-700/70">
                {t.serviceSelectedLabel} <span className="font-bold">{serviceLabels[service]}</span>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                  >
                    <label className="mb-1.5 block text-sm font-semibold text-navy-900">
                      {field.label}
                      {field.required && <span className="text-pool-600"> *</span>}
                    </label>
                    {field.type === "select" ? (
                      <select
                        value={details[field.name] ?? ""}
                        onChange={(e) => updateDetail(field.name, e.target.value)}
                        className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-pool-500 focus:outline-none"
                      >
                        <option value="">{t.selectPlaceholder}</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        value={details[field.name] ?? ""}
                        onChange={(e) => updateDetail(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-pool-500 focus:outline-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={details[field.name] ?? ""}
                        onChange={(e) => updateDetail(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-pool-500 focus:outline-none"
                      />
                    )}
                    {errors[field.name] && (
                      <p className="mt-1 text-xs font-semibold text-red-600">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => validateStep2() && setStep(3)}
                className="mt-2 rounded-full bg-pool-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-pool-400"
              >
                {t.continueLabel}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700/70 hover:text-navy-900"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                {t.backLabel}
              </button>
              <h3 className="text-xl font-extrabold">{t.step3Title}</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label={t.contactLabels.firstName}
                  value={contact.firstName}
                  onChange={(v) => setContact((p) => ({ ...p, firstName: v }))}
                  error={errors.firstName}
                  required
                />
                <TextField
                  label={t.contactLabels.lastName}
                  value={contact.lastName}
                  onChange={(v) => setContact((p) => ({ ...p, lastName: v }))}
                  error={errors.lastName}
                  required
                />
                <TextField
                  label={t.contactLabels.phone}
                  type="tel"
                  value={contact.phone}
                  onChange={(v) => setContact((p) => ({ ...p, phone: v }))}
                  error={errors.phone}
                  required
                />
                <TextField
                  label={t.contactLabels.email}
                  type="email"
                  value={contact.email}
                  onChange={(v) => setContact((p) => ({ ...p, email: v }))}
                  error={errors.email}
                  required
                />
              </div>

              {submitError && (
                <p className="text-sm font-semibold text-red-600">{t.submitErrorMessage}</p>
              )}

              <button
                type="button"
                disabled={submitting}
                onClick={handleSubmit}
                className="mt-2 rounded-full bg-pool-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-pool-400 disabled:opacity-60"
              >
                {submitting ? t.sendingLabel : t.submitLabel}
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center gap-5 py-6 text-center">
              <CheckCircle2 className="h-14 w-14 text-pool-500" aria-hidden />
              <h3 className="text-2xl font-extrabold">{t.thankYouTitle}</h3>
              <p className="max-w-md text-navy-700/80">{t.thankYouBody}</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-pool-500 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-pool-400"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {t.callButtonLabel}
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full border-2 border-navy-900/15 px-6 py-3.5 text-sm font-bold text-navy-900 hover:bg-navy-900/5"
                >
                  {t.backHomeLabel}
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function StepIndicator({ step, labels }: { step: Step; labels: [string, string, string] }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2 sm:gap-4">
      {labels.map((label, i) => {
        const index = (i + 1) as Step;
        const active = step === index;
        const done = step > index;
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  done
                    ? "bg-pool-500 text-navy-950"
                    : active
                      ? "border-2 border-pool-500 text-pool-100"
                      : "border-2 border-white/20 text-white/40"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`hidden text-xs font-semibold sm:block ${
                  active || done ? "text-white" : "text-white/40"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div className={`h-0.5 w-8 sm:w-16 ${done ? "bg-pool-500" : "bg-white/15"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="text-pool-600"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm focus:border-pool-500 focus:outline-none"
      />
      {error && <p className="mt-1 text-xs font-semibold text-red-600">{error}</p>}
    </div>
  );
}
