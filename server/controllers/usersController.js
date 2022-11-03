//!CONNECTION TO MODELS
const model = require("../models");
const admin = require("../services/firebase");

//!POST CREATE NEW USER
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, gifs } = req.body;
    const user = await model.User.create({
      firstName,
      lastName,
      email,
      password,
      gifs
    });

    res.status(200).send(user);
  } catch (error) {
    res.status(504).send(error);
  }
};

//!GET  GET USER
const getUser = async (req, res) => {
  const userID = req.id;

  try {
    const user = await model.User.findById(userID);
    res.status(200).send(user);
  } catch (error) {
    res.status(504).send({ errMessage: "Could not find user", error: error });
  }
};

//!PUT UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { file } = req;
    res.status(200).send(file.path);
  } catch (error) {
    res.status(400).send(error);
  }
};

//!DELETE USER

module.exports = {
  getUser: getUser,
  registerUser: registerUser,
  updateUser: updateUser,
};
