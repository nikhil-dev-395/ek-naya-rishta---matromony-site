import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema(
  {
    yourProfileUrl: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    fathersName: {
      type: String,
      required: true,
    },
    surname: String,
    mothersName: String,
    age: {
      type: Number,
      min: 18,
      max: 120,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: Date,
      required: true,
    },
    phoneNumber: {
      type: String,
      match: /^\d{10}$/,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    address: String,
    height: String,
    weight: String,
    education: {
      type: String,
      enum: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "PhD",
        "Other",
      ],
    },
    religion: String,
    martialStatus: {
      type: String,
      enum: ["unmarried", "divorced"],
    },
    occupation: String,
    annualIncome: String,
    preferredAgeRange: {
      type: String,
      enum: ["18-25", "26-35", "36-45", "46+"],
    },
    preferredHeightRange: String,
    preferredEducation: {
      type: String,
      enum: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "PhD",
        "Other",
      ],
    },
    preferredReligion: String,
    preferredComplexion: {
      type: String,
      enum: ["Fair", "Medium", "Dark"],
    },
    preferredProfession: String,
    preferredLocation: String,
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

export default UserDetails;
