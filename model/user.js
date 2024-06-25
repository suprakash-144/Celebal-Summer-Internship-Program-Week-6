const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: string, require: true },
    PhoneNumber: { type: number, required: true },
    address: { type: string },
    usertype: {
      type: String,
      default: "Normal",
      enum: ["Normal", "Elite", "premimum"],
    },
    purchased: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
