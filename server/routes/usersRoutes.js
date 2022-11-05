//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController.js");
const validateToken = require("../middlewares/validateToken");

//!CRUD
router.get("/", userController.getUser);
router.post("/", userController.registerUser);
router.put( "/", validateToken, userController.updateUser);

module.exports = router;
