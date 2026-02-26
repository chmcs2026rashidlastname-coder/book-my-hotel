import axios from "axios";

const API = axios.create({
  baseURL: "https://book-my-hotel-backend-ta2n.onrender.com"
});

export default API;
