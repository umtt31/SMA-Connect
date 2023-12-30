const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");

const doctorRoute = require("./routes/doctorRoute.js");
const pageRoute = require("./routes/pageRoute.js");
const patientRoute = require("./routes/patientRoute.js");
const checkUserMiddleware = require("./middlewares/checkUserMiddleware.js");

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
  })
);

app.use("*", checkUserMiddleware.checkUser);
app.use("/", pageRoute);
app.use("/doctor", doctorRoute);
app.use("/patient", patientRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port : ${process.env.PORT}`);
});
