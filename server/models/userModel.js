const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean, // يجب أن يكون النوع Boolean لأنه يمثل خاصية إدارية
    required: false,
  },
});





// static signup method
userSchema.statics.signup = async function (
  firstName,
  lastName,
  email,
  password,
) {
  // validation
  console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("email:", email);
console.log("password:", password);

if (!firstName || !lastName || !email || !password) {
  throw Error("فى حاجة غلط");
}
  if (!validator.isEmail(email.trim())) {
    throw Error("Email not valid");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
    admin: false,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);

