import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Gem, Palette, Footprints, Ruler } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NailyFuzz" },
      { name: "description", content: "Explore NailyFuzz nail services in Mumbai: Classic Manicure, Gel Manicure, Nail Art, Pedicure, and Nail Extensions." },
      { property: "og:title", content: "Services | NailyFuzz" },
      { property: "og:description", content: "Explore NailyFuzz nail services in Mumbai: manicures, gel nails, nail art, pedicures, and extensions." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Sparkles,
    title: "Classic Manicure",
    price: "₹300",
    duration: "30 min",
    description: "Nail shaping, cuticle care, and a polished finish in the color of your choice.",
  },
  {
    icon: Gem,
    title: "Gel Manicure",
    price: "₹600",
    duration: "45 min",
    description: "Long-lasting gel polish with a glossy, chip-resistant finish that stays flawless for weeks.",
  },
  {
    icon: Palette,
    title: "Nail Art (per nail)",
    price: "₹50",
    duration: "Varies",
    description: "Custom designs, hand-painted details, foils, or accents to match your personal style.",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    price: "₹400",
    duration: "45 min",
    description: "Relaxing foot soak, exfoliation, nail care, and a fresh polish for soft, happy feet.",
  },
  {
    icon: Ruler,
    title: "Nail Extensions",
    price: "₹1,200",
    duration: "60 min",
    description: "Lightweight extensions sculpted to your ideal length and shape for a refined look.",
  },
];

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Clean, professional nail care designed around your style and comfort.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-gold">
                  <service.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl text-card-foreground">
                    {service.title}
                  </h3>
                  <span className="font-display text-lg text-gold">{service.price}</span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {service.duration}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl text-foreground">
              Have a custom design in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Share your ideas with us on WhatsApp and we'll help you plan the perfect set.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20NailyFuzz%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
