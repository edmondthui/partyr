const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: {
    type: String
  },
  username: {
    type: String
  },
  partyId:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "party"
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model("message", messageSchema)