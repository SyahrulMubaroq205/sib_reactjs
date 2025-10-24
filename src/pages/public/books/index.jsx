import { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {books.length > 0 ? (
            books.map((book) => {
              // Gunakan cover_image dari backend, fallback ke placeholder
              const coverUrl = book.cover_image
                ? book.cover_image.startsWith("http")
                  ? book.cover_image
                  : `http://localhost:8000/storage/${book.cover_image}`
                : "/placeholder.png"; // Ganti dengan path placeholder

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
            })
          ) : (
            <p>No books found</p>
          )}
        </div>
      </div>
    </section>
  );
}
