import React from "react";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            <section className="py-12 px-6 text-center bg-gray-100 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        At LinkMate, we’re passionate about making link management seamless and secure.
                        With cutting-edge technology and an intuitive platform, we empower you to share links
                        with confidence and control.
                    </p>
                </div>
            </section>
            <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            To simplify how you manage and share your links while ensuring the highest standards
                            of privacy and security.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Our Values</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Innovation, transparency, and user-centricity drive everything we do. We constantly
                            evolve to meet your needs in a fast-changing digital world.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;