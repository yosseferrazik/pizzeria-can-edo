"use client";

import { useReveal } from "@/hooks/useReveal";
import type { ReactNode } from "react";

export default function RevealWrapper({ children, selector, threshold }: { children: ReactNode; selector?: string; threshold?: number }) {
  useReveal(selector, threshold);
  return <>{children}</>;
}
