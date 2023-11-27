const mongoose = require("mongoose");

const Schema = mongoose.Schema

const projectSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
}, {timestamps: true});


module.exports = mongoose.model("project", projectSchema)