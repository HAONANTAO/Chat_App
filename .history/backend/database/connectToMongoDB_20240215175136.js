import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect
  } catch (err) {
    console.log(err);
  }
};
