import mongoose from "mongoose";

const myDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("nombre", myDataSchema);
