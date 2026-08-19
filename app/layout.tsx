import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import ConditionalLayout from "../components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kilaxmovies.com"),
  title: {
    default:
      "Kilax Movies - Watch Luganda Translated Movies by VJ Junior, Omutaka Ice P, VJ Jingo",
    template: "%s | Kilax Movies",
  },
  description:
    "Watch and download HD Luganda translated movies and series by Uganda's top VJs: VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon, VJ KK. Stream the best Ugandan translated cinema free on Kilax Movies.",
  keywords: [
    "kilaxmovies",
    "kilax",
    "kilax movies",
    "vj",
    "vj junior",
    "omutaka ice p",
    "ice p",
    "vj jjingo",
    "vj jingo",
    "jingo",
    "junior",
    "translated movies",
    "luganda movies",
    "luganda translated movies",
    "ugandan movies",
    "ugandan series",
    "vj emmy",
    "vj moon",
    "vj kk",
    "vj mark",
    "translated series",
    "ugandan streaming",
    "stream ugandan movies",
    "katogo movies",
    "luganda action movies",
    "luganda drama",
    "ugandan cinema",
    "translated films ugandan",
    "kilax app",
    "kilax streaming",
  ],
  authors: [{ name: "Kilax Movies", url: "https://www.kilaxmovies.com" }],
  creator: "Kilax Movies",
  publisher: "Kilax Movies",
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
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://www.kilaxmovies.com",
    siteName: "Kilax Movies",
    title:
      "Kilax Movies - Watch Luganda Translated Movies by VJ Junior, Omutaka Ice P, VJ Jingo",
    description:
      "Uganda's #1 streaming platform for Luganda translated movies and series. Watch or download content translated by VJ Junior, Omutaka Ice P, VJ Jingo, VJ Emmy and more.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Kilax Movies - Luganda Translated Movies & Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kilaxmovies",
    creator: "@kilaxmovies",
    title:
      "Kilax Movies - Watch Luganda Translated Movies by VJ Junior, Omutaka Ice P, VJ Jingo",
    description:
      "Uganda's #1 streaming platform for Luganda translated movies and series. VJ Junior, Omutaka Ice P, VJ Jingo and more.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.kilaxmovies.com",
  },
  category: "entertainment",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kilax Movies",
  alternateName: ["Kilax", "KilaxMovies", "Kilax Movies Uganda"],
  url: "https://www.kilaxmovies.com",
  description:
    "Uganda's #1 streaming platform for Luganda translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo and top Ugandan VJs.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.kilaxmovies.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kilax Movies",
  alternateName: ["Kilax", "KilaxMovies"],
  url: "https://www.kilaxmovies.com",
  logo: "https://www.kilaxmovies.com/logo.png",
  description:
    "Kilax Movies is Uganda's premier streaming platform offering the largest library of Luganda translated movies and series. Our platform features content translated by top Ugandan VJs including VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon, VJ KK, and VJ Mark.",
  sameAs: ["https://www.kilaxmovies.com"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@kilaxmovies.com",
    availableLanguage: ["English", "Luganda"],
  },
  areaServed: {
    "@type": "Country",
    name: "Uganda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#1E1E1E] text-white flex flex-col">
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}