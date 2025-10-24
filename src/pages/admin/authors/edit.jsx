import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGenres } from "../../../_services/genres";
import { getAuthors } from "../../../_services/authors";
import { showBook, updateBook } from "../../../_services/books";

export default function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    stock: 0,
    genre_id: 0,
    author_id: 0,
    cover_image: null,
    description: "",
    year_published: "",
  });
  const [previewCover, setPreviewCover] = useState(null); // preview lama/baru
  const [originalCover, setOriginalCover] = useState(null); // simpan cover lama

  useEffect(() => {
    const fetchData = async () => {
      const [genresData, authorsData, bookData] = await Promise.all([
        getGenres(),
        getAuthors(),
        showBook(id),
      ]);

      setGenres(genresData);
      setAuthors(authorsData);

      setFormData({
        title: bookData.title,
        price: bookData.price,
        stock: bookData.stock,
        genre_id: bookData.genre_id,
        author_id: bookData.author_id,
        cover_image: null, // awalnya belum pilih file baru
        description: bookData.description,
        year_published: bookData.year_published || "",
      });

      if (bookData.cover_image) {
        const coverUrl = bookData.cover_image.startsWith("http")
          ? bookData.cover_image
          : `http://localhost:8000/storage/${bookData.cover_image}`;
        setPreviewCover(coverUrl);
        setOriginalCover(bookData.cover_image);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cover_image") {
      if (files && files[0]) {
        setFormData({ ...formData, cover_image: files[0] });
        setPreviewCover(URL.createObjectURL(files[0]));
      } else {
        setFormData({ ...formData, cover_image: null });
        setPreviewCover(
          originalCover
            ? `http://localhost:8000/storage/${originalCover}`
            : null
        );
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      payload.append("_method", "PUT"); // Laravel PUT method

      payload.append("title", formData.title);
      payload.append("price", formData.price);
      payload.append("stock", formData.stock);
      payload.append("genre_id", formData.genre_id);
      payload.append("author_id", formData.author_id);
      payload.append("description", formData.description || "");
      payload.append("year_published", formData.year_published);

      // Append file baru hanya jika ada
      if (formData.cover_image instanceof File) {
        payload.append("cover_image", formData.cover_image);
      }

      await updateBook(id, payload);
      navigate("/admin/books");
    } catch (error) {
      console.error(error);
      alert("Error update book");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Book
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            {/* Title */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Year Published */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Year Published
              </label>
              <input
                type="number"
                name="year_published"
                value={formData.year_published}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Genre
              </label>
              <select
                name="genre_id"
                value={formData.genre_id}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">--select genre--</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Author
              </label>
              <select
                name="author_id"
                value={formData.author_id}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">--select author--</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Cover */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Cover Photo
              </label>
              {previewCover && (
                <img
                  src={previewCover}
                  alt="Preview"
                  className="w-32 h-40 object-cover rounded mb-2"
                />
              )}
              <input
                type="file"
                name="cover_image"
                accept="image/*"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
