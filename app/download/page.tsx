import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Smartphone, Monitor, Apple } from "lucide-react";
import DownloadLogo from "@/components/DownloadLogo";

export const metadata: Metadata = {
  title: "Download Kilax Movies App - Android & Windows APK | Kilax Movies",
  description:
    "Download the free Kilax Movies app for Android (APK) and Windows PC. Watch and download offline Luganda translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo and more.",
  keywords: [
    "download kilax movies app",
    "kilax movies apk",
    "kilax android app",
    "kilax pc download",
    "ugandan movies app",
    "luganda movies app download",
    "vj junior app",
    "kilax apk download",
  ],
  alternates: {
    canonical: "https://www.kilaxmovies.com/download",
  },
  openGraph: {
    title: "Download Kilax Movies App - Android & Windows | Kilax Movies",
    description:
      "Get the free Kilax Movies app for Android and Windows. Stream and download HD Luganda translated movies and series offline.",
    url: "https://www.kilaxmovies.com/download",
    type: "website",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kilax Movies App",
  operatingSystem: "Android, Windows",
  applicationCategory: "EntertainmentApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "UGX",
  },
  description:
    "Kilax Movies app lets you stream and download Luganda translated movies and series by Uganda's top VJs: VJ Junior, Omutaka Ice P, VJ Jingo and more.",
  url: "https://www.kilaxmovies.com/download",
  publisher: {
    "@type": "Organization",
    name: "Kilax Movies",
    url: "https://www.kilaxmovies.com",
  },
};

export default function DownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
        <DownloadLogo />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
          Download Kilax App
        </h1>
        <p className="text-gray-300 text-center mb-6 max-w-md">
          Get the best Ugandan movies and series streaming experience on your Android or Windows device. Fast, secure, and offline-ready with content by VJ Junior, Omutaka Ice P, VJ Jingo and more.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-md">
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:from-orange-600 hover:to-orange-500 transition-all text-base w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Smartphone className="w-6 h-6" />
            Download for Android (APK)
          </a>
          <a
            href="https://st67097.ispot.cc/Kilax.exe"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:from-orange-600 hover:to-orange-500 transition-all text-base w-full"
            download
          >
            <Monitor className="w-6 h-6" />
            Download for Windows (.exe)
          </a>
          <div className="flex items-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-xl px-6 py-4 opacity-70 w-full">
            <div className="bg-gray-800/50 p-3 rounded-xl">
              <Apple className="w-6 h-6 text-gray-500" />
            </div>
            <div className="flex-1">
              <span className="text-gray-400 font-semibold text-base">iOS App</span>
              <p className="text-gray-600 text-xs mt-0.5">Available on the App Store soon</p>
            </div>
            <span className="text-xs bg-gray-800 text-gray-500 px-3 py-1.5 rounded-full font-medium">
              Coming Soon
            </span>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center max-w-lg">
          Need help installing? Contact our support team:
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a
            href="https://wa.me/256780846800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-orange-400 transition-colors text-sm"
          >
            WhatsApp Support
          </a>
          <a
            href="https://t.me/256780846800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-blue-400 transition-colors text-sm"
          >
            Telegram Support
          </a>
        </div>
      </main>
    </>
  );
}
