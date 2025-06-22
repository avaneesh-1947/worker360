import mongoose from "mongoose";
import dotenv from "dotenv";  
dotenv.config(); // Load .env variables

const URL = process.env.URL; // Use the URL from .env

// const URL = "mongodb://localhost:27017/WorkerProject";

mongoose
  .connect(URL);

export default mongoose;