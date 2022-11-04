//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const gifsController = require("../controllers/gifsController");

//!CRUD
router.get("/", gifsController.getGifs);
router.get("/:genre", gifsController.getGifsByGenre);
router.get("/genre", gifsController.getAllGenres);
router.post("/", gifsController.addGif);
router.delete("/", gifsController.removeGif);

module.exports = router;
