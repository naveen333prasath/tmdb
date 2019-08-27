require("./config/passportConfig");
const mongoose = require("./db.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const passport = require("passport");
//const rtsIndex = require('./routes/index.router');

var userController = require("./controllers/userControllers.js");

var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors({ orgin: "http://localhost:4200/users" }));
app.use("image", express.static(path.join("image")));
app.listen(3000, () => console.log("Server started at port:3000"));

app.use("/users", userController);
