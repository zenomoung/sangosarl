import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sangosarl.com"),
  title: {
    default:
      "Sango SARL | Services Numériques & Technologies de l'Information au Cameroun",
    template: "%s | Sango SARL",
  },
  description:
    "Sango SARL - Entreprise camerounaise spécialisée dans les services numériques, le paiement mobile (SangoCash), les appels d'offres (SangoBids) et les services à la demande (SangoServices). Basée à Douala, Bonapriso.",
  keywords: [
    "Sango SARL",
    "services numériques Cameroun",
    "transformation digitale Cameroun",
    "paiement mobile Cameroun",
    "appels d'offres Cameroun",
    "SangoCash",
    "SangoBids",
    "SangoServices",
    "Douala",
    "Yaoundé",
    "Bonapriso",
    "software Cameroun",
    "développement application Cameroun",
    "marchés publics Cameroun",
    "mobile money Cameroun",
    "transfert d'argent Cameroun",
    "services à la demande Douala",
    "technologie information Cameroun",
    "cash transfer Cameroun",
    "government tenders Cameroon",
    "digital services Cameroon",
  ],
  authors: [{ name: "Sango SARL" }],
  creator: "Sango SARL",
  publisher: "Sango SARL",
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://sangosarl.com",
    siteName: "Sango SARL",
    title:
      "Sango SARL | Services Numériques & Technologies de l'Information au Cameroun",
    description:
      "Votre partenaire de confiance pour la transformation digitale au Cameroun. Paiement mobile, appels d'offres, services à la demande.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sango SARL - Services Numériques au Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sango SARL | Services Numériques au Cameroun",
    description:
      "Votre partenaire de confiance pour la transformation digitale au Cameroun.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sangosarl.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sango SARL",
  url: "https://sangosarl.com",
  logo: "https://sangosarl.com/og-image.png",
  description:
    "Services Numériques et Technologies de l'Information au Cameroun",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bonapriso",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  telephone: "+237681108439",
  sameAs: [
    "https://sangoservices.com",
    "https://sangocash.com",
    "https://sangobids.com",
  ],
  areaServed: {
    "@type": "Country",
    name: "Cameroon",
  },
  serviceType: [
    "Services Numériques",
    "Paiement Mobile",
    "Appels d'Offres",
    "Services à la Demande",
    "Conseil en Transformation Digitale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
