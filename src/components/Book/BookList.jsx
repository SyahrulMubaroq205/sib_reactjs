import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function BookList({ books }) {
    const [clickedId, setClickedId] = useState(null);

    const handleAddToCart = (bookId) => {
        setClickedId(bookId);
        setTimeout(() => setClickedId(null), 300);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
            {books.map((book) => (
                <div
                    key={book.id}
                    className="book-card relative bg-white/30 backdrop-blur-lg rounded-3xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                    
                    {/* Image buku */}
                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-3xl">
                        <img
                            src={book.image || "https://via.placeholder.com/150"}
                            alt={book.title}
                            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Konten */}
                    <div className="p-5 flex flex-col flex-1">
                        <h2 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
                            {book.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-1">{book.author}</p>

                        {/* Rating */}
                        <div className="flex items-center mb-2">
                            {Array.from({ length: book.rating }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 mr-1" />
                            ))}
                            <span className="text-gray-500 text-xs ml-1">{book.rating}.0</span>
                        </div>

                        {/* Harga */}
                        <p className="font-bold text-lg text-gray-900 mb-4">
                            Rp{book.price.toLocaleString("id-ID")}
                        </p>

                        {/* Button Buy */}
                        <button
                            onClick={() => handleAddToCart(book.id)}
                            className={`mt-auto py-3 rounded-2xl font-semibold text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 flex justify-center items-center gap-2 shadow-md transform ${clickedId === book.id ? "scale-105" : ""
                                } hover:scale-105 hover:shadow-lg`}
                        >
                            <FaShoppingCart /> Buy
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
