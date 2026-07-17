import { createFileRoute } from "@tanstack/react-router";

import salonImage from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | NailyFuzz" },
      { name: "description", content: "Learn about NailyFuzz, a boutique nail salon in Mumbai dedicated to artistry, self-care, and beautiful nail experiences." },
      { property: "og:title", content: "About | NailyFuzz" },
      { property: "og:description", content: "Learn about NailyFuzz, a boutique nail salon in Mumbai dedicated to artistry, self-care, and beautiful nail experiences." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            About NailyFuzz
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A small studio with a big love for detail. We're here to make every visit feel like a little escape.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={salonImage}
                alt="NailyFuzz nail salon interior with blush pink chairs and gold accents"
                className="h-full w-full object-cover"
                width={1920}
                height={1088}
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Where beauty meets calm
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                NailyFuzz was founded in the heart of Mumbai with one simple belief: a nail appointment should be more than maintenance—it should be a moment you look forward to. Our studio is designed in soft blush, warm white, and touches of gold to create a space that feels like a breath of fresh air.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our technicians are trained in the latest techniques, from builder gel and structured manicures to intricate hand-painted nail art. We listen carefully, work gently, and obsess over the details so you leave feeling polished and pampered.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">5+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Years of artistry</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">3k+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Happy clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">100%</p>
                  <p className="mt-1 text-xs text-muted-foreground">Sterile tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Our values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The little things that make NailyFuzz feel like home.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Care-first approach",
                description: "We prioritize nail health and never rush a treatment. Every set is built on a foundation of strong, cared-for nails.",
              },
              {
                title: "Personal style",
                description: "Your nails are an accessory you wear every day. We design shapes, colors, and art that feel like *you*.",
              },
              {
                title: "Impeccable hygiene",
                description: "From sterilized tools to single-use disposables, cleanliness is woven into every step of our service.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-xl text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
