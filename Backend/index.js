import express from "express";
import "./DB/config.js";
import cors from "cors";
import dotenv from "dotenv";
import clientReg from "./api/userSignup.api.js"; 
import workerReg from "./api/wrokerReg.api.js";
import login from "./api/login.api.js";
import signup from "./api/signup.api.js";
import getWorker from "./api/getWorker.api.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

app.use('/userReg', clientReg);
app.use('/workerReg', workerReg);
app.use('/login', login);
app.use('/signup', signup);
app.use('/getWorker', getWorker); // <-- Add this line

const PORT =  3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});