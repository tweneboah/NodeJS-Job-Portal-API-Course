const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobListingSchema = new Schema(
  {
    jobTitle: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    location: { type: String, required: true },
    jobDescription: { type: String, required: true },
    requirements: [{ type: String }],
    salary: { type: Number, required: true },
    jobCatory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobCategory",
      required: true,
    },
    applicationDeadline: { type: Date, required: true },
    responsibilities: [{ type: String }],
    benefits: [{ type: String }],
    education: { type: String, required: true },
    experience: { type: String, required: true },
    skills: [{ type: String }],
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    numberOfApplicants: { type: mongoose.Types.ObjectId, ref: "Applicant" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const JobListing = mongoose.model("JobListing", JobListingSchema);

module.exports = JobListing;
