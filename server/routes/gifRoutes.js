//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const gifsController = require("../controllers/gifsController");

//!CRUD
router.get("/", gifsController.getGifs);
router.get("/:genre", gifsController.getGifsByGenre);
router.get("/searchedSongs", gifsController.getSearchedGifs);
router.get("/playlist/:playlistID", gifsController.getAllGenres);
router.post("/searchedSongs/:songID", gifsController.addGif);
router.delete("/searchedSongs", gifsController.removeGif);

module.exports = router;
