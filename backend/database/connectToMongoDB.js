import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    //link to my DB -URL
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connect to database");

    // 监听数据库连接事件
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    // 监听连接错误事件
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectToMongoDB;
