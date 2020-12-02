const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  checked: {
      type: Boolean,
      default: false
  }
});

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;