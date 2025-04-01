import React, { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      icon: "🔗",
      title: "ShortLink",
      description:
        "Transform long URLs into compact, shareable links that are perfect for every platform.",
    },
    {
      icon: "🔒",
      title: "Password-Protected Links",
      description:
        "Secure your links with a password for confidential sharing.",
    },
    {
      icon: "🔄",
      title: "Single-Use Links",
      description:
        "Ensure your links can only be accessed once for added privacy and control.",
    },
  ];

  const benefits = [
    {
      title: "Convenience Simplified",
      description:
        "Shortening and managing links has never been easier, thanks to our intuitive interface.",
    },
    {
      title: "Stay in Control",
      description:
        "Control who accesses your links with advanced security features like passwords and expiration timers.",
    },
    {
      title: "Smart Sharing",
      description:
        "Single-use links ensure your shared content remains exclusive and private.",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const HeroSection = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to LinkMate
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Manage and explore your link services easily in both dark and light
            modes.
          </p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
        </div>
      </section>
    );
  };

  const ServicesSection = () => {
    return (
      <section className="py-12 px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const BenefitsSection = () => {
    const benefits = [
      {
        title: "Convenience Simplified",
        description:
          "Shortening and managing links has never been easier, thanks to our intuitive interface.",
        image: "/group-technology-connection-0410-5706344.jpg", // Replace with actual image path
      },
      {
        title: "Stay in Control",
        description:
          "Control who accesses your links with advanced security features like passwords and expiration timers.",
        image:
          "/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d.jpg", // Replace with actual image path
      },
      {
        title: "Smart Sharing",
        description:
          "Single-use links ensure your shared content remains exclusive and private.",
        image:
          "/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d (1).jpg", // Replace with actual image path
      },
    ];

    return (
      <section className="py-12 px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div className="max-w-6xl mx-auto space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-3xl font-bold">{benefit.title}</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 p-6 flex justify-center">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-lg shadow-lg max-w-full"
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Sarah Williams",
        feedback:
          "Using ShortLink has completely transformed the way I share links. The single-use link feature is a game-changer for privacy!",
        image: "/avatar-6.jpg", // Replace with actual image path
      },
      {
        name: "David Chen",
        feedback:
          "Password-protected links gave me the confidence to securely share sensitive documents. Highly recommend this service!",
        image: "/avatar-7.jpg", // Replace with actual image path
      },
      {
        name: "Emily Brown",
        feedback:
          "I love how simple it is to use. ShortLink is intuitive, fast, and makes managing my links effortless. It’s a must-have tool!",
        image: "/avatar-8.jpg", // Replace with actual image path
      },
    ];

    return (
      <section className="py-12 px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 shadow-md"
                />
                <p className="italic text-gray-600 dark:text-gray-400">
                  "{testimonial.feedback}"
                </p>
                <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const FooterSection = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 100, behavior: "smooth" }); // Smooth scroll back to the top
    };

    return (
      <footer
        className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-12 px-6"
        dir="rtl" // Enables Right-to-Left alignment
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse items-center sm:flex-row-reverse justify-between">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-right">
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
                  <a
                    href="/about-us"
                    className="hover:text-blue-500 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-500 transition"
                  >
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
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Dashboard;
