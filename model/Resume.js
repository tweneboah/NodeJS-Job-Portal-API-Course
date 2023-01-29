const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ResumeSchema = new Schema(
  {
    jobSeeker: {
      type: ObjectId,
      ref: "JobSeeker",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    education: [
      {
        degree: { type: String },
        fieldOfStudy: { type: String },
        school: { type: String },
        startYear: { type: String },
        endYear: { type: String },
      },
    ],
    experience: [
      {
        title: { type: String },
        company: { type: String },
        location: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    skills: [{ type: String }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Resume = mongoose.model("Resume", ResumeSchema);

module.exports = Resume;
