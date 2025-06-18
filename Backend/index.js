import express from "express";
import "./DB/config.js";
import cors from "cors";
import dotenv from "dotenv";
import clientReg from "./api/userSignup.api.js"; 
import workerReg from "./api/wrokerReg.api.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/userReg', clientReg);
app.use('/workerReg', workerReg);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});