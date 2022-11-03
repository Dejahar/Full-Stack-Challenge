const mongoose = require("mongoose");

const GifSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      required: [true, "Link is required."],
    },
    genre: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
  },
  { versionKey: false }
);

const gifModel = mongoose.model("gif", GifSchema);
module.exports = gifModel;