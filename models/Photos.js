const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    uploader: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    fileLink: {
      type: String,
    },
    s3_key: {
      type: String,
    }
  }, {
  timestamps: true,
  }
);

const Photo = mongoose.model("photos", PhotoSchema);
module.exports = Photo;
