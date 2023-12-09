const bcyrpt = require("bcrypt");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  return res.json(data);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }).then((user) => {
    if (user) {
      if (password == user.password) {
        req.session.userID = user._id;
        res.send("login");
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("no such email");
    }
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
