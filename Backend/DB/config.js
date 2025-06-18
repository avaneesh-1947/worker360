import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/newWorker";

mongoose
  .connect(URL);

export default mongoose;