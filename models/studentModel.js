const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  rollNo:{
    type: Number,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true 
  },
  ideation:{
    type: Number,
    required: false
  },
  execution: {
    type: Number,
    required: false
  },
  viva: {
    type: Number,
    required: false
  },
  pitch: {
    type: Number,
    required: false
  },
  total: {
    type: Number,
    required: false
  },
  isAssigned: {
    type: Boolean,
    required: false,
    default: false
  },
  isAvailable: {
    type: Boolean,
    require: false,
    default: true
  }
});
module.exports = mongoose.model("student", userSchema);
