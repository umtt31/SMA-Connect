const express = require("express");
const mysql = require("mysql2");
const methodOverride = require("method-override");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const db = require("./db");

const userRoute = require("./routes/userRoute.js");
const doctorRoute = require("./routes/doctorRoute.js");
const pageRoute = require("./routes/pageRoute.js");
const patientRoute = require("./routes/patientRoute.js");
const donatorRoute = require("./routes/donatorRoute.js");

const app = express();

app.set("view engine", "ejs");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "123",
  database: "sma_connect_test",
};

const pool = mysql.createPool(dbConfig);

const sessionStore = new MySQLStore({ dbConfig }, pool); // Change this line

global.userIn = null;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000, // 1 hour (optional, set the expiration time for the session cookie)
    },
    store: sessionStore,
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
//app.use("/courses", courseRoute);

app.listen(3000, () => {
  console.log(`Server running on port : 3000`);
});
