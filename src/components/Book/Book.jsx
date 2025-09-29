import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import booksData from "../../utils/BooksData";
import BookList from "./BookList";
import FormBook from "./FormBook";

export default function Book({ showForm = false }) {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = (book) => {
    setBooks([...books, { id: uuidv4(), ...book }]);
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Daftar Buku</h1>
      <BookList books={books} />
      {showForm && <FormBook onAdd={handleAddBook} />}
    </div>
  );
}
