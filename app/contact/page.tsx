import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kilax Movies - Support & Inquiries",
  description:
    "Get in touch with the Kilax Movies support team. Inquiries about Luganda translated movies, subscription support, VJ partnerships, or app assistance.",
  keywords: [
    "contact kilax movies",
    "kilax support",
    "kilax movies customer service",
    "kilax uganda contact",
  ],
  alternates: {
    canonical: "https://www.kilaxmovies.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Kilax Movies",
  url: "https://www.kilaxmovies.com/contact",
  description: "Contact Kilax Movies customer support, VJ partnerships, and inquiries.",
  mainEntity: {
    "@type": "Organization",
    name: "Kilax Movies",
    url: "https://www.kilaxmovies.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@kilaxmovies.com",
      telephone: "+256780846800",
      availableLanguage: ["English", "Luganda"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have a question about subscriptions, app downloads, movie requests, or VJ partnerships? We&apos;d love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-2xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-white">Send us a Message</h2>
                <p className="text-gray-400">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-sm text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="block w-full rounded-lg bg-black border border-gray-700 px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-sm text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-lg bg-black border border-gray-700 px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-sm text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="block w-full rounded-lg bg-black border border-gray-700 px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="block w-full rounded-lg bg-black border border-gray-700 px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm"
                    placeholder="Tell us more about your questions, movie requests, or feedback..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base flex items-center justify-center gap-2 transition"
                >
                  <span>✉️</span> Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Direct Channels</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl text-orange-400">📧</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email Support</h3>
                        <p className="text-gray-400 text-sm mb-2">Send us an email anytime</p>
                        <a
                          href="mailto:hello@kilaxmovies.com"
                          className="text-orange-400 hover:underline font-medium"
                        >
                          hello@kilaxmovies.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl text-green-400">💬</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">WhatsApp &amp; Telegram</h3>
                        <p className="text-gray-400 text-sm mb-2">Instant support &amp; payment inquiries</p>
                        <div className="flex gap-4">
                          <a
                            href="https://wa.me/256780846800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline text-sm font-semibold"
                          >
                            WhatsApp (+256 780 846 800)
                          </a>
                          <span className="text-gray-600">•</span>
                          <a
                            href="https://t.me/256780846800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline text-sm font-semibold"
                          >
                            Telegram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl text-orange-400">⚡</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Response Time</h3>
                        <p className="text-gray-400 text-sm">
                          We typically respond within a few hours on WhatsApp and 24 hours via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ box */}
              <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Quick Answers</h3>
                <div className="space-y-4 text-sm text-gray-400">
                  <div>
                    <h4 className="font-semibold text-white mb-1">How do I get premium access?</h4>
                    <p>Go to our subscription page or message our WhatsApp support line for instant MTN/Airtel mobile money activation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Can I request a movie translation?</h4>
                    <p>Yes! Send us the movie name via the contact form and our VJ team will review it for upcoming releases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}