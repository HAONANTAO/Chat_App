import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DMONGO_DB_URL);
  } catch (err) {
    console.log(err);
  }
};
