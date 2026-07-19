import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-foreground">
            Naily<span className="text-gold">Fuzz</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-gold font-medium" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-gold transition-colors" }}
              activeOptions={{ exact: true }}
              className="text-sm font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-foreground shadow-gold transition-all hover:opacity-90 hover:shadow-lift"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs border-l-border bg-background">
            <div className="flex flex-col gap-8 pt-8">
              <Link to="/" className="font-display text-2xl text-foreground">
                Naily<span className="text-gold">Fuzz</span>
              </Link>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      activeProps={{ className: "text-gold font-medium" }}
                      inactiveProps={{ className: "text-foreground/80 hover:text-gold transition-colors" }}
                      activeOptions={{ exact: true }}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className="rounded-full bg-gold-gradient px-6 py-3 text-center text-sm font-medium text-foreground shadow-gold transition-all hover:opacity-90"
                >
                  Book Now
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl text-foreground">
              Naily<span className="text-gold">Fuzz</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium nail artistry in the heart of Mumbai. Where every detail is designed to make you feel radiant.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-base text-foreground">Visit Us</h4>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              12, Hill Road, Bandra West<br />
              Mumbai, Maharashtra 400050
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-base text-foreground">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tue – Sun: 10 AM – 8 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-base text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@nailyfuzz.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NailyFuzz. All rights reserved.
          </p>
          <nav className="flex gap-6 text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NailyFuzz | Premium Nail Salon in Mumbai" },
      { name: "description", content: "Book a luxury nail experience at NailyFuzz, Mumbai's boutique nail salon for gel nails, nail art, and premium manicures." },
      { name: "author", content: "NailyFuzz" },
      { property: "og:title", content: "NailyFuzz | Premium Nail Salon in Mumbai" },
      { property: "og:description", content: "Book a luxury nail experience at NailyFuzz, Mumbai's boutique nail salon for gel nails, nail art, and premium manicures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nailyfuzz" },
      { name: "twitter:title", content: "NailyFuzz | Premium Nail Salon in Mumbai" },
      { name: "twitter:description", content: "Book a luxury nail experience at NailyFuzz, Mumbai's boutique nail salon for gel nails, nail art, and premium manicures." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6161ac7f-f041-45ab-8f3b-3316938aee3b/id-preview-5cf06b23--3a4bef19-dcce-430b-9fb4-fca7ea880adb.lovable.app-1784287403789.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6161ac7f-f041-45ab-8f3b-3316938aee3b/id-preview-5cf06b23--3a4bef19-dcce-430b-9fb4-fca7ea880adb.lovable.app-1784287403789.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
