import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NailyFuzz" },
      { name: "description", content: "Explore NailyFuzz nail services: manicures, pedicures, nail art, gel extensions, and spa treatments in Mumbai." },
      { property: "og:title", content: "Services | NailyFuzz" },
      { property: "og:description", content: "Explore NailyFuzz nail services: manicures, pedicures, nail art, gel extensions, and spa treatments in Mumbai." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Classic Manicure",
    price: "₹800",
    duration: "45 min",
    description: "Nail shaping, cuticle care, hand massage, and polish of your choice for a clean, elegant finish.",
  },
  {
    title: "Luxury Pedicure",
    price: "₹1,400",
    duration: "60 min",
    description: "Exfoliation, callus care, nourishing mask, extended foot massage, and perfect polish application.",
  },
  {
    title: "Gel Extension Set",
    price: "₹2,200",
    duration: "75 min",
    description: "Lightweight gel extensions sculpted to your ideal length and shape, finished with durable, glossy color.",
  },
  {
    title: "Nail Art Design",
    price: "From ₹500",
    duration: "30+ min",
    description: "Custom hand-painted art, foils, gems, or minimal accents—designed to match your mood and outfit.",
  },
  {
    title: "Signature Spa Ritual",
    price: "₹2,800",
    duration: "90 min",
    description: "A full manicure and pedicure ritual with hot towel wraps, scrubs, and deeply hydrating treatments.",
  },
  {
    title: "Bridal Nail Package",
    price: "₹4,500",
    duration: "120 min",
    description: "A complete bridal experience: trial design, gel extensions, intricate art, and touch-up essentials.",
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
            Thoughtfully designed treatments for hands and feet, delivered with care in our Mumbai studio.
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
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Our team is happy to recommend the perfect service based on your nail goals and lifestyle.
            </p>
            <a
              href="mailto:hello@nailyfuzz.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Ask us a question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
