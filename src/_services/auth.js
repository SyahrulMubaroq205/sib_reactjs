import { useJwt } from "react-jwt";
import { API } from "../_api";

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/login', { email, password })
    return data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const logout = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    localStorage.removeItem("accessToken");
    return;
  }

  try {
    await API.post('/logout', null, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    localStorage.removeItem("accessToken");
  }
};

export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token expired",
        data: null
      }
    }

    return {
      success: true,
      message: "Token valid",
      data: decodedToken
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    }
  }
}