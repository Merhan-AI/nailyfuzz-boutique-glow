import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | NailyFuzz" },
      { name: "description", content: "Founded with a passion for nail art, NailyFuzz has been serving Mumbai with quality, hygienic, and creative nail services." },
      { property: "og:title", content: "About | NailyFuzz" },
      { property: "og:description", content: "Founded with a passion for nail art, NailyFuzz has been serving Mumbai with quality, hygienic, and creative nail services." },
    ],
  }),
  component: AboutPage,
});

const placeholderUrl = (text: string) =>
  `https://placehold.co/400x500/fdf2f8/b8860b?text=${encodeURIComponent(text)}`;

const team = [
  { name: "Founder", role: "Creative Director" },
  { name: "Senior Artist", role: "Nail Specialist" },
  { name: "Studio Manager", role: "Client Care" },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance font-display text-4xl text-foreground sm:text-5xl">
            About NailyFuzz
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Founded with a passion for nail art, NailyFuzz has been serving Mumbai with quality, hygienic, and creative nail services.
          </p>

        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={placeholderUrl("NailyFuzz Studio")}
                alt="NailyFuzz nail salon interior placeholder"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                A studio built on passion
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                NailyFuzz began as a small dream: to create a calm, beautiful space where every client leaves feeling confident and cared for. What started as a passion for nail art has grown into a trusted Mumbai studio known for quality, hygiene, and creativity.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We believe nail care is self-care. Every appointment is a chance to slow down, enjoy the process, and walk out with nails that feel perfectly you. From classic manicures to intricate hand-painted art, our team brings skill and attention to every detail.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">5+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Years of service</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">3k+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Happy clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-gold">100%</p>
                  <p className="mt-1 text-xs text-muted-foreground">Hygienic tools</p>
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
              Meet the team
            </h2>
            <p className="mt-4 text-muted-foreground">
              The friendly faces behind every flawless set.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-4 aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-2xl bg-card shadow-soft">
                  <img
                    src={placeholderUrl(member.name)}
                    alt={`${member.name} photo placeholder`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
