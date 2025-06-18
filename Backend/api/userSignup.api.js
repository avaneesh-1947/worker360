import  express from 'express';
import  client  from "../DB/client.js"; 
const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const newClient = new client(req.body);
    const savedClient = await newClient.save();

    res.status(201).send(savedClient.toObject());

  } 
  catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ error: "Registration failed" });
  }
});

export default router;