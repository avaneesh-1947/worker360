 import  express from 'express';
import  worker  from "../DB/worker.js"; 
const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const newWorker = new worker(req.body);
    const savedWorker = await newWorker.save();

    res.status(201).send(savedWorker.toObject());

  } 
  catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ error: "Registration failed" });
  }
});

export default router;