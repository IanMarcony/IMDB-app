import axios from "axios";

const apiTMDB = axios.create({
  baseURL: process.env.URL_API_TMDB || "https://api.themoviedb.org/3",
});

export default apiTMDB;
