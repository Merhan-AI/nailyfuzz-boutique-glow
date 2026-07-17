import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Clock, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-nails.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NailyFuzz | Premium Nail Salon in Mumbai" },
      { name: "description", content: "Book a luxury nail experience at NailyFuzz, Mumbai's boutique nail salon for manicures, pedicures, nail art, and spa treatments." },
      { property: "og:title", content: "NailyFuzz | Premium Nail Salon in Mumbai" },
      { property: "og:description", content: "Book a luxury nail experience at NailyFuzz, Mumbai's boutique nail salon." },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Sparkles,
    title: "Artisan Nail Art",
    description: "Hand-painted designs and curated embellishments tailored to your style.",
  },
  {
    icon: Heart,
    title: "Premium Products",
    description: "We use top-tier, gentle polishes and treatments that love your nails back.",
  },
  {
    icon: Clock,
    title: "Effortless Booking",
    description: "Schedule your visit online and let us handle the rest in our serene studio.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Sterilized tools and strict cleanliness standards for every appointment.",
  },
];

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Mumbai's Boutique Nail Studio
              </p>
              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Nails that feel like <span className="italic text-gold">self-care</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                At NailyFuzz, every manicure is a little luxury. Soft ambience, meticulous care, and designs you'll love long after you leave.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft lg:aspect-[16/10]">
                <img
                  src={heroImage}
                  alt="Elegant hands with a soft pink manicure on a marble surface"
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1088}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Why choose NailyFuzz
            </h2>
            <p className="mt-4 text-muted-foreground">
              A calm space, skilled hands, and results that feel perfectly you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured gallery */}
      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Recent nail art
              </h2>
              <p className="mt-4 text-muted-foreground">
                A glimpse of the soft, feminine designs created in our Mumbai studio.
              </p>
            </div>
            <Link
              to="/gallery"
              className="shrink-0 text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              View full gallery
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[gallery1, gallery2, gallery3, gallery4].map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-card"
              >
                <img
                  src={src}
                  alt={`Nail art design example ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={816}
                  height={816}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Ready for your next set?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Treat yourself to a moment of calm and come out polished. We can't wait to welcome you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Book your appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
