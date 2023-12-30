const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const Donator = require("../models/Donator");

exports.register_post = async (req, res) => {
  const user = await User.create(req.body);
  const userId = user._id;
  await user.save();
  if (req.body.role === "donator") {
    const donator = await Donator.create({ _id: userId, totalDonation: 0 });
    await donator.save();
  }
  return res.redirect("/login");
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }).then((user) => {
    if (user) {
      bcyrpt.compare(password, user.password, function (err, result) {
        if (result) {
          req.session.userID = user._id;
          const token = createToken(user._id);
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
          });

          if (user.role === "donator") {
            res.redirect("/donator");
          } else if (user.role === "doctor") {
            res.redirect("/doctor");
          } else if (user.role === "patient") {
            res.redirect("/patient");
          }
        } else {
          res.send("wrong password");
        }
      });
    } else {
      res.send("no such email");
    }
  });
};

exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

exports.login_get = (req, res) => {
  res.render("login.ejs");
};

exports.register_get = (req, res) => {
  res.render("signup.ejs");
};
