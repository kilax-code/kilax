import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Kilax Movies",
  description: "Read the Kilax Movies Terms of Service. Understand the rules and guidelines for using our Luganda translated movies and series streaming platform.",
  alternates: {
    canonical: "https://www.kilaxmovies.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: August 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Kilax Movies (&quot;Kilax&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at kilaxmovies.com
              or through our mobile application, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. About Kilax Movies</h2>
            <p>
              Kilax Movies is Uganda&apos;s #1 streaming platform for Luganda translated movies and series.
              We provide access to a library of films and television series narrated in Luganda by
              Uganda&apos;s top Video Jockeys (VJs), including VJ Junior, Omutaka Ice P, VJ Jingo, and more.
              Our platform is available on web and as a free Android app on the Google Play Store.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
            <p className="mb-3">To access certain features, you must create an account. You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide accurate and current information during registration.</li>
              <li>Keep your password confidential and not share your account with others.</li>
              <li>Notify us immediately of any unauthorised use of your account.</li>
              <li>Be responsible for all activity that occurs under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Free and Premium Access</h2>
            <p>
              Kilax Movies offers both free and premium tiers of access. Free users can access a
              selection of content. Kilax Premium subscribers receive unlimited access to the full
              library, HD streaming, and offline downloads. Premium subscriptions are billed according
              to the plan selected at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Copy, redistribute, or re-upload any content from our platform without permission.</li>
              <li>Use our platform for any unlawful or fraudulent purpose.</li>
              <li>Attempt to reverse-engineer, hack, or disrupt our platform or servers.</li>
              <li>Share premium account credentials with others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content on Kilax Movies, including VJ narrations, is the intellectual property of
              Kilax Movies or its licensed content partners. Unauthorised copying, distribution, or
              commercial use of our content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time if you violate
              these Terms of Service. You may also delete your account at any time from your profile settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              Kilax Movies is provided &quot;as is&quot; without any warranties. We are not liable for any
              indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify users of any
              significant changes. Continued use of Kilax Movies after changes constitutes acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="mt-3 bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-orange-400 font-medium">Kilax Movies</p>
              <p className="text-gray-400 text-sm mt-1">Email: hello@kilaxmovies.com</p>
              <p className="text-gray-400 text-sm">
                Website:{" "}
                <Link href="/contact" className="text-orange-400 hover:underline">
                  https://www.kilaxmovies.com/contact
                </Link>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
