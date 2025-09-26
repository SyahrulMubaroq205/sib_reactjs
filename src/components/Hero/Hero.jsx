import React from "react";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Bagian Atas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Card Glass */}
                <div className="flex justify-center items-center">
                    <div className="relative w-150 h-80 rounded-2xl bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 shadow-xl shadow-purple-500/30 overflow-visible">
                        <img
                            src="/images/book2.png"
                            alt="Book Cover"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-150 transition-transform duration-500 ease-in-ou animate-float"
                        />
                    </div>
                </div>

                {/* Konten Kanan */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Good author & <br />
                        <span className="text-gray-800">wonderful plot in</span>
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        asperiores iste odio quo. Iure doloribus repudiandae quo impedit
                        illum. Autem, consectetur cumque non numquam neque enim modi dolore
                        et quisquam.
                    </p>
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition cursor-pointer font-medium">
                        READ MORE
                    </button>
                </div>
            </div>

            {/* Bagian Bawah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
                {/* Konten Kiri */}
                <div className="space-y-6 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Realistic Vector Book – Mock Up
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        asperiores iste odio quo. Iure doloribus repudiandae quo impedit
                        illum. Autem, consectetur cumque non numquam neque enim modi dolore
                        et quisquam.
                    </p>
                </div>

                {/* Card Glass */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    <div className="relative w-150 h-80 rounded-2xl bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 shadow-xl shadow-purple-500/30 overflow-visible">
                        <img
                            src="/images/book1.png"
                            alt="Book Mockup"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-150 transition-transform duration-500 ease-in-out animate-float"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
