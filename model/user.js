const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: string, require: true },
    PhoneNumber: { type: number, required: true },
    address: { type: string },
    usertype: {
      type: string,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
