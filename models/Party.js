const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({
  host: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  guests: [{
    type: Schema.Types.ObjectId,
    ref: "users", 
  }],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    require: true
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "item", 
  }],
  color: {
    type: String
  }
});

const Party = mongoose.model("party", PartySchema);
module.exports = Party;


