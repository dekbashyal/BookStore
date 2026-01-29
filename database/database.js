import mongoose from "mongoose";

export const connecttoDB = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to database successfully");
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    throw err;
  }
};
