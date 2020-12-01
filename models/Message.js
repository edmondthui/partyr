const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: String,
  username: String
}, {
  timestamps: true,
})

module.exports = mongoose.model("message", messageSchema)