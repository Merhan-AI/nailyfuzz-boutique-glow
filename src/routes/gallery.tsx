import { createFileRoute } from "@tanstack/react-router";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | NailyFuzz" },
      { name: "description", content: "Browse NailyFuzz nail art gallery featuring soft pink, gold, French, and bridal nail designs from our Mumbai studio." },
      { property: "og:title", content: "Gallery | NailyFuzz" },
      { property: "og:description", content: "Browse NailyFuzz nail art gallery featuring soft pink, gold, French, and bridal nail designs." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: gallery1, alt: "Soft pink manicure with delicate gold foil accents", title: "Gold Foil Blush" },
  { src: gallery2, alt: "French tips with gold glitter accent nail", title: "Classic French Glow" },
  { src: gallery3, alt: "Rose gold chrome finish nail art", title: "Rose Gold Chrome" },
  { src: gallery4, alt: "Pink ombre nails with tiny gold star details", title: "Starlit Ombre" },
  { src: gallery5, alt: "Classic red manicure with gold jewelry", title: "Ruby Red Polish" },
  { src: gallery6, alt: "Nude nails with pearl and gold embellishments", title: "Pearl Bridal Set" },
];

function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            The Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A collection of our favorite sets created in the NailyFuzz studio. Soft, feminine, and endlessly inspiring.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.title}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft"
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={816}
                    height={816}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-display text-lg text-background">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
