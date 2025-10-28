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
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full">
                    <Link to={`/books/show/${book.id}`}>
                      <img
                        className="mx-auto h-full object-cover"
                        src={coverUrl}
                        alt={book.title}
                      />
                    </Link>
                  </div>
                  <div className="pt-6">
                    <Link
                      to={`/books/show/${book.id}`}
                      className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      {book.title}
                    </Link>

                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Fast Delivery
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        Rp{book.price}
                      </p>

                      <Link
                        to={`/books/show/${book.id}`}
                        className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
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
