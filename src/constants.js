export const apiKey = import.meta.env.VITE_OMDB_API_KEY;
export const mode = import.meta.env.VITE_DEVELOPMENT_MODE;
console.log(mode);

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

const API_URL = "https://api.themoviedb.org/3/";

export const config = {
  url: {
    API_URL,
  },
};
