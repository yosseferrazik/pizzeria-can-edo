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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Can Edo",
  description:
    "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano con más de 25 años de experiencia. Ingredientes de proximidad y biológicos. Auténtica pizza napolitana en la Costa Brava.",
  url: "https://pizzeriacanedo.com",
  telephone: "+34613418837",
  servesCuisine: ["Pizza Napolitana", "Italiana", "Cocina artesanal"],
  priceRange: "€€",
  image: "https://pizzeriacanedo.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer Josep Tarradellas, 3",
    addressLocality: "Blanes",
    addressRegion: "Girona",
    postalCode: "17300",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.675,
    longitude: 2.789,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "19:30",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "19:30",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "19:30",
      closes: "23:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/pizzeriacanedo/",
    "https://wa.me/34613418837",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzeriacanedo.com"),
  title: "Can Edo – Pizzeria Artesanal | Blanes, Costa Brava",
  description:
    "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano con más de 25 años de experiencia. Ingredientes de proximidad y biológicos. Auténtica pizza napolitana en la Costa Brava.",
  icons: {
    icon: "/images/favicon-192.png",
  },
  openGraph: {
    title: "Can Edo – Pizzeria Artesanal",
    description:
      "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano.",
    url: "https://pizzeriacanedo.com",
    siteName: "Can Edo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 274,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Edo – Pizzeria Artesanal",
    description:
      "Pizzeria artesanal en Blanes. Edoardo Gualtieri, maestro pizzero italiano.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${afacad.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
