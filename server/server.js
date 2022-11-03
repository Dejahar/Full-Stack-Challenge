//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//!CONNECTION DB
const connect = require("./config/db");
connect();

//!MIDDLEWARE
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use(cookieParser());
const corsOptions = require("./config/corsOptions");
app.use(cors(corsOptions));
//Middleware validate to access restricted resource
// const validateToken = require("./middlewares/validateToken");

//!REQUIRE CONST ROUTES
const userRoutes = require("./routes/userRoutes");
const gifRoutes = require("./routes/gifRoutes");

//!ROUTES
app.use("/user", userRoutes);
app.use("/gif", gifRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
