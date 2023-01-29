const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const CompanyCategory = mongoose.model(
  "CompanyCategory",
  CompanyCategorySchema
);

module.exports = CompanyCategory;
