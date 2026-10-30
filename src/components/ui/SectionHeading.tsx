export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${
            light ? "text-pool-400" : "text-pool-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-4xl leading-[1.12] font-medium tracking-tight text-balance sm:text-5xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-navy-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
