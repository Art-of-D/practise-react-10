import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    client_id: import.meta.env.VITE_ACCESS_KEY,
  },
});

export default api;
