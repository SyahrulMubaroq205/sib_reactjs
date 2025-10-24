import { API } from "../_api";

// Ambil token dari localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET all genres
export const getGenres = async () => {
  try {
    const { data } = await API.get("/genres", {
      headers: getAuthHeaders(),
    });
    return data.data || data;
  } catch (error) {
    console.error("getGenres error:", error);
    throw error;
  }
};

// GET genre detail
export const showGenre = async (id) => {
  try {
    const { data } = await API.get(`/genres/${id}`, {
      headers: getAuthHeaders(),
    });
    return data.data || data;
  } catch (error) {
    console.error("showGenre error:", error);
    throw error;
  }
};

// CREATE genre
export const createGenre = async (genreData) => {
  try {
    const { data } = await API.post("/genres", genreData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error("createGenre error:", error);
    throw error;
  }
};

// UPDATE genre
export const updateGenre = async (id, genreData) => {
  try {
    const { data } = await API.put(`/genres/${id}`, genreData, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.error("updateGenre error:", error);
    throw error;
  }
};

// DELETE genre
export const deleteGenre = async (id) => {
  try {
    const { data } = await API.delete(`/genres/${id}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.error("deleteGenre error:", error);
    throw error;
  }
};
