import { API } from "../_api";

// Ambil token dari localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET all books
export const getBooks = async () => {
  try {
    const { data } = await API.get("/books", {
      headers: getAuthHeaders(),
    });
    return data.data;
  } catch (error) {
    console.log("getBooks error:", error);
    throw error;
  }
};

// CREATE book
export const createBook = async (bookData) => {
  try {
    const response = await API.post("/books", bookData, {
      headers: getAuthHeaders(), // penting untuk auth
    });
    return response.data;
  } catch (error) {
    console.log("createBook error:", error);
    throw error;
  }
};

// GET book detail
export const showBook = async (id) => {
  try {
    const { data } = await API.get(`/books/${id}`, {
      headers: getAuthHeaders(),
    });
    return data.data;
  } catch (error) {
    console.log("showBook error:", error);
    throw error;
  }
};

export const updateBook = async (id, bookData) => {
  try {
    const response = await API.post(`/books/${id}`, bookData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log("updateBook error:", error);
    throw error;
  }
};

// DELETE book
export const deleteBook = async (id) => {
  try {
    const { data } = await API.delete(`/books/${id}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    console.log("deleteBook error:", error);
    throw error;
  }
};
