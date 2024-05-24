import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn.connection;
  } catch (error) {
    console.log(error.message);
  }
};

