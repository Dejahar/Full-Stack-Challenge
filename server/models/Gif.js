const mongoose = require("mongoose");

const GifSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: [true, "Link is required."],
    },
    title: {
      type: String,
      trim: true,
    },
    genre: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ]
  },
  { versionKey: false }
);

const gifModel = mongoose.model("gifs", GifSchema);
module.exports = gifModel;