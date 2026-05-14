import mongoose from "mongoose";

async function connectDB() {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/AroundMe`);

    console.log(`MongoDB Connected`);

  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
}

export default connectDB;