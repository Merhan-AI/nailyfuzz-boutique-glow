import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | NailyFuzz" },
      { name: "description", content: "Book an appointment or get in touch with NailyFuzz nail salon in Mumbai. Visit us in Bandra West or send a message." },
      { property: "og:title", content: "Contact | NailyFuzz" },
      { property: "og:description", content: "Book an appointment or get in touch with NailyFuzz nail salon in Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Book your appointment or ask us anything. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact details */}
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
                      Mon – Sat: 10am – 8pm<br />Sunday: 11am – 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-gold">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-card-foreground">
                    Message sent
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 ..." required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-card-foreground">
                      Service interested in
                    </label>
                    <Input id="service" placeholder="e.g. Gel extension set" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us what you have in mind..." rows={4} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-foreground py-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
