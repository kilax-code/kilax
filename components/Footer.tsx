export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center">
        {/* App Purpose and Auth Explanation */}
        <div className="max-w-3xl text-center mb-6">
          <p className="text-gray-400 text-sm mb-2">
            <strong>Kilax Movies</strong> is a premium streaming platform for movies and series translated by top Ugandan Video Jockeys.
          </p>
          <p className="text-gray-500 text-xs">
            We use Google Sign-In so users can securely create accounts, sync their watch history, and manage subscriptions across devices.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Kilax Movies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
