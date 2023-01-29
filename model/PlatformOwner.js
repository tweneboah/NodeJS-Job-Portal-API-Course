const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlatformOwnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "PlatformOwner",
    },
    contact: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const PlatformOwner = mongoose.model("PlatformOwner", PlatformOwnerSchema);

module.exports = PlatformOwner;
