import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <section className="py-12 px-6 text-center bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and 
            we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;