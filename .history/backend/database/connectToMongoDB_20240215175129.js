import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.conn
  } catch (err) {
    console.log(err);
  }
};
