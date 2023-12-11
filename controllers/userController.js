const bcyrpt = require("bcrypt");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  return res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }).then((user) => {
    if (user) {
      bcyrpt.compare(password, user.password, function (err, result) {
        if (result) {
          req.session.userID = user._id;
          console.log(req.session.userID);
          res.send("login");
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
    res.status(200).redirect('/');
  });
}

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params._id);
  res.send("user deleted");
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.bod);
  res.send("user updated");
};
