import UserDetails from "../models/userDetails.models.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createUserDetails = async (req, res, next) => {
  const {
    firstName,
    fathersName,
    surname,
    mothersName,
    age,
    gender,
    address,
    dob,
    phoneNumber,
    email,
    education,
    religion,
    martialStatus,
    occupation,
    annualIncome,
    preferredAgeRange,
    preferredHeightRange,
    preferredEducation,
    preferredComplexion,
    preferredProfession,
    preferredLocation,
  } = req.body;

  try {
    let profileUrl = "";

    // Check if a file is uploaded
    if (req.files && req.files.profileImage) {
      const file = req.files.profileImage;

      // Upload file to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `user_profiles/${file.name}`,
      });

      profileUrl = uploadResult.secure_url;
    }

    // Ensure profileUrl is not empty
    if (!profileUrl) {
      throw new Error("Profile image upload failed or not provided");
    }

    // Create new user details
    const newUserDetails = new UserDetails({
      yourProfileUrl: profileUrl,
      firstName,
      fathersName,
      surname,
      mothersName,
      age,
      gender,
      address,
      dob,
      phoneNumber,
      email,
      education,
      religion,
      martialStatus,
      occupation,
      annualIncome,
      preferredAgeRange,
      preferredHeightRange,
      preferredEducation,
      preferredComplexion,
      preferredProfession,
      preferredLocation,
    });

    await newUserDetails.save();

    res.status(201).json(newUserDetails);
  } catch (error) {
    next(error);
  }
};

export { createUserDetails };
