import { API } from "../_api";


// Ambil token dari localStorage
const getAuthHeaders = () => {
  // authors.js
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET all authors (public)
export const getAuthors = async () => {
  try {
    const { data } = await API.get("/authors");
    return data.data || data;
  } catch (error) {
    console.error("getAuthors error:", error);
    throw error;
  }
};

// GET author detail (public)
export const showAuthor = async (id) => {
  try {
    const { data } = await API.get(`/authors/${id}`);
    return data.data || data;
  } catch (error) {
    console.error("showAuthor error:", error);
    throw error;
  }
};

// CREATE author (menerima FormData dari component)
export const createAuthor = async (formData) => {
  try {
    const { data } = await API.post("/authors", formData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data", // wajib kalau ada file
      },
    });

    return data;
  } catch (error) {
    console.error("createAuthor error:", error);
    throw error;
  }
};

// Update authors.js
export const updateAuthor = async (id, authorData) => {
  try {
    const { data } = await API.post(`/authors/${id}?_method=PUT`, authorData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error("updateAuthor error:", error);
    throw error;
  }
};


// DELETE author (admin)
export const deleteAuthor = async (id) => {
  try {
    const { data } = await API.delete(`/authors/${id}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.error("deleteAuthor error:", error);
    throw error;
  }
};
