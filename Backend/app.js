const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ConnectDB = require("./config/db");
ConnectDB();

const userRoute = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use("/users", userRoute);



module.exports = app;
