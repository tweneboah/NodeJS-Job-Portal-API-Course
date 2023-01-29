const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSeekerSchema = new Schema({
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
  resume: {
    type: String,
  },
  applications: [
    {
      type: ObjectId,
      ref: "Application",
    },
  ],
});

module.exports = mongoose.model("JobSeeker", JobSeekerSchema);
