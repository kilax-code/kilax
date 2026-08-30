import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kilax Movies",
  description: "Read the Kilax Movies privacy policy. Learn how we collect, use, and protect your personal information when you use our streaming platform.",
  alternates: {
    canonical: "https://www.kilaxmovies.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: August 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Kilax Movies (&quot;Kilax&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operated at kilaxmovies.com.
              We are Uganda&apos;s #1 streaming platform for Luganda translated movies and series.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">Account Information:</strong> When you sign up or sign in with Google, we collect your name and email address.</li>
              <li><strong className="text-white">Usage Data:</strong> We collect information about how you interact with our platform, such as which movies and series you watch.</li>
              <li><strong className="text-white">Device Information:</strong> We may collect information about the device you use to access our platform, including your browser type and operating system.</li>
              <li><strong className="text-white">Payment Information:</strong> If you subscribe to Kilax Premium, payment is processed securely by our payment partners. We do not store your card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Create and manage your account.</li>
              <li>Provide, personalise, and improve our streaming service.</li>
              <li>Process your subscription payments.</li>
              <li>Send you important service notifications.</li>
              <li>Respond to your customer support requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Google Sign-In</h2>
            <p>
              Kilax Movies offers Google Sign-In as a convenient way to create and access your account.
              When you use Google Sign-In, we only request access to your basic profile information —
              specifically your <strong className="text-white">name</strong> and <strong className="text-white">email address</strong>.
              We do not access your Google Drive, Gmail, contacts, or any other Google data.
              Your Google credentials are never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your information with trusted service providers who assist us in operating
              our platform (such as cloud hosting and payment processors), under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organisational security measures to protect your
              personal information against unauthorised access, alteration, disclosure, or destruction.
              Your account is protected by secure authentication managed by Supabase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mt-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Delete your account at any time from your profile settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <div className="mt-3 bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-orange-400 font-medium">Kilax Movies</p>
              <p className="text-gray-400 text-sm mt-1">Email: hello@kilaxmovies.com</p>
              <p className="text-gray-400 text-sm">Website: https://www.kilaxmovies.com/contact</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
