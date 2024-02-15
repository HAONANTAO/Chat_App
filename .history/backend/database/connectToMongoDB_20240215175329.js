import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    //link to my DB -URL
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connect to database");
  } catch (err) {
    console.log(err);
  }
};

export default connectToMongoDB;
