const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  registerDate: { type: String, default: Date.now() },
  TC: { type: String },
  phoneNumber: { type: String },
  role: {
    type: String,
    enum: ["donator", "doctor", "patient"],
    default: "donator",
  },
});

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
