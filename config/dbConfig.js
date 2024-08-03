import mongoose from "mongoose";

export const connectMongo = () => {
  try {
    const connect = mongoose.connect("mongodb://localhost:27017/data");
    if (connect) console.log("connected");
  } catch (error) {
    console.log("error" + error);
  }
};
