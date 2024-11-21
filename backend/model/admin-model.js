const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type : Boolean,
    default: true,
},
});
// Optional: Add a method to generate an admin-specific token
adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, isAdmin: true }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
};
module.exports = mongoose.model('Admin', adminSchema);