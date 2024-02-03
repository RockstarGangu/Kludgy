import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectedInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/hacks`
    );
    console.log(`\n MongoDB connected!! DB HOST: ${connectedInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: " + error);
    process.exit(1);
  }
};

export default connectDB;