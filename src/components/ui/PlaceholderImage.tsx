import { ImageIcon } from "lucide-react";

/**
 * Clearly-labeled stand-in for a real photograph. No Garma Pools photography
 * exists yet, so every image slot on the site uses this component instead of
 * a fabricated or stock photo. Swap for a real <Image> once real photos
 * (pool projects, the Garma Pools vehicle/logo, etc.) are provided.
 */
export function PlaceholderImage({
  label,
  caption = "Photo placeholder",
  className = "",
  dark = false,
}: {
  label: string;
  caption?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed text-center ${
        dark
          ? "border-white/25 bg-navy-800/60 text-white/70"
          : "border-navy-900/15 bg-pool-100/60 text-navy-700/70"
      } ${className}`}
    >
      <ImageIcon className="h-8 w-8 opacity-60" aria-hidden />
      <span className="px-4 text-xs font-semibold tracking-wide uppercase opacity-80">
        {caption}
      </span>
      <span className="px-6 text-xs opacity-70">{label}</span>
    </div>
  );
}
