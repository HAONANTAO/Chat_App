import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.)
  } catch (err) {
    console.log(err);
  }
};
