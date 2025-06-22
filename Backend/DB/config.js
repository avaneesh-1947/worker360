import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGO_URL;

mongoose.connect(URL);

export default mongoose;