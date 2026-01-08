export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left: Call to action */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Stay Safe & Informed</h2>
          <p className="mb-4 text-gray-400 max-w-xs">
            Get real-time travel advisories, emergency contacts, and safety updates wherever you go.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex justify-between md:justify-center gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/advisories" className="hover:text-white">Travel Advisories</a></li>
              <li><a href="/maps" className="hover:text-white">Maps</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white">Cookies Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Right: Emergency Contacts */}
        <div>
          <h3 className="text-white font-semibold mb-2">Emergency Contacts</h3>
          <ul className="space-y-2 text-gray-400">
            <li>🚓 Police – 119</li>
            <li>🚑 Ambulance / Fire – 110</li>
            <li>🚨 DMC – 117</li>
          </ul>

          {/* Optional social icons */}
          <div className="flex gap-3 mt-6 text-gray-400">
            <a href="#" className="hover:text-white">FB</a>
            <a href="#" className="hover:text-white">TW</a>
            <a href="#" className="hover:text-white">IG</a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2026 Pearl Lanka. All rights reserved.
      </div>
    </footer>
  );
}
