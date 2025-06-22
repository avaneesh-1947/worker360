import express from "express";
import client from "../DB/client.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
    const client = await client.findOne({ email });
  if (!client) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

export default router;
