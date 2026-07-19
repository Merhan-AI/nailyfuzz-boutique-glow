import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Attaches an IntersectionObserver to every `.reveal` element and toggles
 * `.is-visible` when it enters the viewport. Re-scans on route changes so
 * newly mounted sections animate in as the user scrolls.
 */
export function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((n) => {
      if (!n.classList.contains("is-visible")) observer.observe(n);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
