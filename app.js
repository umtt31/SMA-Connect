const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const userRoute = require("./routes/userRoute.js");
const doctorRoute = require("./routes/doctorRoute.js");
const pageRoute = require("./routes/pageRoute.js");
const patientRoute = require("./routes/patientRoute.js");
const donatorRoute = require("./routes/donatorRoute.js");

const app = express();

mongoose
  .connect('mongodb://localhost/sma-connect-test')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

global.userIn = null;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/sma-connect-test' }),
  })
);

app.use("*", (req, res, next) => {
  global.userIn = req.session.userID;
  next();
});

app.use("/", pageRoute);
app.use("/user", userRoute);
app.use("/doctor", doctorRoute);
app.use("/donator", donatorRoute);
app.use("/patient", patientRoute);

app.listen(3000, () => {
  console.log(`Server running on port : 3000`);
});
