import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGenres, deleteGenre } from "../../../_services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Fetch data genres saat mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        console.log("Fetched genres:", data); // Debug: cek data yang diterima
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
        alert("Gagal mengambil data genre");
      }
    };
    fetchGenres();
  }, []);

  // Toggle dropdown action
  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Delete genre
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this genre?");
    if (!confirmDelete) return;

    try {
      await deleteGenre(id);
      setGenres(genres.filter((genre) => genre.id !== id));
      alert("Genre berhasil dihapus");
    } catch (error) {
      console.error("Error deleting genre:", error);
      alert("Gagal menghapus genre");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="search-genre" className="sr-only">Search</label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="search-genre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search genre"
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3">
            <Link
              to="/admin/genres/create"
              className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Add Genre
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {genres.length > 0 ? (
                genres.map((genre) => (
                  <tr key={genre.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{genre.name}</td>
                    <td className="px-4 py-3">{genre.description || "-"}</td>
                    <td className="px-4 py-3 flex items-center justify-end relative">
                      <button
                        onClick={() => toggleDropdown(genre.id)}
                        className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 hover:text-gray-800 rounded-lg dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                      {openDropdownId === genre.id && (
                        <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link
                                to={`/admin/genres/edit/${genre.id}`}
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </Link>
                            </li>
                          </ul>
                          <div className="py-1">
                            <button
                              onClick={() => handleDelete(genre.id)}
                              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4">Data tidak ditemukan</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
