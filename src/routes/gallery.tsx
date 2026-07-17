import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | NailyFuzz" },
      { name: "description", content: "Browse NailyFuzz nail art gallery showcasing gel nails, manicures, nail art designs, and extensions from our Mumbai studio." },
      { property: "og:title", content: "Gallery | NailyFuzz" },
      { property: "og:description", content: "Browse NailyFuzz nail art gallery showcasing gel nails, manicures, nail art designs, and extensions." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { text: "Classic Manicure", label: "Soft pink elegance" },
  { text: "Gel Nails", label: "Glossy long-wear finish" },
  { text: "Nail Art", label: "Hand-painted details" },
  { text: "Pedicure", label: "Fresh polished feet" },
  { text: "Nail Extensions", label: "Sculpted length" },
  { text: "Bridal Set", label: "Pearl & gold accents" },
];

const placeholderUrl = (text: string) =>
  `https://placehold.co/600x600/fdf2f8/b8860b?text=${encodeURIComponent(text)}`;

function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance font-display text-4xl text-foreground sm:text-5xl">
            The Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A responsive showcase of nail art styles — from everyday polish to detailed custom designs.
          </p>

        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.text}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft"
              >
                <div className="aspect-square">
                  <img
                    src={placeholderUrl(image.text)}
                    alt={`${image.text} nail art placeholder`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent p-5 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  <p className="font-display text-lg text-background">{image.text}</p>
                  <p className="text-sm text-background/80">{image.label}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
