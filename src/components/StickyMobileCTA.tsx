import { Phone } from "lucide-react";
import { company } from "@/data/company";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-900/10 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={company.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-950 py-3.5 text-sm font-bold text-white"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call {company.phone}
      </a>
      <a
        href="#quote"
        className="flex flex-1 items-center justify-center rounded-full bg-pool-500 py-3.5 text-sm font-bold text-navy-950"
      >
        Get a Quote
      </a>
    </div>
  );
}
