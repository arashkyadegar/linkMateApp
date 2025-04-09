const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll back to the top
  };

  return (
    <footer
      className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-12 px-6"
       // Enables Right-to-Left alignment
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row justify-between ">
          {/* Newsletter Section */}
          <div className="flex justify-end items-center mb-8 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-2 text-gray-800 bg-gray-200 border rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500"
            />
            <button className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
              Subscribe
            </button>
          </div>

          {/* Logo and Branding */}
          <div className="flex justify-end items-center mb-8">
            <img
              src="/logo.jpeg" // Replace with actual image path
              alt="Company Icon"
              className="h-14 w-14 ml-4 rounded-full border border-gray-300 shadow-md"
            />
            <h1 className="text-xl font-bold tracking-wide">LinkMate</h1>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Quick Links Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/home" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-blue-500 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-500 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-blue-500 transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-blue-500 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              Social Media
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition flex items-center"
                >
                  <img
                    src="/path-to-icons/twitter-icon.png" // Replace with actual icon path
                    alt="Twitter"
                    className="h-6 w-6 ml-2"
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition flex items-center"
                >
                  <img
                    src="/path-to-icons/facebook-icon.png" // Replace with actual icon path
                    alt="Facebook"
                    className="h-6 w-6 ml-2"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition flex items-center"
                >
                  <img
                    src="/path-to-icons/instagram-icon.png" // Replace with actual icon path
                    alt="Instagram"
                    className="h-6 w-6 ml-2"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition flex items-center"
                >
                  <img
                    src="/path-to-icons/linkedin-icon.png" // Replace with actual icon path
                    alt="LinkedIn"
                    className="h-6 w-6 ml-2"
                  />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              Get in Touch
            </h2>
            <ul className="space-y-3">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@yourcompany.com"
                  className="hover:text-blue-500 transition"
                >
                  info@yourcompany.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-blue-500 transition"
                >
                  +1 234 567 89
                </a>
              </li>
              <li>
                Address: <p>123 Business St, Your City</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 border-t border-gray-500"></div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 shadow-md"
        >
          Back to Top
        </button>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
