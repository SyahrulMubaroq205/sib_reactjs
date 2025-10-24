import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGenre } from "../../../_services/genres";

export default function GenreCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Name wajib diisi");
      return;
    }

    setLoading(true);
    try {
      await createGenre(formData);
      alert("Genre berhasil dibuat");
      navigate("/admin/genres");
    } catch (error) {
      console.error("Error creating genre:", error);

      if (error.response?.status === 422) {
        const validationErrors = error.response.data.errors;
        alert(
          Object.keys(validationErrors)
            .map((key) => `${key}: ${validationErrors[key].join(", ")}`)
            .join("\n")
        );
      } else {
        alert("Gagal membuat genre");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", description: "" });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-xl px-4 py-8 mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create Genre
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Description */}
          <div>
            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              {loading ? "Creating..." : "Create Genre"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
