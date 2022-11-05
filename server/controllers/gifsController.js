//!CONNECTION TO MODELS
const model = require("../models");

//!GET ALL GIFS
const getGifs = async (req, res) => {
  try {
    const gifs = await model.Gif.find();
    res.status(200).send(gifs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
}

//!GET GIFS BY GENRE
const getGifsByGenre = async (req, res) => {
  const { genre } = req.params;

  try {
    const gifByGenre = await model.Gif.find({ genre: genre });
    res.status(200).send(gifByGenre);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
}

//!GET GIF BY ID
const  getGifsByID= async (req, res) => {
  const { gifID } = req.params;
  try {
    const gif = await model.Gif.findById(gifID);
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
}

//!GET ALL DISTINCT GENRES
const getAllGenres = async (req, res) => {
  try {
    const genres = await model.Gif.distinct("genre");
    res.status(200).send(genres);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
}

//!POST GIF
const uploadGif = async (req, res) => {
  const { link, title, genre } = req.body;
  try {
    const gif = await model.Gif.create({
      title,
      link,
      genre
    })
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
}

//!DELETE GIF
const removeGif = async (req, res)=> {
	res.status(200).send("ok");
}

module.exports = {
  getGifs: getGifs,
  getGifsByGenre: getGifsByGenre,
  getAllGenres: getAllGenres,
  getGifsByID: getGifsByID,
  uploadGif: uploadGif,
  removeGif: removeGif,
};
