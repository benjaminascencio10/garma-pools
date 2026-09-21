import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { constructionCategories } from "@/data/construction";

export function ConstructionSection() {
  return (
    <section id="construction" className="bg-navy-900 py-20 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold tracking-[0.2em] text-pool-100 uppercase">
            Pool Construction
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Build Your Dream Pool
          </h2>
          <p className="max-w-lg text-white/80">
            Transform your backyard into a place to relax, entertain and enjoy
            with family.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {constructionCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-bold">{category.name}</p>
                <p className="mt-1 text-xs text-white/60">{category.description}</p>
                {!category.confirmed && (
                  <p className="mt-2 text-[10px] font-semibold tracking-wide text-sand-400 uppercase">
                    Not yet confirmed with Garma Pools
                  </p>
                )}
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-pool-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-pool-400"
          >
            Start Your Pool Project
          </a>
        </div>

        <PlaceholderImage
          label="Pool construction / build-in-progress photo"
          className="h-80 w-full lg:h-full"
          dark
        />
      </Container>
    </section>
  );
}
