import { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {isLoading ? (
          // Loading spinner
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
              Loading books...
            </p>
          </div>
        ) : books.length > 0 ? (
          // Menampilkan daftar buku
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => {
              const coverUrl = book.cover_image
                ? book.cover_image.startsWith("http")
                  ? book.cover_image
                  : `http://localhost:8000/storage/${book.cover_image}`
                : "/placeholder.png";

              return (
                <div
                  key={book.id}
                  className="flex flex-col justify-between rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  {/* COVER IMAGE */}
                  <div className="h-60 w-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
                    <Link to={`/books/show/${book.id}`}>
                      <img
                        className="h-full w-full object-cover"
                        src={coverUrl}
                        alt={book.title}
                      />
                    </Link>
                  </div>

                  {/* BOOK INFO */}
                  <div className="flex flex-col justify-between flex-1 mt-4">
                    <div>
                      <Link
                        to={`/books/show/${book.id}`}
                        className="block text-base font-semibold text-white line-clamp-2 hover:underline"
                      >
                        {book.title}
                      </Link>

                      <ul className="mt-2 flex items-center gap-4 text-gray-400 text-sm">
                        <li>Fast Delivery</li>
                        <li>Best Price</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-bold text-white">
                        Rp{parseInt(book.price).toLocaleString("id-ID")}
                      </p>

                      <Link
                        to={`/books/show/${book.id}`}
                        className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        View detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Kalau tidak ada buku
          <div className="flex flex-col items-center justify-center py-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-2 4H5"
              />
            </svg>
            <p className="text-gray-500 dark:text-gray-300">
              No books found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
