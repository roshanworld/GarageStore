function Footer() {
  return (
    <>
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-4xl logo-font text-cyan-400">
            Car Wash
          </h1>

          <p className="mt-4 text-gray-400 leading-7">
            Professional car washing, detailing, and repair services with
            quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Reviews
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-5">
            Services
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>🚗 Premium Wash</li>
            <li>🧽 Interior Cleaning</li>
            <li>🔧 Car Repair</li>
            <li>✨ Car Detailing</li>
            <li>🛞 Wheel Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-5">
            Contact Us
          </h2>

          <div className="space-y-3 text-gray-400">
            <p>📍 Noida, Uttar Pradesh</p>

            <p>📞 +91 98765 43210</p>

            <p>✉️ carwash@gmail.com</p>

            <p>🕒 Mon - Sun : 8:00 AM - 8:00 PM</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-2xl">

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              🌐
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              📘
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              📷
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              ▶️
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700 py-6 text-center text-gray-500">

        © 2026 Car Wash. All Rights Reserved.

      </div>

    </footer>
    </>
    
  );
}

export default Footer;