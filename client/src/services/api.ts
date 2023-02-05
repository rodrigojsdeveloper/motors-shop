import axios from "axios";

const api = axios.create({
  baseURL: "https://motors-shop-cx41.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export { api };
