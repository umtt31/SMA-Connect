const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Doctor = require("../models/Doctor");

exports.checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        const user = await User.findById(decodedToken.userId);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

exports.checkIfDoctor = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login')
      } else {
        const user = await User.findById(decodedToken.userId);
        if (user.role === 'doctor') {
          res.locals.user = user;
          next();
        } else {
          res.redirect("/login");
        }
      }
    });
  }
};

exports.checkIfDonator = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login')
      } else {
        const user = await User.findById(decodedToken.userId);
        if (user.role === 'donator') {
          res.locals.user = user;
          next();
        } else {
          res.redirect("/login");
        }
      }
    });
  }
};

exports.checkIfPatient = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login')
      } else {
        const user = await User.findById(decodedToken.userId);
        if (user.role === 'patient') {
          res.locals.user = user;
          next();
        } else {
          res.redirect("/login");
        }
      }
    });
  }
};
