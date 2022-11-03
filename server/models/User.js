const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      require: [true, "Nickname is missing."],
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      require: [true, "First name is required."],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      require: [true, "Last name is required."],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      require: [true, "Email is required."],
      unique: true,
      trim: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      require: [true, "Password is missing."],
      trim: true,
    },
    gifLibrary: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "gif",
      },
    ],
  },
  { versionKey: false }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
