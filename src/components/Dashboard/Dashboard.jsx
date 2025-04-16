import React, { useState } from "react";
import Services from "../Services/Services";
const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");



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



  const HeroSection = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to LinkMate
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Manage and explore your link services easily.
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

      <Services/>
    );
  };

  const BenefitsSection = () => {
    const benefits = [
      {
        title: "Convenience Simplified",
        description:
          "Shortening and managing links has never been easier, thanks to our intuitive interface.",
        image: "/jump.jpeg", // Replace with actual image path
      },
      {
        title: "Stay in Control",
        description:
          "Control who accesses your links with advanced security features like passwords and expiration timers.",
        image:
          "/hand.jpeg", // Replace with actual image path
      },
      {
        title: "Smart Sharing",
        description:
          "Single-use links ensure your shared content remains exclusive and private.",
        image:
          "/single-tree.jpeg", // Replace with actual image path
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




  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      
    </div>
  );
};

export default Dashboard;
