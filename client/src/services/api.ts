import axios from "axios";

const api = axios.create({
  baseURL: "https://motors-shop-z6i7.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export { api };
