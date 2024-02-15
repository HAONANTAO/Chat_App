import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.eventNames.DB)
  } catch (err) {
    console.log(err);
  }
};
