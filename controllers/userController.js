const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const Donator = require("../models/Donator");

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  const userId = user._id;
  await user.save();
  if (req.body.role === "donator") {
    const donator = await Donator.create({ _id: userId, totalDonation: 0 });
    await donator.save();
    console.log(donator);
  }
  return res.redirect("/");
};


const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  await User.findOne({ email }).then((user) => {
    if (user) {
      bcyrpt.compare(password, user.password, function (err, result) {
        if (result) {
          req.session.userID = user._id;

          const token = createToken(user._id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
          });

          if (user.role === "donator") {
            res.redirect("/");
          } else if (user.role === "doctor") {
            res.redirect("/doctor");
          } else if (user.role === "patient") {
            res.redirect("/patient");
          } else if (user.role === "admin") {
            res.redirect("/");
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

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.status(200).redirect("/");
  });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params._id);
  res.send("user deleted");
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.bod);
  res.send("user updated");
};
