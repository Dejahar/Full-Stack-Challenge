import api from "./api";

//!GET ALL USER PLAYLISTS
export const getGifs = async () => {
  const response = await api.get("/gifs");
  return response.data;
};

//!GET GIF BY ID
export const getGifByID = async (gifID) => {
  const response = await api.get(`/gifs/${gifID}`);
  return response.data;
};

//!GET GIFS BY GENRE
export const getGifsByGenre = async (genre) => {
  const response = await api.get(`/gifs/genres/${genre}`);
  return response.data;
};

//!GET ALL GENRES
export const getAllGenres = async () => {
  const response = await api.get(`/gifs/genres`);
  return response.data;
};

//!POST CREATE NEW USER
export const uploadGif = async (data) => {
  const response = await api.post("/gifs", data);
  return response.data;
};

//!PUT UPDATE USER
