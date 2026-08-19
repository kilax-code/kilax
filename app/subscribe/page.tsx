import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kilax Premium Subscription - Unlimited Luganda Movies & Downloads",
  description:
    "Upgrade to Kilax Premium to watch and download unlimited Luganda translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo and more. Ad-free HD streaming and offline downloads.",
  keywords: [
    "kilax movies subscription",
    "kilax premium",
    "uganda movie subscription",
    "luganda movies download subscription",
    "kilax payment",
  ],
  alternates: {
    canonical: "https://www.kilaxmovies.com/subscribe",
  },
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kilax Premium
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Unlock unlimited HD streaming and offline downloads for all Luganda translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo and more.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Upgrade to Premium?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get the full Kilax Movies experience with zero restrictions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 text-center bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-white mb-2">Fast HD Streaming</h3>
            <p className="text-sm text-gray-400">
              Stream in full high definition with zero buffering on phone, PC, and TV.
            </p>
          </div>
          <div className="p-6 text-center bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
            <div className="text-4xl mb-3">⬇️</div>
            <h3 className="font-bold text-white mb-2">Unlimited Downloads</h3>
            <p className="text-sm text-gray-400">
              Download movies and episodes to watch offline anywhere, anytime.
            </p>
          </div>
          <div className="p-6 text-center bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
            <div className="text-4xl mb-3">🎬</div>
            <h3 className="font-bold text-white mb-2">All VJ Catalogs</h3>
            <p className="text-sm text-gray-400">
              Complete access to VJ Junior, Omutaka Ice P, VJ Jingo, VJ Emmy, and all VJs.
            </p>
          </div>
          <div className="p-6 text-center bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-white mb-2">Mobile Money Payments</h3>
            <p className="text-sm text-gray-400">
              Easy, instant activation via MTN Mobile Money and Airtel Money.
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="text-center bg-gray-900 border border-orange-500/30 rounded-3xl p-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Watching?</h3>
          <p className="text-gray-400 mb-8">
            Subscribe now using MTN Mobile Money, Airtel Money, or card. Instant activation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256780846800?text=Hello%2C%20I%20want%20to%20subscribe%20to%20Kilax%20Premium"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition"
            >
              Subscribe via WhatsApp
            </a>
            <Link
              href="/signin"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white font-bold text-lg transition"
            >
              Sign In to Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}