"use client";

import { useEffect } from "react";

export function useReveal(selector = ".reveal", threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold }
    );
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);
}
