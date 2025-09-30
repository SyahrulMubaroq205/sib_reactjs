import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "UI/UX Designer",
        image: "/images/gojo.png",
    },
    {
        name: "Michael Smith",
        role: "Frontend Developer",
        image: "/images/gojo.png",
    },
    {
        name: "Emily Davis",
        role: "Backend Developer",
        image: "/images/gojo.png",
    },
    {
        name: "John Doe",
        role: "Project Manager",
        image: "/images/gojo.png",
    },
];

export default function Team() {
    return (
        <section className="w-full flex flex-col items-center py-8 px-6 mb-24">
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-500 max-w-2xl text-center mb-12">
                Meet the amazing people behind our project. We work together to build
                something awesome!
            </p>

            {/* Team Members */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-purple-600 mb-4">{member.role}</p>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-gray-500 text-lg">
                                <a
                                    href="#"
                                    className="hover:text-purple-600 transition"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-purple-600 transition"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-purple-600 transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
