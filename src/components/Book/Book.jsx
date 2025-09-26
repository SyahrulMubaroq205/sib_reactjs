import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const books = [
  {
    title: "The Time Miracle",
    author: "Jean Paul Zogby",
    price: 25000,
    image: "/images/book3.png",
    rating: 5,
  },
  {
    title: "Blind Black Sheep",
    author: "A Life Story",
    price: 20000,
    image: "/images/book6.png",
    rating: 5,
  },
  {
    title: "The Authentic Work Place",
    author: "Jeffrey Butler",
    price: 30000,
    image: "/images/book7.png",
    rating: 5,
  },
  {
    title: "The Rule Estate",
    author: "Brandon Rule",
    price: 28000,
    image: "/images/book5.png",
    rating: 5,
  },
  {
    title: "Unlocking Financial Freedom",
    author: "Marcelin J Paul",
    price: 35000,
    image: "/images/book4.png",
    rating: 5,
  },
];

export default function Book() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 flex flex-col rounded-2xl items-center py-12">
      <h1 className="text-3xl font-bold mb-10">Popular Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex flex-col justify-between min-h-[420px] shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* bagian book */}
            <div className="flex flex-col items-center">
              <div className="w-full h-56 bg-white rounded-xl mb-4 shadow-md flex items-center justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <h2 className="font-semibold text-lg text-center text-gray-800">
                {book.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{book.author}</p>

              <div className="flex mb-2">
                {Array.from({ length: book.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="font-bold text-lg text-gray-900">
                Rp{book.price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-yellow-400 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-yellow-500 transition-colors font-medium">
              <FaShoppingCart /> Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
