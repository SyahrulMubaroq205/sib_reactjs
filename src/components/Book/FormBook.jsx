import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function FormBook({ onAdd }) {
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        price: "",
        rating: 1,
        image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook.title && newBook.author && newBook.price) {
            onAdd({
                id: uuidv4(),
                ...newBook,
                price: parseInt(newBook.price),
                rating: parseInt(newBook.rating)
            });
            setNewBook({
                title: "",
                author: "",
                price: "",
                rating: 1,
                image: ""
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-10 px-6">
            {/* Gambar */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src="/images/drawbook.png"
                    alt="Preview Buku"
                    className="w-64 h-80 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Form */}
            <div className="flex-1 w-full p-8 rounded-3xl backdrop-blur-md shadow-lg overflow-hidden relative">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-300 to-blue-500 animate-gradient-background -z-10"></div>

                <h2 className="text-2xl font-semibold mb-6 text-center md:text-left text-white relative z-10">
                    Tambah Buku Baru
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                    <input
                        type="text"
                        placeholder="Judul"
                        value={newBook.title}
                        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                        className="border border-gray-300 bg-white/30 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-gray-700 transition duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={newBook.author}
                        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                        className="border border-gray-300 bg-white/30 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-gray-700 transition duration-300"
                    />
                    <input
                        type="number"
                        placeholder="Harga"
                        value={newBook.price}
                        onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
                        className="border border-gray-300 bg-white/30 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-gray-700 transition duration-300"
                    />
                    <input
                        type="number"
                        placeholder="Rating"
                        min="1"
                        max="5"
                        value={newBook.rating}
                        onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
                        className="border border-gray-300 bg-white/30 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-gray-700 transition duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={newBook.image}
                        onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                        className="border border-gray-300 bg-white/30 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-gray-700 transition duration-300"
                    />
                    <button
                        type="submit"
                        className="bg-purple-400 text-white py-3 rounded-xl font-medium hover:bg-purple-500 transition-colors mt-2 shadow-md"
                    >
                        Tambah Buku
                    </button>
                </form>
            </div>

            {/* Gradient Animation */}
            <style jsx>{`
                @keyframes gradient-background {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-background {
                    background-size: 300% 300%;
                    animation: gradient-background 8s ease infinite;
                }
            `}</style>
        </div>
    );
}
