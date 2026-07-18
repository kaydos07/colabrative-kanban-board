import axios from "axios";

export const clientAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

clientAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
clientAPI.interceptors.response.use(
    (config) => config,
    (error) => {
        if(error.response && error.response.status === 401) {
            localStorage.removeItem("token")
            alert("Token is expired")
            window.location.href = `/login`
        }
        const serverMessage = error.response?.data?.detail || error.message
        alert(`${serverMessage}`)
        return Promise.reject(new Error(serverMessage))
    }
)
