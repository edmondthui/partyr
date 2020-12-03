const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema(
  {
    uploader: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    description: {
      type: String,
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

const Document = mongoose.model("documents", DocumentSchema);
module.exports = Document;
