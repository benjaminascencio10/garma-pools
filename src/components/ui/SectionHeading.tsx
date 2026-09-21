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
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold tracking-[0.2em] uppercase ${
            light ? "text-pool-100" : "text-pool-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base sm:text-lg ${light ? "text-white/80" : "text-navy-700/80"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
