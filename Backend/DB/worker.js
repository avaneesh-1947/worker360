import mongoose  from "mongoose";

const workerSchema = new mongoose.Schema({

    name: { type: String, required: true },
  occupation: { type: String, required: true }, 
  experience: { type: Number, required: true }, 
  wageperhr: { type: Number, required: true },
  location: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },


  skills: [{ type: String, required: true }], // e.g., ['Fan Repair', 'Wiring', 'AC Service']


})

const worker = mongoose.model("Workers" , workerSchema);
export default worker;