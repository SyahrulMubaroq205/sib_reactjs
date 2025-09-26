import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
    return (
        <section className="w-full flex flex-col items-center py-16 px-6 rounded-xl bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100">
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-500 max-w-2xl text-center mb-12">
                Have any questions or feedback? Feel free to reach out to us. We’d love
                to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
                {/* Contact Info */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <FiMapPin className="text-purple-600 text-2xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                            <p className="text-gray-500">
                                Jl. Example No. 123, Jakarta, Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FiPhone className="text-purple-600 text-2xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                            <p className="text-gray-500">+62 812 3456 7890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FiMail className="text-purple-600 text-2xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                            <p className="text-gray-500">info@ginmart.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
