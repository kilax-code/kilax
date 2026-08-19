import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kilax Movies - Uganda's Premier Luganda Translated Cinema Platform",
  description:
    "Learn about Kilax Movies — Uganda's #1 streaming platform for Luganda translated movies and series. Discover our mission, our VJ partners (VJ Junior, Omutaka Ice P, VJ Jingo), and how we're making cinema accessible to millions of Ugandans.",
  keywords: [
    "about kilax movies",
    "kilax movies uganda",
    "luganda streaming platform",
    "ugandan cinema platform",
    "vj junior kilax",
    "omutaka ice p kilax",
    "vj jingo kilax",
    "ugandan movies platform",
    "luganda translated movies platform",
  ],
  alternates: {
    canonical: "https://www.kilaxmovies.com/about",
  },
  openGraph: {
    title: "About Kilax Movies - Uganda's Premier Luganda Cinema Platform",
    description:
      "Learn about Kilax Movies — Uganda's #1 streaming platform for Luganda translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo and top Ugandan VJs.",
    url: "https://www.kilaxmovies.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 text-orange-400 text-sm font-medium mb-4">
            Uganda&apos;s #1 Streaming Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            About Kilax Movies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kilax Movies is Uganda&apos;s premier streaming platform dedicated to bringing
            you the finest <strong className="text-orange-400">Luganda translated movies and series</strong> by
            Uganda&apos;s top VJs — VJ Junior, Omutaka Ice P, VJ Jingo, and many more.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              To make world-class cinema accessible to every Ugandan — in Luganda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 text-center bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500/40 transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                Largest Luganda Library
              </h3>
              <p className="text-gray-400">
                Thousands of movies and series translated into Luganda by Uganda&apos;s best VJs — available to stream or download anytime.
              </p>
            </div>
            <div className="p-6 text-center bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500/40 transition-colors">
              <div className="text-4xl mb-4">🇺🇬</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                Made for Ugandans
              </h3>
              <p className="text-gray-400">
                Built specifically for Ugandan audiences who prefer quality movies and series narrated in Luganda by local VJ talent.
              </p>
            </div>
            <div className="p-6 text-center bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500/40 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                Stream Anywhere
              </h3>
              <p className="text-gray-400">
                Watch on any device — phone, tablet, PC, or smart TV. Download for offline viewing and never miss a movie.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Kilax Movies was born from a simple observation: millions of Ugandans love movies, but most
                prefer to watch them in <strong className="text-white">Luganda</strong> — their mother tongue. For years,
                the only way to enjoy Luganda translated content was through informal channels, physical DVDs,
                or low-quality internet streams.
              </p>
              <p>
                We changed that. Kilax Movies is the first dedicated Ugandan streaming platform to partner
                directly with top VJs — including <strong className="text-orange-400">VJ Junior</strong>,{" "}
                <strong className="text-orange-400">Omutaka Ice P</strong>, and{" "}
                <strong className="text-orange-400">VJ Jingo (VJ Jjingo)</strong> — to offer a legal, high-quality,
                centralised library of Luganda translated cinema.
              </p>
              <p>
                Today, Kilax Movies hosts thousands of movies and series across every genre — action, drama,
                sci-fi, romance, comedy, horror, and more — all translated in Luganda and available at your
                fingertips.
              </p>
            </div>
          </div>



          {/* What is a VJ? */}
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              What is a Ugandan VJ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A <strong className="text-orange-400">Video Jockey (VJ)</strong> in Uganda is a professional narrator who
              translates international movies and TV series into <strong>Luganda</strong> in real time or through
              pre-recorded narration. Unlike traditional dubbing, Ugandan VJs add local flavour, humour, and
              cultural nuance that makes international content feel genuinely Ugandan.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The VJ tradition started in Ugandan video halls in the 1980s and 1990s. Today, VJs like
              VJ Junior, Omutaka Ice P, VJ Jingo, VJ Emmy, and many others are cultural icons with massive
              followings. Their translated content is how millions of Ugandans experience cinema.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Watching Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of Ugandans already enjoying the best Luganda translated movies and series on Kilax Movies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/movies"
              className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-colors"
            >
              Browse Movies
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}