const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
  message: {
    type: String
  },
  username: {
    type: String
  },
  partyId:{ 
    type: Schema.Types.ObjectId,
    ref: "party"
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model("message", messageSchema)