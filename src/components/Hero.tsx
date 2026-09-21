import { Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <PlaceholderImage
          label="Professional photo of a residential pool in Texas (replace with a real Garma Pools project photo)"
          className="h-full w-full rounded-none border-0"
          dark
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
      </div>

      <Container className="relative flex min-h-[640px] flex-col justify-center gap-6 py-24 sm:min-h-[600px]">
        <div className="flex items-center gap-2 text-sm font-semibold text-pool-100">
          <MapPin className="h-4 w-4" aria-hidden />
          Serving the {company.serviceRegion}
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.3em] text-pool-100 uppercase">
            {company.name}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Pool Construction &amp; Maintenance
          </h1>
        </div>

        <p className="max-w-xl text-lg text-white/85 sm:text-xl">
          From building your dream pool to keeping it crystal clear, Garma Pools
          helps homeowners maintain and enjoy their pools year-round.
        </p>

        <p className="max-w-xl text-base font-medium text-pool-100/90">
          {company.heroHeadline}
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="rounded-full bg-pool-500 px-8 py-4 text-center text-base font-bold text-navy-950 shadow-lg shadow-pool-500/20 transition hover:bg-pool-400"
          >
            Get a Free Quote
          </a>
          <a
            href={company.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white hover:text-navy-950"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call Now
          </a>
        </div>
      </Container>
    </section>
  );
}
