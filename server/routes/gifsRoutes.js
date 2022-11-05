//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const gifsController = require("../controllers/gifsController");

//!CRUD
router.get("/", gifsController.getGifs);
router.get("/genres", gifsController.getAllGenres);
router.get("/:gifID", gifsController.getGifsByID);
router.get("/genres/:genre", gifsController.getGifsByGenre);
router.post("/", gifsController.uploadGif);
router.delete("/", gifsController.removeGif);

module.exports = router;
