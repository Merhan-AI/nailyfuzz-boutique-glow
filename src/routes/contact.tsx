import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | NailyFuzz" },
      { name: "description", content: "Visit NailyFuzz in Bandra West, Mumbai. Book your appointment via WhatsApp or stop by during our business hours." },
      { property: "og:title", content: "Contact | NailyFuzz" },
      { property: "og:description", content: "Visit NailyFuzz in Bandra West, Mumbai. Book via WhatsApp or drop by during business hours." },
    ],
  }),
  component: ContactPage,
});

const whatsappUrl =
  "https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20NailyFuzz.";

function ContactPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance font-display text-4xl text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Visit us in Bandra West or book your appointment directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact details + map */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground">
                  Visit our studio
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We're located in the heart of Bandra West, ready to welcome you for a moment of beauty and calm.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      12, Hill Road, Bandra West<br />Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@nailyfuzz.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Tuesday – Sunday: 10 AM – 8 PM<br />Monday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <iframe
                  title="NailyFuzz location map"
                  src="https://maps.google.com/maps?q=Bandra+West,Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0 sm:h-80"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-gold">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl text-card-foreground">
                Book on WhatsApp
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
                The fastest way to reserve your spot. Tap the button below and we'll confirm your appointment.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-colors hover:bg-foreground/90"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Opens WhatsApp with: "Hi, I'd like to book an appointment at NailyFuzz."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
