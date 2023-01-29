const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    name: { type: String, required: true },
    website: { type: String },
    industry: { type: String },
    size: { type: String },
    location: { type: String },
    logo: { type: String },
    about: { type: String },
    jobListings: [{ type: Schema.Types.ObjectId, ref: "JobListing" }],
    category: { type: Schema.Types.ObjectId, ref: "CompanyCategory" },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    plan: {
      type: String,
      enum: ["Free", "Premium"],
      default: "Free",
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
