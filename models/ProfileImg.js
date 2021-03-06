const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoIncrement = require("mongoose-sequence")(mongoose);

let documentSchema = new Schema(
  {
    document_id: { type: Number, default: 0 },
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String }
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

documentSchema.plugin(AutoIncrement, { inc_field: "document_id" });

module.exports = mongoose.model("ProfileImage", documentSchema);