import type { Metadata } from "next";
import CartaContent from "./CartaContent";

export const metadata: Metadata = {
  title: "Carta – Can Edo | Pizzeria Artesanal en Blanes",
  description:
    "Descubre la carta de Can Edo: pizzas artesanales de masa madre, entrantes, pastas, postres caseros y bebidas. Ingredientes de proximidad y biológicos en Blanes, Costa Brava.",
  openGraph: {
    title: "Carta – Can Edo | Pizzeria Artesanal",
    description:
      "Descubre la carta de Can Edo: pizzas artesanales de masa madre, entrantes, pastas, postres caseros y bebidas.",
  },
  twitter: {
    title: "Carta – Can Edo | Pizzeria Artesanal",
    description:
      "Descubre la carta de Can Edo: pizzas artesanales de masa madre, entrantes, pastas, postres caseros y bebidas.",
  },
};

export default function CartaPage() {
  return <CartaContent />;
}
