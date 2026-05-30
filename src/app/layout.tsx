import type { Metadata } from "next";
import { Afacad, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Can Edo – Pizzeria Artesanal | Blanes, Costa Brava",
  description:
    "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano con más de 25 años de experiencia. Ingredientes de proximidad y biológicos. Auténtica pizza napolitana en la Costa Brava.",
  icons: {
    icon: "https://pizzeriacanedo.com/wp-content/uploads/2025/02/cropped-LOGO-VERDE-FAV_Mesa-de-trabajo-1-192x192.png",
  },
  openGraph: {
    title: "Can Edo – Pizzeria Artesanal",
    description:
      "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano.",
    images: [
      {
        url: "https://pizzeriacanedo.com/wp-content/uploads/2025/02/LOGO-1024x274.png",
        width: 1024,
        height: 274,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${afacad.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
