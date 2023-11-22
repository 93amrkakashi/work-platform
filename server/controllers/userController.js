const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const firstName = user.firstName;
    const lastName = user.lastName;
    const admin = user.admin;
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, firstName, lastName, admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req)

  try {
    const user = await User.signup(firstName, lastName, email, password, admin=false);
    console.log(firstName, lastName, email, password)

    // create a token
    const token = createToken(user._id);
    console.log(user);
    res.status(200).json({ email, token, firstName, lastName, admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

// get a user
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "this user does not exist" });
  }
  if (!user) {
    return res.status(400).json({ error: "this user does not exist" });
  }
  res.status(200).json(user);
};

module.exports = { signupUser, loginUser, getUsers, getUser };
