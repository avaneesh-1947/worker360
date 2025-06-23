import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/WorkerProject";

mongoose.connect(URL);

export default mongoose;
