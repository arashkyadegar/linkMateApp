import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🔗",
      title: "ShortLink",
      description: "Transform long URLs into compact, shareable links.",
    },
    {
      icon: "🔒",
      title: "Password-Protected Links",
      description: "Secure your links with a password for confidential sharing.",
    },
    {
      icon: "🔄",
      title: "Single-Use Links",
      description: "Ensure your links can only be accessed once for added privacy.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <section className="py-12 px-6 text-center bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore the range of services we offer to simplify and secure your link management needs.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              <h3 className="text-xl font-semibold">{service.icon} {service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;